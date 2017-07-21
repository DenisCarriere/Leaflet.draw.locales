const en = require('./locales/en')
const fr = require('./locales/fr')

/**
 * Localization for Leaflet.draw
 *
 * @param {string} language Language to localize Leaflet.draw (options: en,fr)
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
  }
  console.log(locale)
}
