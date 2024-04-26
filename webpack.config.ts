import path from 'path'
// import type webpack from 'webpack'
// import type { Configuration, Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { webpack } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'


interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration
}

interface BuildEnv {
  mode: 'production' | 'development'
  port: number
}

export default (env: BuildEnv) => {


  const mode = env.mode || 'development';
  const port = env.port || 3000;

  const isDev = mode === 'development'

    const config: Configuration = {
        mode,
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            filename: '[name].[contenthash].js',
            path: path.resolve(__dirname, 'build'),
            clean: true
        },
        module: {
            rules: [
              {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    // "style-loader",//
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                                localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
                            },
                        },
                    },
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
              },
              {
                test: /\.css$/,
                use: [
                  isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                  'css-loader',
                ],
              },
              {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
              }
            ],
          },
          resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            preferAbsolute: true,
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
            mainFiles: ['index'],
            alias: {},
          },
          plugins: [
            new HTMLWebpackPlugin({
              template: path.resolve(__dirname, 'public', 'index.html')
            }),
            // new webpack.ProgressPlugin(),
            // new webpack.DefinePlugin()
            new MiniCssExtractPlugin({
              filename: 'css/[name].[contenthash:8].css',
              chunkFilename: 'css/[name].[contenthash:8].css',
            })
          ],
          devServer: isDev ? {
            port,
            open: true,
            historyApiFallback: true,
            hot: true,
          } : undefined,
          devtool: isDev ? 'inline-source-map': undefined,
    }
    return config 
};