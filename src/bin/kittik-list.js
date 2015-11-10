#!/usr/bin/env node

var program = require('commander');

program
  .option('--only-themes', 'Print out installed themes')
  .option('--only-presentations', 'Print out available presentations')
  .parse(process.argv);

console.log(program.onlyThemes);
