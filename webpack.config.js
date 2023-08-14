const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DeadCodePlugin = require("webpack-deadcode-plugin");

const progressHandler = (percentage, message, ...args) => {
  console.info(`${percentage.toFixed(2) * 100} %`, message, ...args);
};

const MODE = "development";

const rules = [
  {
    test: /\.((c|sa|sc)ss)$/i,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: [["postcss-preset-env"]],
          },
        },
      },
    ],
  },
  {
    test: /\.m?js(x?)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        cacheDirectory: true,
      },
    },
  },
  {
    test: /\.ts(x?)$/,
    use: "ts-loader",
    exclude: /node_modules/,
  },
  {
    test: /\.(html)$/,
    use: "html-loader",
  },
  {
    test: /\.(png|jpg|jpeg|gif|svg|webp|ico)$/i,
    type: process.env.NODE_ENV === "production" ? "asset" : "asset/resource",
  },
  {
    test: /\.(woff2?|eot|ttf|otf)$/i,
    type: "asset/resource",
  },
];

module.exports = () => {
  console.log(MODE);
  return {
    mode: MODE,
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new webpack.ProgressPlugin(progressHandler),
      new MiniCssExtractPlugin({}),
      new DeadCodePlugin({
        patterns: ["src/**/*.(js|jsx|ts|tsx|css)"],
        exclude: ["**/*.(dist).(js|jsx)"],
      }),
    ],
    optimization: {
      usedExports: true,
      innerGraph: false,
    },
    entry: "./index.js",
    module: { rules },
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "build"),
      chunkFilename: "[name].bundle.js",
      publicPath: "/",
    },
    devServer: {
      server: "https",
      port: 8080,
      hot: true,
      historyApiFallback: true,
    },
    devtool: "inline-source-map",
  };
};
