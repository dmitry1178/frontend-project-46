
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { genDiff } from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const buildFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixtureFile = (filename) => readFileSync(buildFixturePath(filename), 'utf-8');

const formats = ['json', 'yml'];

const expectedStylish = readFixtureFile('expected_stylish');
const expectedPlain = readFixtureFile('expected_plain');
const expectedJSON = readFixtureFile('expected_json');

test.each(formats)('comparison display differences 2 files', (extension) => {
    const filepath1 = buildFixturePath(`file1.${extension}`);
    const filepath2 = buildFixturePath(`file2.${extension}`);
    expect(genDiff(filepath1, filepath2)).toEqual(expectedStylish);
    expect(genDiff(filepath1, filepath2, 'plain')).toEqual(expectedPlain);
    expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(expectedStylish);
    expect(genDiff(filepath1, filepath2, 'json')).toEqual(expectedJSON);
});