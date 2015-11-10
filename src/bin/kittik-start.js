#!/usr/bin/env node

import program from 'commander';

program
  .usage('<file> [options]')
  .parse(process.argv);
