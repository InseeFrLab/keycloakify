import type { BuildContext } from "../shared/buildContext";
import cliSelect from "cli-select";
import chalk from "chalk";
import { join as pathJoin, relative as pathRelative } from "path";
import * as fs from "fs";
import { updateAccountThemeImplementationInConfig } from "./updateAccountThemeImplementationInConfig";
import { command as updateKcGenCommand } from "../update-kc-gen";
import { maybeDelegateCommandToCustomHandler } from "../shared/customHandler_delegate";
import { exitIfUncommittedChanges } from "../shared/exitIfUncommittedChanges";

export async function command(params: { buildContext: BuildContext }) {
    const { buildContext } = params;

    const { hasBeenHandled } = maybeDelegateCommandToCustomHandler({
        commandName: "initialize-account-theme",
        buildContext
    });

    if (hasBeenHandled) {
        return;
    }

    const accountThemeSrcDirPath = pathJoin(buildContext.themeSrcDirPath, "account");

    if (
        fs.existsSync(accountThemeSrcDirPath) &&
        fs.readdirSync(accountThemeSrcDirPath).length > 0
    ) {
        console.warn(
            chalk.red(
                `There is already a ${pathRelative(
                    process.cwd(),
                    accountThemeSrcDirPath
                )} directory in your project. Aborting.`
            )
        );

        process.exit(-1);
    }

    exitIfUncommittedChanges({
        projectDirPath: buildContext.projectDirPath
    });

    const { value: accountThemeType } = await cliSelect({
        values: ["Single-Page" as const, "Multi-Page" as const]
    }).catch(() => {
        process.exit(-1);
    });

    switch (accountThemeType) {
        case "Multi-Page":
            {
                const { initializeAccountTheme_multiPage } = await import(
                    "./initializeAccountTheme_multiPage"
                );

                await initializeAccountTheme_multiPage({
                    accountThemeSrcDirPath
                });
            }
            break;
        case "Single-Page":
            {
                const { initializeAccountTheme_singlePage } = await import(
                    "./initializeAccountTheme_singlePage"
                );

                await initializeAccountTheme_singlePage({
                    accountThemeSrcDirPath,
                    buildContext
                });
            }
            break;
    }

    updateAccountThemeImplementationInConfig({ buildContext, accountThemeType });

    await updateKcGenCommand({
        buildContext: {
            ...buildContext,
            implementedThemeTypes: {
                ...buildContext.implementedThemeTypes,
                account: {
                    isImplemented: true,
                    type: accountThemeType
                }
            }
        }
    });
}