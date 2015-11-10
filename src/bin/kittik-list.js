#!/usr/bin/env node

import program from 'commander';

program
  .option('--only-themes', 'Print out installed themes')
  .parse(process.argv);
