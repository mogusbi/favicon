'use strict';

const Tinycolor = require('tinycolor2');
const Jimp = require('jimp');

/**
 * Takes an existing image and applies a background colour to it
 * @param {Jimp} image the source Jimp instance
 * @param {string} background the desired background colour
 * @returns {Jimp} Jimp instance
 */
module.exports = (image, background) => {
  const HEX_MAX = 255;
  const X_POS = 0;
  const Y_POS = 0;
  const colour = new Tinycolor(background);
  const rgba = colour.toRgb();
  const canvas = new Jimp(image.bitmap.width, image.bitmap.height, Jimp.rgbaToInt(rgba.r, rgba.g, rgba.b, rgba.a * HEX_MAX));

  canvas.composite(image, X_POS, Y_POS);

  return canvas;
};
