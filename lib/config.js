'use strict';

module.exports = {
  app: {
    background: '#ffffff',
    name: 'Application name',
    theme: '#ffffff'
  },
  appEnabled: false,
  input: './src/favicon.png',
  output: {
    html: './dist/head.html',
    icons: './dist',
    publicPath: '/'
  },
  platforms: {
    android: true,
    apple: true,
    coast: true,
    favicons: true,
    windows: true
  }
};
