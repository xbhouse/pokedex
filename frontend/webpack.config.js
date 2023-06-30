const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = env => {
  return {
    mode: 'development',
    // where webpack will start bundling
    // regenerator-runtime required to fix async/await errors
    entry: ["regenerator-runtime/runtime.js", path.join(__dirname, "src", "index.js")],
    // output of bundled file and base path for all assets
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/app'
    },
    devServer: {
      host: '0.0.0.0',
      port: 3000,
      proxy: {
        '/api': {
          target: `${process.env.API_URL}`,
          changeOrigin: true,
          logLevel: 'debug',
          secure: false,
        }
      },
      allowedHosts: ['all']
    },
    module: {
        rules: [
          {
            // use babel-loader to transpile all files (except node_modules) ending with .js or .jsx  
            test: /\.js?$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                // used to transpile ES2015+ and JSX
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
          { // for style files
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          { // for image files
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ['file-loader'],
          },
        ]
      },
    plugins: [
        // injects script tag into /public/index.html and moves it to /dist
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html"),
        }),
        new Dotenv(),
        new webpack.DefinePlugin({
          API_URL: JSON.stringify(process.env.API_URL)
        })
    ],
  }
}