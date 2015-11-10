#!/usr/bin/env node

import program from 'commander';
import pkg from '../../package.json';

program
  .version(pkg.version)
  .command('start [name]', 'Start presentation')
  .command('list', 'List of all installed themes and presentations')
  .parse(process.argv);
