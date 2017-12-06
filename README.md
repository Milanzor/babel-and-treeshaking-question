# Demo setup to show babel + webpack != tree shaking

Run

- `yarn install`
- `yarn build-with-babel`
- `yarn build-without-babel`
- Optional: `yarn build-with-babel:production` for -p in Webpack
- Optional: `yarn build-without-babel:production` for -p in Webpack


And check the files in the dist folder.

# Result

You will see that the export `square` is marked as an unused harmony export in the `dist/bundle-without-babel.js` file (It's at the bottom of the file)
Compare that to `dist/bundle-with-babel.js`, you'll see that babel transpiled my code, resulting in webpack not marking the `square` function as unused.

# What am I doing wrong?
