/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var pickFiles = require('broccoli-static-compiler');
var mergeTrees = require('broccoli-merge-trees');

var app = new EmberApp();
var fontAwesomeFonts = pickFiles('bower_components/font-awesome', {
  srcDir: '/fonts',
  files: ['**/*'],
  destDir: '/fonts'
});
var bootstrapFonts = pickFiles('bower_components/bootstrap', {
  srcDir: '/fonts',
  files: ['**/*'],
  destDir: '/fonts'
});

// bootstrap
app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');
app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');

// font-awsome
app.import('bower_components/font-awesome/css/font-awesome.min.css');


// normalize.css
// make browsers render things more consistently
app.import('vendor/normalize.css');

// animate.css
app.import('vendor/animate.css');

// jquery.metisMenu.js
app.import('vendor/jquery.metisMenu.js');

// imagesLoaed.js
app.import('bower_components/imagesLoaded/imagesloaded.pkgd.js');

// eventEmitter.js
app.import('bower_components/eventEmitter/EventEmitter.js');

// masonry
app.import('bower_components/masonry/dist/masonry.pkgd.js');

// bxSlider
app.import('vendor/bxslider/jquery.bxslider.js');
app.import('vendor/bxslider/jquery.bxslider.css');

// theme inspinia.js
app.import('vendor/style.css');

module.exports = mergeTrees([app.toTree(), bootstrapFonts, fontAwesomeFonts]);
