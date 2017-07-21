const {test} = require('tap')
const drawLocales = require('./')

test('leaflet-draw-locales', t => {
  for (const language of ['en', 'fr', '']) {
    const locale = drawLocales(language)
    // Draw
    t.assert(locale.draw.handlers, 'draw.handlers')
    t.assert(locale.draw.toolbar, 'draw.toolbar')
    // To-do add remaining

    // Edit
    t.assert(locale.edit.handlers, 'edit.handlers')
    t.assert(locale.edit.toolbar, 'edit.toolbar')
    // To-do add remaining
  }
  t.end()
})
