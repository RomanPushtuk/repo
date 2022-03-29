/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

const extraNodeModules = {
  modules: path.resolve(path.join(__dirname, '../../components')),
};

const nodeModulesPaths = [
  path.resolve(path.join(__dirname, './node_modules')),
];

const watchFolders = [
  path.resolve(path.join(__dirname, '../../components')),
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules,
    nodeModulesPaths,
  },
  watchFolders,
};
