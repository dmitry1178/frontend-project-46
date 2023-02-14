import formatPlain from './plain.js';
import formatStylish from './stylish.js';

const formatData = (data, outFormat) => {
  if (outFormat === 'stylish') return formatStylish(data);
  if (outFormat === 'plain') return formatPlain(data);
  if (outFormat === 'json') return JSON.stringify(data);
  return new Error(`Unknown format: ${outFormat}`);
};

export default formatData;
