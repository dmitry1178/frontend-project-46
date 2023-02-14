
import _ from 'lodash';

const stringify = (value) => {
    if (_.isObject(value)) return '[complex value]';
    if (typeof value === 'string') return `'${value}'`;
    return value;
};

const iter = (tree, path) => tree.flatMap((node) => {
    const propertyName = [...path, node.key];
    if (node.type === 'nested') return iter(node.children, propertyName);
    if (node.type === 'added') return `Property '${propertyName.join('.')}' was added with value: ${stringify(node.value)}`;
    if (node.type === 'deleted') return `Property '${propertyName.join('.')}' was removed`;
    if (node.type === 'changed') return `Property '${propertyName.join('.')}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
    if (node.type === 'unchanged') return [];
    return new Error(`Unknown type: ${node.type}`);
});

const formatPlain = (data) => `${iter(data, []).join('\n')}`;

export default formatPlain;
