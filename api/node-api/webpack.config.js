const path = require("path");

const { NODE_ENV = "production" } = process.env;

module.exports = {
  entry: "./src/server.ts",
  mode: NODE_ENV,
  target: "node",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "server.js",
  },
  externals: {
    express: 'require("express")',
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: "/node_modules/",
      },
    ],
  },
};
