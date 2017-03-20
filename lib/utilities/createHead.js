'use strict';

const {dirname} = require('path');
const mkdirp = require('./mkdirp');
const writeFile = require('./writeFile');
const writeTag = require('./writeTag');

module.exports = (config, head) => {
  let output = '';

  const createTag = (tag) => {
    output += writeTag(config, tag);
  };

  for (const platform in head) {
    if (head.hasOwnProperty(platform)) {
      head[platform].forEach(createTag);
    }
  }

  return mkdirp(dirname(config.output.html))
    .then(
      () => writeFile(config.output.html, output)
    );
};
