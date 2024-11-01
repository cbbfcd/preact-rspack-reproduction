import { rspack } from '@rspack/core';
import PreactRefreshRspackPlugin from '@rspack/plugin-preact-refresh';
const dev = process.env.NODE_ENV === 'development';

/** @type {import('@rspack/cli').Configuration} */
export default {
  entry: {
    main: './src/main.tsx',
  },
  experiments: {
    css: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
      'react/jsx-runtime': 'preact/jsx-runtime',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            experimental: {
              plugins: [
                [
                  '@swc/plugin-prefresh', // enable prefresh specific transformation
                  {}, // the customizable preact name, default is `["preact", "preact/compat", "react"]`
                ],
              ],
            },
            parser: {
              syntax: 'ecmascript',
              jsx: true,
            },
            transform: {
              react: {
                refresh: dev,
                development: dev,
                runtime: 'automatic',
              },
            },
          },
        },
        type: 'javascript/auto',
        exclude: [/node_modules\/@prefresh/, /node_modules\/preact/],
      },
      {
        test: /\.tsx?$/,
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            experimental: {
              plugins: [
                [
                  '@swc/plugin-prefresh', // enable prefresh specific transformation
                  {}, // the customizable preact name, default is `["preact", "preact/compat", "react"]`
                ],
              ],
            },
            parser: {
              syntax: 'typescript',
              tsx: true,
            },
            transform: {
              react: {
                refresh: dev,
                development: dev,
                runtime: 'automatic',
              },
            },
          },
        },
        type: 'javascript/auto',
        exclude: [/node_modules\/@prefresh/, /node_modules\/preact/],
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new rspack.HtmlRspackPlugin({
      template: './index.html',
      scriptLoading: 'blocking',
    }),
    dev && new rspack.HotModuleReplacementPlugin(),
    dev && new PreactRefreshRspackPlugin({}),
  ].filter(Boolean),
};
