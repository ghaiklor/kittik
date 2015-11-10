#!/usr/bin/env node

var program = require('commander');
var pkg = require('../../package.json');
var Cursor = require('../../lib/Cursor');

program
  .version(pkg.version)
  .command('start [name]', 'Start presentation')
  .command('list', 'List of all installed themes and presentations')
  .parse(process.argv);
