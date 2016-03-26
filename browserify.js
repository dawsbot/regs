const browserify = require('browserify');
const babelify = require('babelify');
const fs = require('fs');

browserify()
  .transform(babelify, {
    global: true,
    ignore: /\/node_modules\/(?!duplichar\/)/
  })
  .bundle()
  .pipe(fs.createWriteStream('bundle.js'));
