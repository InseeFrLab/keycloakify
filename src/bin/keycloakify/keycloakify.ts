import { generateKeycloakThemeResources } from "./generateKeycloakThemeResources";
import { generateJavaStackFiles } from "./generateJavaStackFiles";
import { join as pathJoin, relative as pathRelative, basename as pathBasename } from "path";
import * as child_process from "child_process";
import { generateStartKeycloakTestingContainer } from "./generateStartKeycloakTestingContainer";
import * as fs from "fs/promises";
import { readBuildOptions } from "./BuildOptions";
import { getLogger } from "../tools/logger";
import { getCliOptions } from "../tools/cliOptions";
import jar from "../tools/jar";
import { assert } from "tsafe/assert";
import type { Equals } from "tsafe";
import { existsSync } from "fs";

const reactProjectDirPath = process.cwd();

export const keycloakThemeBuildingDirPath = pathJoin(reactProjectDirPath, "build_keycloak");
export const keycloakThemeEmailDirPath = pathJoin(keycloakThemeBuildingDirPath, "..", "keycloak_email");

export async function main() {
    console.time("keycloakify");

    const { isSilent, hasExternalAssets } = getCliOptions(process.argv.slice(2));
    const logger = getLogger({ isSilent });
    logger.log("🔏 Building the keycloak theme...⌚");

    const buildOptions = await readBuildOptions({
        "packageJson": (await fs.readFile(pathJoin(reactProjectDirPath, "package.json"))).toString("utf8"),
        "CNAME": await (async () => {
            const cnameFilePath = pathJoin(reactProjectDirPath, "public", "CNAME");

            if (!existsSync(cnameFilePath)) {
                return undefined;
            }

            return (await fs.readFile(cnameFilePath)).toString("utf8");
        })(),
        "isExternalAssetsCliParamProvided": hasExternalAssets,
        "isSilent": isSilent
    });

    const { doBundlesEmailTemplate } = await generateKeycloakThemeResources({
        keycloakThemeBuildingDirPath,
        keycloakThemeEmailDirPath,
        "reactAppBuildDirPath": pathJoin(reactProjectDirPath, "build"),
        buildOptions,
        //We have to leave it at that otherwise we break our default theme.
        //Problem is that we can't guarantee that the the old resources
        //will still be available on the newer keycloak version.
        "keycloakVersion": "11.0.3"
    });

    const { jarFilePath } = await generateJavaStackFiles({
        keycloakThemeBuildingDirPath,
        doBundlesEmailTemplate,
        buildOptions
    });

    switch (buildOptions.bundler) {
        case "none":
            logger.log("😱 Skipping bundling step, there will be no jar");
            break;
        case "keycloakify":
            logger.log("🫶 Let keycloakify do its thang");
            await jar({
                "rootPath": pathJoin(keycloakThemeBuildingDirPath, "src", "main", "resources"),
                "version": buildOptions.version,
                "groupId": buildOptions.groupId,
                "artifactId": buildOptions.artifactId,
                "targetPath": jarFilePath
            });
            break;
        case "mvn":
            logger.log("🫙 Run maven to deliver a jar");
            child_process.execSync("mvn package", { "cwd": keycloakThemeBuildingDirPath });
            break;
        default:
            assert<Equals<typeof buildOptions.bundler, never>>(false);
    }

    // We want, however, to test in a container running the latest Keycloak version
    const containerKeycloakVersion = "20.0.1";

    generateStartKeycloakTestingContainer({
        keycloakThemeBuildingDirPath,
        "keycloakVersion": containerKeycloakVersion,
        buildOptions
    });

    logger.log(
        [
            "",
            `✅ Your keycloak theme has been generated and bundled into ./${pathRelative(reactProjectDirPath, jarFilePath)} 🚀`,
            `It is to be placed in "/opt/keycloak/providers" in the container running a quay.io/keycloak/keycloak Docker image.`,
            "",
            //TODO: Restore when we find a good Helm chart for Keycloak.
            //"Using Helm (https://github.com/codecentric/helm-charts), edit to reflect:",
            "",
            "value.yaml: ",
            "    extraInitContainers: |",
            "        - name: realm-ext-provider",
            "          image: curlimages/curl",
            "          imagePullPolicy: IfNotPresent",
            "          command:",
            "            - sh",
            "          args:",
            "            - -c",
            `            - curl -L -f -S -o /extensions/${pathBasename(jarFilePath)} https://AN.URL.FOR/${pathBasename(jarFilePath)}`,
            "          volumeMounts:",
            "            - name: extensions",
            "              mountPath: /extensions",
            "        ",
            "        extraVolumeMounts: |",
            "            - name: extensions",
            "              mountPath: /opt/keycloak/providers",
            "    extraEnv: |",
            "    - name: KEYCLOAK_USER",
            "      value: admin",
            "    - name: KEYCLOAK_PASSWORD",
            "      value: xxxxxxxxx",
            "    - name: JAVA_OPTS",
            "      value: -Dkeycloak.profile=preview",
            "",
            "",
            `To test your theme locally you can spin up a Keycloak ${containerKeycloakVersion} container image with the theme pre loaded by running:`,
            "",
            `👉 $ ./${pathRelative(reactProjectDirPath, pathJoin(keycloakThemeBuildingDirPath, generateStartKeycloakTestingContainer.basename))} 👈`,
            "",
            "Test with different Keycloak versions by editing the .sh file. see available versions here: https://quay.io/repository/keycloak/keycloak?tab=tags",
            "",
            "Once your container is up and running: ",
            "- Log into the admin console 👉 http://localhost:8080/admin username: admin, password: admin 👈",
            '- Create a realm named "myrealm"',
            '- Create a client with ID: "myclient", "Root URL": "https://www.keycloak.org/app/" and "Valid redirect URIs": "https://www.keycloak.org/app/*"',
            `- Select Login Theme: ${buildOptions.themeName} (don't forget to save at the bottom of the page)`,
            `- Go to 👉 https://www.keycloak.org/app/ 👈 Click "Save" then "Sign in". You should see your login page`,
            "",
            "Video demoing this process: https://youtu.be/N3wlBoH4hKg",
            ""
        ].join("\n")
    );

    console.timeEnd("keycloakify");
}
