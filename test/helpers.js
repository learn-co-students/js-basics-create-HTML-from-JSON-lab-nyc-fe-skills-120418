const chai = require('chai')
global.expect = chai.expect
const fs = require('file-system')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require('babel-core');
const sinon = require('sinon')

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['env']
  }
);
//
const jsonResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'movies.json'), {
    presets: ['env']
  }
);
//

const jsonFix = jsonResult.code.slice(0,15)+"var "+jsonResult.code.slice(15)
const src = jsonFix + babelResult.code

jsdom({
  html, src
});
