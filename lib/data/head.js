'use strict';

const {join} = require('path');

module.exports = (config) => ({
  android: [{
    app: false,
    template: `<meta name="application-name" content="${config.app.name}">`
  }, {
    app: true,
    template: '<meta name="mobile-web-app-capable" content="yes">'
  }, {
    app: false,
    template: `<meta name="theme-color" content="${config.app.theme}">`
  }, {
    app: false,
    template: `<link rel="manifest" href="${join(config.output.publicPath, 'manifest.json')}">`
  }],
  apple: [{
    app: true,
    template: '<meta name="apple-mobile-web-app-capable" content="yes">'
  }, {
    app: true,
    template: '<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">'
  }, {
    app: false,
    template: `<meta name="apple-mobile-web-app-title" content="${config.app.name}">`
  }, {
    app: false,
    template: `<link rel="apple-touch-icon" sizes="114x114" href="${join(config.output.publicPath, 'apple-touch-icon-114x114.png')}">`
  }, {
    app: false,
    template: `<link rel="apple-touch-icon" sizes="120x120" href="${join(config.output.publicPath, 'apple-touch-icon-120x120.png')}">`
  }, {
    app: false,
    template: `<link rel="apple-touch-icon" sizes="144x144" href="${join(config.output.publicPath, 'apple-touch-icon-144x144.png')}">`
  }, {
    app: false,
    template: `<link rel="apple-touch-icon" sizes="152x152" href="${join(config.output.publicPath, 'apple-touch-icon-152x152.png')}">`
  }, {
    app: false,
    template: `<link rel="apple-touch-icon" sizes="180x180" href="${join(config.output.publicPath, 'apple-touch-icon-180x180.png')}">`
  }, {
    app: false,
    template: `<link rel="apple-touch-icon" sizes="57x57" href="${join(config.output.publicPath, 'apple-touch-icon-57x57.png')}">`
  }, {
    app: false,
    template: `<link rel="apple-touch-icon" sizes="60x60" href="${join(config.output.publicPath, 'apple-touch-icon-60x60.png')}">`
  }, {
    app: false,
    template: `<link rel="apple-touch-icon" sizes="72x72" href="${join(config.output.publicPath, 'apple-touch-icon-72x72.png')}">`
  }, {
    app: false,
    template: `<link rel="apple-touch-icon" sizes="76x76" href="${join(config.output.publicPath, 'apple-touch-icon-76x76.png')}">`
  }],
  coast: [{
    app: false,
    template: `<link rel="icon" type="image/png" sizes="228x228" href="${join(config.output.publicPath, 'coast-228x228.png')}">`
  }],
  favicons: [{
    app: false,
    template: `<link rel="icon" type="image/png" sizes="16x16" href="${join(config.output.publicPath, 'favicon-16x16.png')}">`
  }, {
    app: false,
    template: `<link rel="icon" type="image/png" sizes="32x32" href="${join(config.output.publicPath, 'favicon-32x32.png')}">`
  }, {
    app: false,
    template: `<link rel="shortcut icon" href="${join(config.output.publicPath, 'favicon.ico')}">`
  }],
  windows: [{
    app: false,
    template: `<meta name="msapplication-TileColor" content="${config.app.theme}">`
  }, {
    app: false,
    template: `<meta name="msapplication-TileImage" content="${join(config.output.publicPath, 'mstile-144x144.png')}">`
  }, {
    app: false,
    template: `<meta name="msapplication-config" content="${join(config.output.publicPath, 'browserconfig.xml')}">`
  }]
});
