const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = (env, argv) => {
    const devMode = argv.mode !== 'production';

    return {
            entry: './src/index.js',
            output: {
                filename: devMode ? 'js/bundle.js' : 'js/bundle.[hash].js',
                path: path.resolve(__dirname, 'public'),
                chunkFilename: devMode ? 'js/chunk.[id].js' : 'js/chunk.[id].[hash].js',
                publicPath: '/'
            },
            module: {
                rules: [
                    {
                        test:/\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    },
                    {
                        test: /\.s?css$/,
                        use: [
                            {
                                loader: MiniCssExtractPlugin.loader,
                                options: {
                                    hmr: devMode
                                }
                            }, 
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: "postcss-loader",
                                options: {
                                    plugins: [
                                        autoprefixer()
                                    ],
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                            
                        ]

                    },
                    {
                        test: /\.(png|jpg|gif|svg)$/,
                        loader: 'file-loader'
                    }
                ]
            },
            plugins: [
                new CleanWebpackPlugin({
                    cleanOnceBeforeBuildPatterns: ['**/*']
                }),
                new MiniCssExtractPlugin({
                    filename: devMode ? 'css/style.css' : 'css/style.[contenthash].css',
                    chunkFilename: devMode ? 'css/chunk.[id].css' : 'css/chunk.[id].[contenthash].css',
                }),
                new HtmlWebpackPlugin(
                    {
                    template: 'src/index.html'
                }),
                new CopyPlugin({
                    patterns: [
                        {from: 'src/assets/img', to: 'assets/img'}
                    ]
                }),
                new ImageminPlugin({
                    disable: devMode, 
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    pngquant: {
                      quality: '95-100'
                    }
                })
            ],
            optimization: {
                splitChunks: {
                    chunks: 'all',
                    minSize: 30000
                }
            },
            devServer: {
                contentBase: path.resolve(__dirname, 'public'),
                port: 3000,
                open: true,
                historyApiFallback: true,
                publicPath: '/',
                proxy: {
                    '/api': {
                        target: 'http://localhost:4000/',
                        changeOrigin: true

                    }
                }
            },
            devtool: devMode ? 'source-map' : '' 
    }
};