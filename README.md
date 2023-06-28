# Leaflet.draw.locales

[![Build Status](https://travis-ci.org/DenisCarriere/Leaflet.draw.locales.svg?branch=master)](https://travis-ci.org/DenisCarriere/Leaflet.draw.locales)
[![npm version](https://badge.fury.io/js/leaflet-draw-locales.svg)](https://badge.fury.io/js/leaflet-draw-locales)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/DenisCarriere/Leaflet.draw.locales/master/LICENSE)

> Localization for [Leaflet.draw](https://github.com/Leaflet/Leaflet.draw), changing between languages is now effortless.

<img src="https://user-images.githubusercontent.com/550895/79383673-92bad980-7f33-11ea-8abc-8d34e838bd55.png" width=500 />


## Install

```bash
$ npm install --save leaflet-draw-locales
```

## Example

```js
import drawLocales from 'leaflet-draw-locales'

// Automatically defines Leaflet.draw to the specified language
drawLocales('fr')

// Customize locale language
const locale = drawLocales('fr')
locale.draw.toolbar.buttons.polygon = 'Awesome polygon!'
L.drawLocal = locale
```

## Languages

| Code | Language    |
|------|-------------|
| de   | German      |
| en   | English     |
| ar   | Arabic      |
| fi   | Finnish     |
| fr   | French      |
| hu   | Hungarian   |
| it   | Italian     |
| ka   | Georgian    |
| es   | Spanish     |
| pl   | Polish      |
| pt   | Portuguese  |
| ru   | Russian     |
| uk   | Ukrainian   |
| cs   | Czech       |
| sk   | Slovak      |
| nl   | Dutch       |
| no   | Norwegian   |
| am   | Amharic     |
| zh   | Chinese     |
| tr   | Turkish     |
| ro   | Romanian    |


## Submit a language

- Fork this repo
- Install node modules with `npm install`
- Copy-paste an existing `.ts` language from `src/locales/` as your template
- Include your new language in `src/index.ts`, it should be included at:
  - The import at the top, import your new file
  - The `language` contant should get the 2 letter identification for the language
  - The switch-case should be updated to support cases for your language, setting the `locale` to the 2 letter code for the language
  - The `Language` type should be edited to include a union of all possible cases for the language you added
- Include your language in the table in `README.md`
- Run `npm run test && npm run build` to confirm your code works properly
- Submit your locales via a GitHub PR
