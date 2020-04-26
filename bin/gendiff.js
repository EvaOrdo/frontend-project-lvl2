#!/usr/bin/env node

import commander from 'commander';

const program = new commander.Command();

program
  .version('0.0.1')
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f --format [type]', 'output format');
program.parse(process.argv);
