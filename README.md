# Leaflet.draw.locales

[![Build Status](https://travis-ci.org/DenisCarriere/Leaflet.draw.locales.svg?branch=master)](https://travis-ci.org/DenisCarriere/Leaflet.draw.locales)
[![npm version](https://badge.fury.io/js/leaflet-draw-locales.svg)](https://badge.fury.io/js/leaflet-draw-locales)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/DenisCarriere/Leaflet.draw.locales/master/LICENSE)

> Localization for [Leaflet.draw](https://github.com/Leaflet/Leaflet.draw), changing between languages is now effortless.

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
| es   | Spanish     |

## Submit a language

- Fork this repo
- Copy-paste an existing `.js` language from `locales/` as your template
- Include your new language in `index.js`, `test.js` & `index.d.ts`
- Submit your locales via a GitHub PR
