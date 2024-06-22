import * as child_process from "child_process";
import * as fs from "fs";
import { join } from "path";
import { startRebuildOnSrcChange } from "./startRebuildOnSrcChange";

fs.rmSync("node_modules", { recursive: true, force: true });
fs.rmSync("dist", { recursive: true, force: true });
fs.rmSync(".yarn_home", { recursive: true, force: true });

run("yarn install");
run("yarn build");

fs.rmSync(join("..", "keycloakify-starter", "node_modules"), {
    recursive: true,
    force: true
});

run("yarn install", { cwd: join("..", "keycloakify-starter") });

run(`npx tsx ${join("scripts", "link-in-app.ts")} keycloakify-starter`);

startRebuildOnSrcChange();

function run(command: string, options?: { cwd: string }) {
    console.log(`$ ${command}`);

    child_process.execSync(command, { stdio: "inherit", ...options });
}