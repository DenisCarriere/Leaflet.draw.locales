// Type definitions for Leaflet.draw 0.40
// Project: https://github.com/DenisCarriere/Leaflet.draw.locales
// Definitions by: Denis Carriere <https://github.com/DenisCarriere>

declare function drawLocales(language: drawLocales.Languages): drawLocales.DrawLocal
declare namespace drawLocales {
  type Languages = 'en' | 'fr' | 'es'
  interface DrawLocal {
    draw?: Draw
    edit?: Edit
  }

  interface Draw {
    toolbar?: DrawToolbar,
    handlers?: DrawHandlers
  }

  interface Edit {
    toolbar?: EditToolbar,
    handlers?: EditHandlers
  }

  interface Action {
    title?: string
    text?: string
  }

  interface DrawToolbar {
    actions?: Action
    finish?: Action
    undo?: Action
    buttons?: {
      polyline?: string
      polygon?: string
      rectangle?: string
      circle?: string
      marker?: string
      circlemarker?: string
    }
  }

  interface Tooltip {
    start?: string
    cont?: string
    end?: string
  }

  interface DrawHandlers {
    circle?: {
      tooltip?: Tooltip
      radius?: string
    },
    circlemarker?: {
      tooltip?: Tooltip
    },
    marker?: {
      tooltip?: Tooltip
    },
    polygon?: {
      error?: string
      tooltip?: Tooltip
    },
    polyline?: {
      error?: string
      tooltip?: Tooltip
    },
    rectangle?: {
      tooltip?: Tooltip
    },
    simpleshape?: {
      tooltip?: Tooltip
    }
  }

  interface EditToolbar {
    actions?: {
      save?: Action
      cancel?: Action
      clearAll?: Action
    },
    buttons?: {
      edit?: string
      editDisabled?: string
      remove?: string
      removeDisabled?: string
    }
  }

  interface EditHandlers {
    edit?: {
      tooltip?: {
        text?: string
        subtext?: string
      }
    },
    remove?: {
      tooltip?: {
        text?: string
      }
    }
  }
}
export = drawLocales