import { readFileSync } from 'node:fs';
import path from 'path';
import yaml from 'js-yaml';
import _ from 'lodash';

const makeAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);

const fileExtension = (filepath) => path.extname(filepath).slice(1);

const readFile = (filepath) => {
    const data = readFileSync(makeAbsolutePath(filepath));
    const ext = fileExtension(filepath);
    if (ext === 'yml' || ext === 'yaml') return yaml.load(data);
    if (ext === 'json') return JSON.parse(data);
    return new Error(`Unknown file extension: ${ext}`);
};


const genDiff = (filepath1, filepath2) => {
    const data1 = readFile(filepath1);
    const data2 = readFile(filepath2);

    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const keys = _.sortBy(_.union(keys1, keys2));

    return keys.map((key) => {
        if (!Object.hasOwn(data1, key)) return { type: 'added', key, value: data2[key] };
        if (!Object.hasOwn(data2, key)) return { type: 'deleted', key, value: data1[key] };
        if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) return { type: 'nested', key, children: genDiff(data1[key], data2[key]) };
        if (!_.isEqual(data1[key], data2[key])) {
            return {
            type: 'changed',
            key,
            value1: data1[key],
            value2: data2[key],
            };
        }
        return { type: 'unchanged', key, value: data1[key] };
    });
};


const indent = (count) => ' '.repeat(count);

const stringify = (value, depth = 1) => {
    if (!_.isObject(value)) return String(value);
    const keys = Object.keys(value);
    const result = keys.map((key) => `${key}: ${stringify(value[key], depth + 1)}`);
    return `{\n${result.join('\n')}\n}`;
};

const stringFormation = (tree, depth = 1) => tree.map((node) => {
    if (node.type === 'nested') return `${indent(4)}${node.key}: {\n${iter(node.children, depth + 1)}}`;
    if (node.type === 'deleted') return `${indent(2)}- ${node.key}: ${stringify(node.value, depth)}`;
    if (node.type === 'added') return `${indent(2)}+ ${node.key}: ${stringify(node.value, depth)}`;
    if (node.type === 'changed') {
        const output1 = `${indent(2)}- ${node.key}: ${stringify(node.value1, depth)}`;
        const output2 = `${indent(2)}+ ${node.key}: ${stringify(node.value2, depth)}`;
        return `${output1}\n${output2}`;
    }
    if (node.type === 'unchanged') return `${indent(4)}${node.key}: ${stringify(node.value, depth)}`;
    return new Error(`Unknown type: ${node.type}`);
}).join('\n');

const formatStylish = (data) => `{\n${stringFormation(data)}\n}`;



console.log(genDiff('../__fixtures__/file1.json', '../__fixtures__/file2.json'));
console.log(stringify(genDiff('../__fixtures__/file1.json', '../__fixtures__/file2.json')));
console.log(formatStylish(genDiff('../__fixtures__/file1.json', '../__fixtures__/file2.json')));
