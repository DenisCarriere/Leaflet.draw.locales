const {test} = require('tap')
const drawLocales = require('./')

test('leaflet-draw-locales', t => {
  for (const language of ['en', 'fr', 'es', 'cs']) {
    const locale = drawLocales(language)
    // Draw
    t.assert(locale.draw.handlers, 'draw.handlers')
    t.assert(locale.draw.toolbar, 'draw.toolbar')
    // To-do add remaining

    // Edit
    t.assert(locale.edit.handlers, 'edit.handlers')
    // To-do add remaining
    t.assert(locale.edit.toolbar, 'edit.toolbar')

    // Edit.toolbar.actions
    t.assert(locale.edit.toolbar.actions, 'edit.toolbar.actions')
    t.assert(locale.edit.toolbar.actions.cancel, 'edit.toolbar.actions.cancel')
    t.assert(locale.edit.toolbar.actions.clearAll, 'edit.toolbar.actions.clearAll')
    t.assert(locale.edit.toolbar.actions.save, 'edit.toolbar.actions.save')

    // Edit.toolbar.buttons
    t.assert(locale.edit.toolbar.buttons, 'edit.toolbar.buttons')
    t.assert(locale.edit.toolbar.buttons.edit, 'edit.toolbar.buttons.edit')
    t.assert(locale.edit.toolbar.buttons.editDisabled, 'edit.toolbar.buttons.editDisabled')
    t.assert(locale.edit.toolbar.buttons.remove, 'edit.toolbar.buttons.remove')
    t.assert(locale.edit.toolbar.buttons.removeDisabled, 'edit.toolbar.buttons.removeDisabled')
  }
  t.end()
})
