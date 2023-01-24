const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    // where webpack will start bundling
    entry: path.join(__dirname, "src", "index.js"),
    // output of bundled file and base path for all assets
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/app'
    },
    devServer: {
      host: '0.0.0.0',
      port: 3000,
      proxy: {
        '/api': 'http://localhost:5000',
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
        new Dotenv()
    ],
}