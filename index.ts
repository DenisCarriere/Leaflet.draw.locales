import cs from "./locales/cs";
import en from "./locales/en";
import es from "./locales/es";
import fr from "./locales/fr";
import pt from "./locales/pt";
import ru from "./locales/ru";
import sk from "./locales/sk";
import uk from "./locales/uk";

export const languages = ["en", "fr", "es", "ru", "cs", "uk", "pt", "sk"];

/**
 * Localization for Leaflet.draw, changing between languages is now effortless.
 *
 * @param {string} [language='en'] Language to localize Leaflet.draw
 *
 * @example
 * import L from 'leaflet'
 * import drawLocales from 'leaflet-draw-locales'
 *
 * // Automatically defines Leaflet.draw locale
 * drawLocales('fr')
 *
 * // Customize locale language
 * const locale = drawLocales('fr')
 * locale.draw.toolbar.buttons.polygon = 'Awesome polygon!'
 * L.drawLocal = locale
 */
export default function(language: string): DrawLocal {
  let locale = en;
  switch (language) {
    case "en":
    case "en_US":
    case "en_US.UTF-8":
    case "english": {
      locale = en;
      break;
    }
    case "fr":
    case "fr_US":
    case "fr_US.UTF-8":
    case "french": {
      locale = fr;
      break;
    }
    case "es":
    case "es_US":
    case "es_US.UTF-8":
    case "spanish": {
      locale = es;
      break;
    }
    case "sk":
    case "sk_SK":
    case "sk_SK.UTF-8":
    case "slovak": {
      locale = sk;
      break;
    }
    case "pt":
    case "pt_PT":
    case "pt_PT.UTF-8":
    case "portuguese": {
      locale = pt;
      break;
    }
    case "uk":
    case "uk_UA":
    case "uk_UA.UTF-8":
    case "ukrainian": {
      locale = uk;
      break;
    }
    case "cs":
    case "cs_CZ":
    case "cs_CZ.UTF-8":
    case "czech": {
      locale = cs;
      break;
    }
    case "ru":
    case "ru_RU":
    case "ru_RU.UTF-8":
    case "russian": {
      locale = ru;
      break;
    }
    default:
      throw new Error("[language] not found");
  }
  // Automatically defines Leaflet.draw locale
  try {
    if (L && L.drawLocal) { L.drawLocal = locale; }
  } catch (e) {
    // Did not modify Leaflet.draw global
  }
  return locale;
}

declare class L {
  public static drawLocal: any;
}

export interface DrawLocal {
  draw: Draw;
  edit: Edit;
}

export interface Draw {
  toolbar: DrawToolbar;
  handlers: DrawHandlers;
}

export interface Edit {
  toolbar: EditToolbar;
  handlers: EditHandlers;
}

export interface Action {
  title: string;
  text: string;
}

export interface DrawToolbar {
  actions: Action;
  finish: Action;
  undo: Action;
  buttons: {
    polyline: string
    polygon: string
    rectangle: string
    circle: string
    marker: string
    circlemarker: string,
  };
}

export interface Tooltip {
  start?: string;
  cont?: string;
  end?: string;
}

export interface DrawHandlers {
  circle: {
    tooltip: {
      start: string,
    }
    radius: string,
  };
  circlemarker: {
    tooltip: {
      start: string,
    },
  };
  marker: {
    tooltip: {
      start: string,
    },
  };
  polygon: {
    tooltip: {
      start: string,
      cont: string,
      end: string,
    },
  };
  polyline: {
    error: string
    tooltip: {
      start: string,
      cont: string,
      end: string,
    },
  };
  rectangle: {
    tooltip: {
      start: string,
    },
  };
  simpleshape: {
    tooltip: {
      end: string,
    },
  };
}

export interface EditToolbar {
  actions: {
    save: Action
    cancel: Action
    clearAll: Action,
  };
  buttons: {
    edit: string
    editDisabled: string
    remove: string
    removeDisabled: string,
  };
}

export interface EditHandlers {
  edit: {
    tooltip: {
      text: string
      subtext: string,
    },
  };
  remove: {
    tooltip: {
      text: string,
    },
  };
}
