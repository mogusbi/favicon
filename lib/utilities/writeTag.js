'use strict';

module.exports = (config, tag) => {
  if ((tag.app && config.appEnabled) || !tag.app) {
    return `${tag.template}
`;
  }

  return '';
};
