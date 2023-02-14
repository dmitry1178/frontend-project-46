import { readFileSync } from 'node:fs';
import path from 'path';
import parse from './parsers.js';
import formatData from './formatters/index.js';
import diffTree from './diffTree.js';

const makeAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);

const fileExtension = (filepath) => path.extname(filepath).slice(1);

const readFile = (filepath) => {
  const data = readFileSync(makeAbsolutePath(filepath));
  const ext = fileExtension(filepath);
  return parse(data, ext);
};

const genDiff = (filepath1, filepath2, outFormat = 'stylish') => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const tree = diffTree(data1, data2);
  return formatData(tree, outFormat);
};

export default genDiff;
