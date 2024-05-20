import { readBuildOptions } from "./shared/buildOptions";
import type { CliCommandOptions as CliCommandOptions_common } from "./main";
import { promptKeycloakVersion } from "./shared/promptKeycloakVersion";
import { readMetaInfKeycloakThemes } from "./shared/metaInfKeycloakThemes";
import { accountV1ThemeName } from "./shared/constants";
import { SemVer } from "./tools/SemVer";
import type { KeycloakVersionRange } from "./shared/KeycloakVersionRange";
import { getJarFileBasename } from "./shared/getJarFileBasename";
import { assert, type Equals } from "tsafe/assert";
import * as fs from "fs";
import { join as pathJoin, posix as pathPosix } from "path";
import * as child_process from "child_process";
import chalk from "chalk";

export type CliCommandOptions = CliCommandOptions_common & {
    port: number;
    keycloakVersion: string | undefined;
};

export async function command(params: { cliCommandOptions: CliCommandOptions }) {
    exit_if_docker_not_installed: {
        let commandOutput: Buffer | undefined = undefined;

        try {
            commandOutput = child_process.execSync("docker --version", { "stdio": ["ignore", "pipe", "ignore"] });
        } catch {}

        if (commandOutput?.toString("utf8").includes("Docker")) {
            break exit_if_docker_not_installed;
        }

        console.log(
            [
                `${chalk.red("Docker required.")}`,
                `Install it with Docker Desktop: ${chalk.bold.underline("https://www.docker.com/products/docker-desktop/")}`,
                `(or any other way)`
            ].join(" ")
        );

        process.exit(1);
    }

    exit_if_docker_not_running: {
        let isDockerRunning: boolean;

        try {
            child_process.execSync("docker info", { "stdio": "ignore" });
            isDockerRunning = true;
        } catch {
            isDockerRunning = false;
        }

        if (isDockerRunning) {
            break exit_if_docker_not_running;
        }

        console.log([`${chalk.red("Docker daemon is not running.")}`, `Please start Docker Desktop and try again.`].join(" "));

        process.exit(1);
    }

    const { cliCommandOptions } = params;

    const buildOptions = readBuildOptions({ cliCommandOptions });

    exit_if_theme_not_built: {
        if (fs.existsSync(buildOptions.keycloakifyBuildDirPath)) {
            break exit_if_theme_not_built;
        }

        console.log(
            [`${chalk.red("The theme has not been built.")}`, `Please run ${chalk.bold("npx vite && npx keycloakify build")} first.`].join(" ")
        );
        process.exit(1);
    }

    const metaInfKeycloakThemes = readMetaInfKeycloakThemes({
        "keycloakifyBuildDirPath": buildOptions.keycloakifyBuildDirPath
    });

    const doesImplementAccountTheme = metaInfKeycloakThemes.themes.some(({ name }) => name === accountV1ThemeName);

    const { keycloakVersion, keycloakMajorNumber } = await (async function getKeycloakMajor(): Promise<{
        keycloakVersion: string;
        keycloakMajorNumber: number;
    }> {
        if (cliCommandOptions.keycloakVersion !== undefined) {
            return {
                "keycloakVersion": cliCommandOptions.keycloakVersion,
                "keycloakMajorNumber": SemVer.parse(cliCommandOptions.keycloakVersion).major
            };
        }

        console.log("On which version of Keycloak do you want to test your theme?");

        const { keycloakVersion } = await promptKeycloakVersion({
            "startingFromMajor": 17,
            "cacheDirPath": buildOptions.cacheDirPath
        });

        const keycloakMajorNumber = SemVer.parse(keycloakVersion).major;

        if (doesImplementAccountTheme && keycloakMajorNumber === 22) {
            console.log(
                [
                    "Unfortunately, Keycloakify themes that implements an account theme do not work on Keycloak 22",
                    "Please select any other Keycloak version"
                ].join(" ")
            );
            return getKeycloakMajor();
        }

        return { keycloakVersion, keycloakMajorNumber };
    })();

    const keycloakVersionRange: KeycloakVersionRange = (() => {
        if (doesImplementAccountTheme) {
            const keycloakVersionRange = (() => {
                if (keycloakMajorNumber <= 21) {
                    return "21-and-below" as const;
                }

                assert(keycloakMajorNumber !== 22);

                if (keycloakMajorNumber === 23) {
                    return "23" as const;
                }

                return "24-and-above" as const;
            })();

            assert<Equals<typeof keycloakVersionRange, KeycloakVersionRange.WithAccountTheme>>();

            return keycloakVersionRange;
        } else {
            const keycloakVersionRange = (() => {
                if (keycloakMajorNumber <= 21) {
                    return "21-and-below" as const;
                }

                return "22-and-above" as const;
            })();

            assert<Equals<typeof keycloakVersionRange, KeycloakVersionRange.WithoutAccountTheme>>();

            return keycloakVersionRange;
        }
    })();

    const { jarFileBasename } = getJarFileBasename({ keycloakVersionRange });

    const mountTargets = buildOptions.themeNames
        .map(themeName => {
            const themeEntry = metaInfKeycloakThemes.themes.find(({ name }) => name === themeName);

            assert(themeEntry !== undefined);

            return themeEntry.types
                .map(themeType => {
                    const localPathDirname = pathJoin(
                        buildOptions.keycloakifyBuildDirPath,
                        "src",
                        "main",
                        "resources",
                        "theme",
                        themeName,
                        themeType
                    );

                    return fs
                        .readdirSync(localPathDirname)
                        .filter(fileOrDirectoryBasename => !fileOrDirectoryBasename.endsWith(".properties"))
                        .map(fileOrDirectoryBasename => ({
                            "localPath": pathJoin(localPathDirname, fileOrDirectoryBasename),
                            "containerPath": pathPosix.join("/", "opt", "keycloak", "themes", themeName, themeType, fileOrDirectoryBasename)
                        }));
                })
                .flat();
        })
        .flat();

    const containerName = "keycloak-keycloakify";

    try {
        child_process.execSync(`docker rm ${containerName}`, { "stdio": "ignore" });
    } catch {}

    const child = child_process.spawn(
        "docker",
        [
            "run",
            ...["-p", `${cliCommandOptions.port}:8080`],
            ...["--name", containerName],
            ...["-e", "KEYCLOAK_ADMIN=admin"],
            ...["-e", "KEYCLOAK_ADMIN_PASSWORD=admin"],
            ...["-v", `${pathJoin(buildOptions.keycloakifyBuildDirPath, jarFileBasename)}:/opt/keycloak/providers/keycloak-theme.jar`],
            ...(keycloakMajorNumber <= 20 ? ["-e", "JAVA_OPTS=-Dkeycloak.profile=preview"] : []),
            ...mountTargets.map(({ localPath, containerPath }) => ["-v", `${localPath}:${containerPath}:rw`]).flat(),
            `quay.io/keycloak/keycloak:${keycloakVersion}`,
            "start-dev",
            ...(21 <= keycloakMajorNumber && keycloakMajorNumber < 24 ? ["--features=declarative-user-profile"] : [])
        ],
        {
            "cwd": buildOptions.keycloakifyBuildDirPath
        }
    );

    child.stdout.on("data", data => process.stdout.write(data));

    child.stderr.on("data", data => process.stderr.write(data));

    {
        const handler = async (data: Buffer) => {
            if (!data.toString("utf8").includes("Listening on: http://0.0.0.0:8080")) {
                return;
            }

            child.stdout.off("data", handler);

            await new Promise(resolve => setTimeout(resolve, 1_000));

            console.log(
                [
                    "",
                    `${chalk.green("Your theme is accessible at:")}`,
                    `${chalk.green("➜")} ${chalk.cyan.bold("https://test.keycloakify.dev/")}`,
                    ""
                ].join("\n")
            );
        };

        child.stdout.on("data", handler);
    }

    child.on("exit", process.exit);
}