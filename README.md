# Localization for Leaflet.draw

## Install

```bash
$ npm install --save leaflet-draw-locales
```

## Example

```js
var L = require('leaflet')
var drawLocales = require('leaflet-draw-locales')

// Automatically defines Leaflet.draw to the specified language
drawLocales('fr')

// Customize locale language
var locale = drawLocales('fr')
locale.draw.toolbar.buttons.polygon = 'Awesome polygon!'
L.drawLocal = locale
```

## Languages

| Code | Language    |
|------|-------------|
| en   | English     |
| fr   | French      |
