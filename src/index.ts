import cs from "./locales/cs";
import en from "./locales/en";
import es from "./locales/es";
import fr from "./locales/fr";
import nl from "./locales/nl";
import pt from "./locales/pt";
import ru from "./locales/ru";
import sk from "./locales/sk";
import uk from "./locales/uk";

export const languages: Language[] = ["en", "fr", "es", "ru", "cs", "uk", "pt", "sk", "nl"];

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
export const drawLocales = (language: Language): DrawLocal => {
  let locale = en;
  switch (language) {
    case "en":
    case "en_us":
    case "en_us.utf-8":
    case "english": {
      locale = en;
      break;
    }
    case "fr":
    case "fr_us":
    case "fr_us.utf-8":
    case "french": {
      locale = fr;
      break;
    }
    case "es":
    case "es_us":
    case "es_us.utf-8":
    case "spanish": {
      locale = es;
      break;
    }
    case "sk":
    case "sk_sk":
    case "sk_sk.utf-8":
    case "slovak": {
      locale = sk;
      break;
    }
    case "pt":
    case "pt_pt":
    case "pt_pt.utf-8":
    case "portuguese": {
      locale = pt;
      break;
    }
    case "uk":
    case "uk_ua":
    case "uk_ua.utf-8":
    case "ukrainian": {
      locale = uk;
      break;
    }
    case "cs":
    case "cs_cz":
    case "cs_cz.utf-8":
    case "czech": {
      locale = cs;
      break;
    }
    case "ru":
    case "ru_ru":
    case "ru_ru.utf-8":
    case "russian": {
      locale = ru;
      break;
    }
    case "nl":
    case "nl-nl":
    case "nl-nl.utf-8":
    case "nl-be":
    case "nl-be.utf-8":
    case "dutch":
    case "belgian":
    case "flemish":
      locale = nl;
      break;
    default:
      throw new Error("[language] not found");
  }
  // Automatically defines Leaflet.draw locale
  try {
    if (L && L.drawLocal) { L.drawLocal = locale; }
  } catch {
    // Did not modify Leaflet.draw global
  }
  return locale;
};

export default drawLocales;

declare class L {
  public static drawLocal: any;
}

export type Language =
  | "en" | "en_us" | "en_us.utf-8" | "english"
  | "fr" | "fr_us" | "fr_us.utf-8" | "french"
  | "es" | "es_us" | "es_us.utf-8" | "spanish"
  | "sk" | "sk_sk" | "sk_sk.utf-8" | "slovak"
  | "pt" | "pt_pt" | "pt_pt.utf-8" | "portuguese"
  | "uk" | "uk_ua" | "uk_ua.utf-8" | "ukrainian"
  | "cs" | "cs_cz" | "cs_cz.utf-8" | "czech"
  | "ru" | "ru_ru" | "ru_ru.utf-8" | "russian"
  | "nl" | "nl-nl" | "nl-nl.utf-8" | "dutch"
         | "nl-be" | "nl-be.utf-8" | "belgian" | "flemish";

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
