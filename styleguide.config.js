const path = require("path");

module.exports = {
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
      ],
    },
  },
  title: "React Components Library",
  styleguideDir: "dist-docs",
  moduleAliases: {
    westreact: path.resolve(__dirname, "src"),
  },
};
