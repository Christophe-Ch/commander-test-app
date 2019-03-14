#!/usr/bin/env node

const program = require('commander');

program
    .command('hw')
    .action((dir, cmd) => {
        console.log("Hello World!")
    });

program.parse(process.argv);