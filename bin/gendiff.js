#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();
import { genDiff, formatStylish } from '../src/index.js';

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .option('-f, --format <type>', 'output format')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .action((filepath1, filepath2) => {
        console.log(formatStylish(genDiff(filepath1, filepath2, program.opts().format)));
    })

program.parse();