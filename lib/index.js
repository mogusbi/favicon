'use strict';

const {head, icons, manifests} = require('./data');
const {createHead, createIcons, createManifests} = require('./utilities');

module.exports = (config) => {
  const settings = config;
  const data = {
    head: head(settings),
    icons,
    manifests: manifests(settings)
  };

  const promises = [
    createHead(settings, data.head)
  ];

  for (const platform in data.icons) {
    if (data.icons.hasOwnProperty(platform) && settings.platforms[platform]) {
      promises.push(
        createIcons(settings, data.icons, platform)
      );
    }
  }

  for (const platform in data.manifests) {
    if (data.manifests.hasOwnProperty(platform) && settings.platforms[platform]) {
      promises.push(
        createManifests(settings, data.manifests, platform)
      );
    }
  }

  return Promise.all(promises)
    .catch(
      (err) => {
        throw new Error(err);
      }
    );
};
