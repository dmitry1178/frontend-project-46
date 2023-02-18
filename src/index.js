import { readFileSync } from 'node:fs';
import path from 'path';
import parse from './parsers.js';
import formatData from './formatters/index.js';
import diffTree from './diffTree.js';

const makeAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);

const fileExtension = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, outFormat = 'stylish') => {
  const makeAbsolutePathFile1 = makeAbsolutePath(filepath1);
  const makeAbsolutePathFile2 = makeAbsolutePath(filepath2);
  const extFile1 = fileExtension(filepath1);
  const extFile2 = fileExtension(filepath2);
  const dataFile1 = readFileSync(makeAbsolutePathFile1);
  const dataFile2 = readFileSync(makeAbsolutePathFile2);
  const parseDataFile1 = parse(dataFile1, extFile1);
  const parseDataFile2 = parse(dataFile2, extFile2);

  const tree = diffTree(parseDataFile1, parseDataFile2);
  return formatData(tree, outFormat);
};

export default genDiff;
