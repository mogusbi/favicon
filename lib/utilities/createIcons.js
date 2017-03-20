'use strict';

const Jimp = require('jimp');
const toIco = require('to-ico');
const {extname, join} = require('path');
const mkdirp = require('./mkdirp');
const writeFile = require('./writeFile');
const setImageBackground = require('./setImageBackground');

module.exports = (config, icons, platform) => {
  const promises = [];

  for (const icon in icons[platform]) {
    if (icons[platform].hasOwnProperty(icon)) {
      switch (extname(icon)) {
      case '.ico': {
        const pngStore = [];

        promises.push(
          Jimp.read(config.input)
            .then(
              (img) => new Promise(
                (resolve, reject) => icons[platform][icon].sizes.forEach(
                  (size, idx) => img
                    .clone()
                    .contain(size.width, size.height)
                    .getBuffer(
                      Jimp.MIME_PNG, (err, buffer) => {
                        if (err) {
                          reject(err);
                        } else {
                          pngStore.push(buffer);
                        }

                        if (idx === icons[platform][icon].sizes.length - 1) { // eslint-disable-line no-magic-numbers
                          resolve(pngStore);
                        }
                      }
                    )
                )
              )
            )
            .then(
              () => toIco(pngStore)
                .then(
                  (contents) => mkdirp(config.output.icons)
                    .then(
                      () => writeFile(join(config.output.icons, icon), contents)
                    )
                )
            )
        );

        break;
      }
      case '.png':
        switch (icons[platform][icon].transparent) {
        case true:
          promises.push(
            Jimp.read(config.input)
              .then(
                (img) => img
                  .contain(icons[platform][icon].width, icons[platform][icon].height)
                  .write(join(config.output.icons, icon))
              )
          );
          break;
        default:
          promises.push(
            Jimp.read(config.input)
              .then(
                (img) => {
                  const bgImg = setImageBackground(img, config.app.background);

                  return bgImg
                    .contain(icons[platform][icon].width, icons[platform][icon].height)
                    .write(join(config.output.icons, icon));
                }
              )
          );
        }
        break;
      default:
      }
    }
  }

  return Promise.all(promises);
};
