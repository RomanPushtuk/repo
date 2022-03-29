const path = require('path');

module.exports = function override(config) {
  const rulesOneOf = config.module.rules[1].oneOf;
  rulesOneOf.push({
    test: /\.ts$/,
    include: path.join(__dirname, '../..', 'components'),
    use: ['ts-loader'],
  });

  return config;
};
