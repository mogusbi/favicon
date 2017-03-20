'use strict';

const jsonxml = require('jsontoxml');
const {extname, join} = require('path');
const mkdirp = require('./mkdirp');
const writeFile = require('./writeFile');

module.exports = (config, manifests, platform) => {
  const promises = [];

  for (const manifest in manifests[platform]) {
    if (manifests[platform].hasOwnProperty(manifest)) {
      let contents = '';

      switch (extname(manifest)) {
      case '.json':
        contents = JSON.stringify(manifests[platform][manifest], null, '\t');
        break;
      case '.xml':
        contents = jsonxml(manifests[platform][manifest], {
          prettyPrint: true,
          xmlHeader: true
        });
        break;
      default:
      }

      promises.push(
        mkdirp(config.output.icons)
          .then(
            () => writeFile(join(config.output.icons, manifest), contents)
          )
      );
    }
  }

  return Promise.all(promises);
};
