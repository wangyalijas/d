require('shelljs/global')

const ora = require('ora')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const spinner = ora('building components for production...')

spinner.start()
baseWebpackConfig.entry = {}

const envConfig = {
  'dev': {
    filename: 'win-design.js',
    library: 'win-design',
    libraryTarget: 'umd',
    env: 'developement'
  },
  'prod': {
    filename: 'win-design.min.js',
    library: 'win-design',
    libraryTarget: 'umd',
    env: 'production'
  }
}

const buildConfig = ({
  filename,
  library,
  libraryTarget,
  env
}) => {
  const config = merge(baseWebpackConfig, {
    entry: {
      main: './packages/index.js'
    },
    output: {
      filename,
      library,
      libraryTarget
    },
    externals: {
      vue: {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
      }
    }
  })
  // UglifyJs
  if (env === 'production') {
    config.plugins.push(
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false
          }
        },
        parallel: true
      })
    )
  }
  return config
}

Object.keys(envConfig).map(config =>
  webpack(buildConfig(envConfig[config]), (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(`${stats.toString({
      color: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    })}\n`)
  })
)
