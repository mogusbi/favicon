'use strict';

const {writeFile} = require('fs');

module.exports = (path, data, options) => new Promise(
  (resolve, reject) => writeFile(path, data, options, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve(data);
    }
  })
);
