'use strict';

const mkdirp = require('mkdirp');

module.exports = (dir, opts) => new Promise(
  (resolve, reject) => mkdirp(dir, opts, (err, made) => {
    if (err) {
      reject(err);
    } else {
      resolve(made);
    }
  })
);
