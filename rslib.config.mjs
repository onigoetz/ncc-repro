import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      autoExternal: false,
      format: 'cjs',
      target: 'node',
      output: {
        distPath: {
          root: "dist_rslib"
        }
      },
    },
  ],
  module: {
    rules: [
      {
        // For node binary relocations, include ".node" files as well here
        test: /\.(m?js|node)$/,
        // it is recommended for Node builds to turn off AMD support
        parser: { amd: false },
        use: {
          loader: '@vercel/webpack-asset-relocator-loader',
          options: {
            debugLog: true,
          }
        }
      }
    ]
  }
});