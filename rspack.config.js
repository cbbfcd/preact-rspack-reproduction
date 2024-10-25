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
    // Docs: https://rspack.dev/guide/tech/preact#rspackplugin-preact-refresh
    rules: [
      // 加上这里配置就会有问题，注释掉正常
      {
        test: /\.jsx?$/,
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            // experimental: {
            //   plugins: [
            //     [
            //       '@swc/plugin-prefresh', // enable prefresh specific transformation
            //       {}, // the customizable preact name, default is `["preact", "preact/compat", "react"]`
            //     ],
            //   ],
            // },
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
