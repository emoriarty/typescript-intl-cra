// @flow
const fs = require('fs');
const R = require('ramda');
const glob = require('glob');
const babel = require('@babel/core');

process.env.NODE_ENV = 'production'; // For babel.transform

function extract(
  pattern /* : string */,
  babelPlugins /* : Array<string> */ = []
) /* : string */ {
  const srcPaths = glob.sync(pattern, { absolute: true });
  const relativeSrcPaths = glob.sync(pattern);
  const contents = srcPaths.map(p => fs.readFileSync(p, 'utf-8'));
  const filesAndContents = R.zip(srcPaths, contents);
  const reqBabelPlugins = babelPlugins.map(b => require.resolve(b));
  const messages = filesAndContents
    .map(fileAndContent => {
      const file = fileAndContent[0];
      const content = fileAndContent[1];

      return babel.transform(content, {
        filename: file,
        presets: [
          require.resolve('@babel/preset-react'),
          require.resolve('@babel/preset-typescript'),
        ],
        plugins: [
          require.resolve('babel-plugin-react-intl'),
          ...reqBabelPlugins,
        ],
        babelrc: false,
      });
    })
    .map(R.path(['metadata', 'react-intl', 'messages']));

  const result = R.zipWith(
    (m, r) => m.map(R.assoc('filepath', r)),
    messages,
    relativeSrcPaths
  )
    .filter(R.complement(R.isEmpty))
    .reduce(R.concat, []);

  return result;
}

module.exports = extract;
