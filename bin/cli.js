#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();
program
    .name("hihi")
    .version("1.0.0")
    .description("A simple CLI tool that logs arguments");
program
    .argument("<input>", "The input to log")
    .action((input) => {
    console.log(`${input}aaaa`);
});
program.parse();
//# sourceMappingURL=cli.js.map