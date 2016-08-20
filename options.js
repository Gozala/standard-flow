var eslint = require('eslint')
var path = require('path')
var pkg = require('./package.json')

module.exports = {
  bugs: pkg.bugs.url,
  cmd: 'standard-flow',
  eslint: eslint,
  eslintConfig: {
    configFile: path.join(__dirname, 'eslintrc.json')
  },
  formatter: '`standard-format` is no longer included with `standard`. Try using --fix instead.',
  homepage: pkg.homepage,
  tagline: 'Use JavaScript Standard Style (with Flow types)',
  version: pkg.version
}
