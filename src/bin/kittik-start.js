#!/usr/bin/env node

var program = require('commander');
var pkg = require('../../package.json');

program
  .version(pkg.version)
  .usage('<file> [options]')
  .parse(process.argv);
