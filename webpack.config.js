const path = require('path');
const version = require('./package.json').version;

const config = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('./dist'),
        publicPath: '/dist/',
        filename: 'webgl-perf-test.js',
        globalObject: 'this',
        library: 'PerfTest',
        libraryTarget: 'umd',
    },
    externals: {
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {
                            loose: true,
                            // debug: true,
                        }],
                    ],
                    plugins: [
                        'transform-class-properties',
                    ],
                },
            },
        }, {
            test: /\.(svg|png|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
            }],
        }],
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
    plugins: [],
    devtool: 'source-map',
    mode: 'development',
};

module.exports = config;

