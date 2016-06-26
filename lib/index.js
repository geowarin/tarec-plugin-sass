module.exports = function sassPlugin (context, operations) {

  operations.commands.modify('build')
    .before((context, args) => {

      var ExtractTextPlugin = operations.resolve('extract-text-webpack-plugin');
      context.webpackConfig.module.loaders.push({
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      });
    });

  operations.commands.modify('start')
    .before((context, args) => {

      context.webpackConfig.module.loaders.push({
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      });
    });
};