module.exports = function override(config) {
  config.module.rules.push({
    test: /\.ts$/,
    loader: "ts-loader",
  });
  return config;
};
