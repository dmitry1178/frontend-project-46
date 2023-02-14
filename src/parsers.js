import yaml from 'js-yaml';

const parse = (data, ext) => {
    if (ext === 'yml' || ext === 'yaml') return yaml.load(data);
    if (ext === 'json') return JSON.parse(data);
    return new Error(`Unknown file extension: ${ext}`);
};

export default parse;
