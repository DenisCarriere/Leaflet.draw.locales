const en = require('./locales/en')
const fr = require('./locales/fr')

/**
 * Localization for Leaflet.draw
 *
 * @param {string} [language='en'] Language to localize Leaflet.draw
 * @param {Boolean} [automatic=true] Automatically defines Leaflet.draw locale
 * @example
 * var L = require('leaflet')
 * var drawLocales = require('leaflet-draw-locales')
 *
 * // Automatically defines Leaflet.draw locale
 * drawLocales('fr')
 *
 * // Customize locale language
 * var locale = drawLocales('fr')
 * locale.draw.toolbar.buttons.polygon = 'Awesome polygon!'
 * L.drawLocal = locale
 */
module.exports = function (language) {
  var locale
  switch (language) {
    case 'en':
    case 'en_US':
    case 'en_US.UTF-8':
    case 'english': {
      locale = en
      break
    }
    case 'fr':
    case 'fr_US':
    case 'fr_US.UTF-8':
    case 'french': {
      locale = fr
      break
    }
    default:
      locale = en
      break
  }
  // Automatically defines Leaflet.draw locale
  try {
    if (L && L.drawLocal) L.drawLocal = locale
  } catch (e) {
    // Did not modify Leaflet global
  }
  return locale
}
