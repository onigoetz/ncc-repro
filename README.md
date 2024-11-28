# NCC / Rslib issue repro

This is a small repository to show the difference between RSLib (0.1.0) and @vercel/ncc.

The goal of NCC is to be able to take an NPM package and compile it.
It is also able to follow links to resources such as `require.resolve()` of relative files and bundle them along

As an example, in this repository I try to bundle `css-loader` which has 3 of such dependencies.

Here in the source : https://github.com/webpack-contrib/css-loader/blob/master/src/index.js#L214-L230

## Behaviour in NCC

When running `yarn build:ncc` you can see that the `require.resolve()` is replaced by `__nccwpck_require__.ab + "sourceMaps.js"`. and the file in question is copied in the dist folder.

This is done by a webpack loader: https://github.com/vercel/webpack-asset-relocator-loader#how-it-works

## Behaviour in Rslib

When running `yarn build:rslib` the main library is compiled, but the `require.resolve()` calls remain and fail when using the library.
