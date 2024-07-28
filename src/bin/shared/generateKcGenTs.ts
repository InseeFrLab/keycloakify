import { assert, type Equals } from "tsafe/assert";
import { id } from "tsafe/id";
import type { BuildContext } from "./buildContext";
import * as fs from "fs/promises";
import { join as pathJoin } from "path";
import { existsAsync } from "../tools/fs.existsAsync";
import { z } from "zod";

export type BuildContextLike = {
    projectDirPath: string;
    themeNames: string[];
    environmentVariables: { name: string; default: string }[];
    themeSrcDirPath: string;
    implementedThemeTypes: Pick<
        BuildContext["implementedThemeTypes"],
        "login" | "account"
    >;
    packageJsonFilePath: string;
};

assert<BuildContext extends BuildContextLike ? true : false>();

export async function generateKcGenTs(params: {
    buildContext: BuildContextLike;
}): Promise<void> {
    const { buildContext } = params;

    const isReactProject: boolean = await (async () => {
        const parsedPackageJson = await (async () => {
            type ParsedPackageJson = {
                dependencies?: Record<string, string>;
                devDependencies?: Record<string, string>;
            };

            const zParsedPackageJson = (() => {
                type TargetType = ParsedPackageJson;

                const zTargetType = z.object({
                    dependencies: z.record(z.string()).optional(),
                    devDependencies: z.record(z.string()).optional()
                });

                assert<Equals<z.infer<typeof zTargetType>, TargetType>>();

                return id<z.ZodType<TargetType>>(zTargetType);
            })();

            return zParsedPackageJson.parse(
                JSON.parse(
                    (await fs.readFile(buildContext.packageJsonFilePath)).toString("utf8")
                )
            );
        })();

        return (
            {
                ...parsedPackageJson.dependencies,
                ...parsedPackageJson.devDependencies
            }.react !== undefined
        );
    })();

    const filePath = pathJoin(
        buildContext.themeSrcDirPath,
        `kc.gen.ts${isReactProject ? "x" : ""}`
    );

    const currentContent = (await existsAsync(filePath))
        ? await fs.readFile(filePath)
        : undefined;

    const hasLoginTheme = buildContext.implementedThemeTypes.login.isImplemented;
    const hasAccountTheme = buildContext.implementedThemeTypes.account.isImplemented;

    const newContent = Buffer.from(
        [
            `/* prettier-ignore-start */`,
            ``,
            `/* eslint-disable */`,
            ``,
            `// @ts-nocheck`,
            ``,
            `// noinspection JSUnusedGlobalSymbols`,
            ``,
            `// This file is auto-generated by Keycloakify`,
            ``,
            isReactProject && `import { lazy, Suspense, type ReactNode } from "react";`,
            ``,
            `export type ThemeName = ${buildContext.themeNames.map(themeName => `"${themeName}"`).join(" | ")};`,
            ``,
            `export const themeNames: ThemeName[] = [${buildContext.themeNames.map(themeName => `"${themeName}"`).join(", ")}];`,
            ``,
            `export type KcEnvName = ${buildContext.environmentVariables.length === 0 ? "never" : buildContext.environmentVariables.map(({ name }) => `"${name}"`).join(" | ")};`,
            ``,
            `export const kcEnvNames: KcEnvName[] = [${buildContext.environmentVariables.map(({ name }) => `"${name}"`).join(", ")}];`,
            ``,
            `export const kcEnvDefaults: Record<KcEnvName, string> = ${JSON.stringify(
                Object.fromEntries(
                    buildContext.environmentVariables.map(
                        ({ name, default: defaultValue }) => [name, defaultValue]
                    )
                ),
                null,
                2
            )};`,
            ``,
            `export type KcContext =`,
            hasLoginTheme && `    | import("./login/KcContext").KcContext`,
            hasAccountTheme && `    | import("./account/KcContext").KcContext`,
            `    ;`,
            ``,
            `declare global {`,
            `    interface Window {`,
            `        kcContext?: KcContext;`,
            `    }`,
            `}`,
            ``,
            ...(!isReactProject
                ? []
                : [
                      hasLoginTheme &&
                          `export const KcLoginPage = lazy(() => import("./login/KcPage"));`,
                      hasAccountTheme &&
                          `export const KcAccountPage = lazy(() => import("./account/KcPage"));`,
                      ``,
                      `export function KcPage(`,
                      `    props: {`,
                      `        kcContext: KcContext;`,
                      `        fallback?: ReactNode;`,
                      `    }`,
                      `) {`,
                      `    const { kcContext, fallback } = props;`,
                      `    return (`,
                      `        <Suspense fallback={fallback}>`,
                      `            {(() => {`,
                      `                switch (kcContext.themeType) {`,
                      hasLoginTheme &&
                          `                    case "login": return <KcLoginPage kcContext={kcContext} />;`,
                      hasAccountTheme &&
                          `                    case "account": return <KcAccountPage kcContext={kcContext} />;`,
                      `                }`,
                      `            })()}`,
                      `        </Suspense>`,
                      `    );`,
                      `}`
                  ]),
            ``,
            `/* prettier-ignore-end */`,
            ``
        ]
            .filter(item => typeof item === "string")
            .join("\n"),
        "utf8"
    );

    if (currentContent !== undefined && currentContent.equals(newContent)) {
        return;
    }

    await fs.writeFile(filePath, newContent);

    delete_legacy_file: {
        if (!isReactProject) {
            break delete_legacy_file;
        }

        const legacyFilePath = filePath.replace(/tsx$/, "ts");

        if (!(await existsAsync(legacyFilePath))) {
            break delete_legacy_file;
        }

        await fs.unlink(legacyFilePath);
    }
}