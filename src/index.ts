import am from "./locales/am";
import cs from "./locales/cs";
import de from "./locales/de";
import en from "./locales/en";
import es from "./locales/es";
import fi from "./locales/fi";
import fr from "./locales/fr";
import hu from "./locales/hu";
import it from "./locales/it";
import ka from "./locales/ka";
import nl from "./locales/nl";
import no from "./locales/no";
import pl from "./locales/pl";
import pt from "./locales/pt";
import ru from "./locales/ru";
import sk from "./locales/sk";
import uk from "./locales/uk";
import ar from "./locales/ar";
import zh from "./locales/zh";
import tr from "./locales/tr";
import ro from "./locales/ro";
import bg from "./locales/bg";

export const languages: Language[] = ["ar", "am", "cs", "de", "en", "es", "fi", "fr", "hu", "it", "ka", "nl", "no", "pl", "pt", "ru", "sk", "uk", "zh", "tr", "ro", "bg"];

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

  switch (language.toLocaleLowerCase()) {
    case "de":
    case "de-at":
    case "de-be":
    case "de-ch":
    case "de-de":
    case "de-li":
    case "de-lu":
    case "de-de.utf-8":
    case "german": {
      locale = de;
      break;
    }
    case "en":
    case "en-us":
    case "en-ca":
    case "en-gb":
    case "en-us.utf-8":
    case "english": {
      locale = en;
      break;
    }
    case "ar":
    case "ar-ae":
    case "ar-eg":
    case "arabic": {
      locale = ar;
      break;
    }
    case "fi":
    case "fi-fi":
    case "fi-fi.utf-8":
    case "finnish": {
      locale = fi;
      break;
    }
    case "fr":
    case "fr-us":
    case "fr-ca":
    case "fr-us.utf-8":
    case "french": {
      locale = fr;
      break;
    }
    case "es":
    case "es-us":
    case "es-ca":
    case "es-us.utf-8":
    case "spanish": {
      locale = es;
      break;
    }
    case "sk":
    case "sk-sk":
    case "sk-sk.utf-8":
    case "slovak": {
      locale = sk;
      break;
    }
    case "pl":
    case "pl-pl":
    case "pl-pl.utf-8":
    case "polish": {
      locale = pl;
      break;
    }
    case "pt":
    case "pt-pt":
    case "pt-pt.utf-8":
    case "portuguese": {
      locale = pt;
      break;
    }
    case "uk":
    case "uk-ua":
    case "uk-ua.utf-8":
    case "ukrainian": {
      locale = uk;
      break;
    }
    case "cs":
    case "cs-cz":
    case "cs-cz.utf-8":
    case "czech": {
      locale = cs;
      break;
    }
    case "ru":
    case "ru-ru":
    case "ru-ru.utf-8":
    case "russian": {
      locale = ru;
      break;
    }
    case "ka":
    case "ka-ka":
    case "ka-ka.utf-8":
    case "georgian": {
      locale = ka;
      break;
    }
    case "no":
    case "no-no":
    case "no-no.utf-8":
    case "norwegian": {
      locale = no;
      break;
    }
    case "am":
    case "am-et":
    case "am-et.utf-8":
    case "amharic": {
      locale = am;
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
    case "it":
    case "it-it":
    case "it-ch":
    case "it-it.utf-8":
    case "it-ch.utf-8":
    case "italiano":
    case "italian":
      locale = it;
      break;
    case "hu":
    case "hu-HU":
    case "hu-hu":
    case "hu-HU.utf-8":
    case "hu-hu.utf-8":
    case "magyar":
    case "hungarian":
      locale = hu;
      break;
    case "zh":
    case "zh-cn":
    case "zh-cn.utf-8":
    case "chinese":
      locale = zh;
      break;
    case "tr":
    case "tr-tr":
    case "tr-tr.utf-8":
    case "turkish":
      locale = tr;
      break;
    case "ro":
    case "ro-ro":
    case "ro-RO":
    case "ro-ro.utf-8":
    case "romanian":
      locale = ro;
      break;
    case "bg":
    case "bg-bg":
    case "bg-BG":
    case "bg-bg-utf-8":
    case "bulgarian":
      locale = bg;
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
  | "de" | "de-at" | "de-be" | "de-ch" | "de-de" | "de-li" | "de-lu" | "de-de.utf-8" | "german"
  | "en" | "en-us" | "en-us.utf-8" | "english" | "en-ca" | "en-gb"
  | "ar" | "ar-ae" | "english"
  | "fi" | "fi-fi" | "fi-fi.utf-8" | "finnish"
  | "fr" | "fr-us" | "fr-us.utf-8" | "french" | "fr-ca"
  | "es" | "es-us" | "es-us.utf-8" | "spanish" | "es-ca"
  | "sk" | "sk-sk" | "sk-sk.utf-8" | "slovak"
  | "pl" | "pl-pl" | "pl-pl.utf-8" | "polish"
  | "pt" | "pt-pt" | "pt-pt.utf-8" | "portuguese"
  | "uk" | "uk-ua" | "uk-ua.utf-8" | "ukrainian"
  | "no" | "no-no" | "no-no.utf-8" | "norwegian"
  | "am" | "am-et" | "am-et.utf-8" | "amharic"
  | "cs" | "cs-cz" | "cs-cz.utf-8" | "czech"
  | "ru" | "ru-ru" | "ru-ru.utf-8" | "russian"
  | "nl" | "nl-nl" | "nl-nl.utf-8" | "dutch"
  | "nl-be" | "nl-be.utf-8" | "belgian" | "flemish"
  | "ka" | "ka-ka" | "ka-ka.utf-8" | "georgian"
  | "it" | "it-it" | "it-it.utf-8" | "italiano" | "italian" | "it-ch" | "it-ch.utf-8"
  | "hu" | "hu-HU" | "hu-hu" | "hu-HU.utf-8" | "hu-hu.utf-8" | "magyar" | "hungarian"
  | "zh" | "zh-cn" | "zh-cn.utf-8" | "chinese"
  | "tr" | "tr-tr" | "tr-tr.utf-8" | "turkish"
  | "ro" | "ro-ro" | "ro-RO" | "ro-ro.utf-8" | "romanian"
  | "bg" | "bg-bg" | "bg-BG" | "bg-bg.utf-8" | "bulgarian";

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
    polyline: string;
    polygon: string;
    rectangle: string;
    circle: string;
    marker: string;
    circlemarker: string;
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
      start: string;
    };
    radius: string;
  };
  circlemarker: {
    tooltip: {
      start: string;
    };
  };
  marker: {
    tooltip: {
      start: string;
    };
  };
  polygon: {
    tooltip: {
      start: string;
      cont: string;
      end: string;
    };
  };
  polyline: {
    error: string;
    tooltip: {
      start: string;
      cont: string;
      end: string;
    };
  };
  rectangle: {
    tooltip: {
      start: string;
    };
  };
  simpleshape: {
    tooltip: {
      end: string;
    };
  };
}

export interface EditToolbar {
  actions: {
    save: Action;
    cancel: Action;
    clearAll: Action;
  };
  buttons: {
    edit: string;
    editDisabled: string;
    remove: string;
    removeDisabled: string;
  };
}

export interface EditHandlers {
  edit: {
    tooltip: {
      text: string;
      subtext: string;
    };
  };
  remove: {
    tooltip: {
      text: string;
    };
  };
}
