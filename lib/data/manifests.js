'use strict';

const join = require('url-join');

module.exports = (config) => ({
  android: {
    'manifest.json': {
      background_color: config.app.background, // eslint-disable-line camelcase
      display: config.appEnabled ? 'standalone' : 'browser',
      icons: [{
        sizes: '36x36',
        src: join(config.output.publicPath, 'android-chrome-36x36.png'),
        type: 'image/png'
      }, {
        sizes: '48x48',
        src: join(config.output.publicPath, 'android-chrome-48x48.png'),
        type: 'image/png'
      }, {
        sizes: '72x72',
        src: join(config.output.publicPath, 'android-chrome-72x72.png'),
        type: 'image/png'
      }, {
        sizes: '96x96',
        src: join(config.output.publicPath, 'android-chrome-96x96.png'),
        type: 'image/png'
      }, {
        sizes: '144x144',
        src: join(config.output.publicPath, 'android-chrome-144x144.png'),
        type: 'image/png'
      }, {
        sizes: '192x192',
        src: join(config.output.publicPath, 'android-chrome-192x192.png'),
        type: 'image/png'
      }, {
        sizes: '256x256',
        src: join(config.output.publicPath, 'android-chrome-256x256.png'),
        type: 'image/png'
      }, {
        sizes: '384x384',
        src: join(config.output.publicPath, 'android-chrome-384x384.png'),
        type: 'image/png'
      }, {
        sizes: '512x512',
        src: join(config.output.publicPath, 'android-chrome-512x512.png'),
        type: 'image/png'
      }],
      name: config.app.name,
      theme_color: config.app.theme // eslint-disable-line camelcase
    }
  },
  windows: {
    'browserconfig.xml': [{
      children: [{
        children: [{
          children: [{
            attrs: {
              src: join(config.output.publicPath, 'mstile-70x70.png')
            },
            name: 'square70x70logo'
          }, {
            attrs: {
              src: join(config.output.publicPath, 'mstile-150x150.png')
            },
            name: 'square150x150logo'
          }, {
            attrs: {
              src: join(config.output.publicPath, 'mstile-310x150.png')
            },
            name: 'wide310x150logo'
          }, {
            attrs: {
              src: join(config.output.publicPath, 'mstile-310x310.png')
            },
            name: 'square310x310logo'
          }, {
            name: 'TileColor',
            text: config.app.theme
          }],
          name: 'tile'
        }],
        name: 'msapplication'
      }],
      name: 'browserconfig'
    }]
  }
});
