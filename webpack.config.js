const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const baseConfig = require("./config/config");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "[name].js"
  },
  devtool: "source-map",
  module: {
    rules: [
      { test: /\.(js|ts|tsx)$/, exclude: /node_modules/,use:[
        "babel-loader",
         "ts-loader",
      ] 
      },
      // {
      //   test: /\.(less|css)$/,
      //   use: [
      //     "style-loader",
      //     { loader: "css-loader", options: { modules: true } },
      //     "less-loader"
      //   ],
      //   exclude: baseConfig.cssModulesExcludes || []
      // },
      {
        test: /\.(less|css)$/,
        use: ["style-loader", "css-loader", "less-loader"],
        // include: baseConfig.cssModulesExcludes || []
      },
      { test: /\.html$/, loader: "html-loader" },
      {
        test: /\.(jpg|png|gif)$/,
        loader: "url-loader",
        options: { limit: 50000, name: "images/[name]-[hash:8].[ext]" }
      },
      {
        test: /\.(mp3|eot|svg|ttf|woff|woff2|otf)$/,
        loader: "url-loader",
        options: { limit: 0, name: "audio/[name]-[hash:8].[ext]" }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      template: "./public/index.html",
      chunks: ["index"]
    }),
    new CleanWebpackPlugin(["dist"])
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      public: path.resolve(__dirname, "src/public")
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    host: "0.0.0.0",
    port: 8001,
    inline: true,
    proxy: {
      // '/api': {
      //   target: 'http://cs.xigemall.com',
      //   changeOrigin: true,
      // },
    },
    historyApiFallback: {
      //使用正则匹配命中路由
      rewrites: [{ from: /^\/./, to: "/" }]
    }
  }
};
