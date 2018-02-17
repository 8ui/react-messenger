const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const project = require('./project.config')

const __DEV__ = project.globals.__DEV__
const __PROD__ = project.globals.__PROD__
const __TEST__ = project.globals.__TEST__

const APP_ENTRIES = [project.paths.client('index.js')]

if (__DEV__) {
  APP_ENTRIES.unshift(
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${project.server_host}:${project.server_port}`,
    'webpack/hot/only-dev-server'
  )
}

const config = {
  devtool: project.compiler_devtool,

  entry: {
    app: APP_ENTRIES,
    vendor: project.compiler_vendors,
  },

  output: {
    path: project.paths.dist(),
    filename: `[name].[${project.compiler_hash_type}].js`,
    publicPath: project.compiler_public_path,
  },

  resolve: {
    modules: [
      project.paths.client(),
      'node_modules',
    ],
    alias: {
      'atoms': project.paths.client('views/components/atoms'),
      'molucules': project.paths.client('views/components/molucules'),
      'organisms': project.paths.client('views/components/organisms'),
      'templates': project.paths.client('views/components/templates'),
      'mixins': project.paths.client('views/components/mixins'),
      'themes': project.paths.client('views/components/themes'),
      'containers': project.paths.client('views/containers'),
      'core': project.paths.client('core'),
      app: project.paths.client(),
      assets: project.paths.assets(),
    },
    extensions: ['.jsx', '.js', '.json', '.scss'],
  },

  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(gif|png|jpe?g|svg|woff2?|ttf|eot)$/,
      loader: 'url-loader',
      options: {
        limit: 8000,
      },
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
      }],
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          localIdentName: '[path][name]--[local]',
        },
      }, {
        loader: 'postcss-loader',
        options: {
          plugins: () => [
            require('autoprefixer'),
          ],
        },
      }, {
        loader: 'sass-loader',
        options: {
          includePaths: [].concat(project.paths.assets()),
        },
      }],
    }],
  },

  plugins: [
    new webpack.DefinePlugin(project.globals),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],

  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
}

if (__DEV__) {
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: project.paths.public('index.html'),
      hash: false,
      filename: 'index.html',
      inject: 'body',
    })
  )
} else if (__PROD__) {
  config.plugins.push(
    new HtmlWebpackPlugin({
      inject: true,
      template: project.paths.public('index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin())
}

if (!__TEST__) {
  config.plugins.push(
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor'],
    }))
}

if (__TEST__) {
  config.module.rules.push({
    test: /\.spec\.js?$/,
    loader: 'babel-jest',
    exclude: /node_modules/,
  })
}

if (!__DEV__) {
  config.module.rules
    .filter(rule => String(rule.test).includes('css'))
    .forEach((rule) => {
      const first = rule.use[0]
      const rest = rule.use.slice(1)
      rule.use = ExtractTextPlugin.extract({
        fallback: first,
        use: rest,
      })
    })

  config.plugins.push(
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css',
      allChunks: true,
    }))
}

module.exports = config
