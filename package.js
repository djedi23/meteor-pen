Package.describe({
  name: 'djedi:pen',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'Enjoy live editing with Meteor',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles([
    'pen/src/font/fontello.eot',
    'pen/src/font/fontello.svg',
    'pen/src/font/fontello.ttf',
    'pen/src/font/fontello.woff',
    'pen/src/pen.js',
    'pen/src/pen.css'], 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('djedi:pen');
  api.addFiles('pen-tests.js');
});
