module.exports = function sassPlugin (context, operations) {

  operations.commands.modify('build')
    .before((context, args) => {

      var ExtractTextPlugin = operations.dependencies.resolve('extract-text-webpack-plugin');
      context.webpackConfig.module.loaders.push({
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!sass' })
      });
    });

  operations.commands.modify('start')
    .before((context, args) => {

      context.webpackConfig.module.loaders.push({
        test: /\.scss$/,
        loaders: ['style', 'css?sourceMap', 'sass']
      });
    });
};