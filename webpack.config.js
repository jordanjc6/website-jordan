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
      clean: true,
      publicPath: ''
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
          use: ["url-loader"]
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin()
    ]
};