// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Merge source extensions safely
config.resolver.sourceExts = [
  ...new Set([
    ...config.resolver.sourceExts,
    'ts',
    'tsx',
    'cjs',
    'mjs',
  ]),
];

module.exports = config;
