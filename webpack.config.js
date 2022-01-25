var path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    devtool: 'inline-source-map',
    devServer: {
      static: path.join(__dirname),
    },
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
          include: path.join(__dirname, 'src')
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin()
    ]
};