#!/usr/bin/env node

const program = require('commander');

// Commands loader
const normalizedPath = require("path").join(__dirname, "commands");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  const com = require("./commands/" + file);
  com(program);
});

program.parse(process.argv);