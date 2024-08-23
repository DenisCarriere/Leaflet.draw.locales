export declare const languages: Language[];
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
export declare const drawLocales: (language: Language) => DrawLocal;
export default drawLocales;
export type Language = "de" | "de-at" | "de-be" | "de-ch" | "de-de" | "de-li" | "de-lu" | "de-de.utf-8" | "german" | "en" | "en-us" | "en-us.utf-8" | "english" | "en-ca" | "en-gb" | "ar" | "ar-ae" | "english" | "fi" | "fi-fi" | "fi-fi.utf-8" | "finnish" | "fr" | "fr-us" | "fr-us.utf-8" | "french" | "fr-ca" | "es" | "es-us" | "es-us.utf-8" | "spanish" | "es-ca" | "sk" | "sk-sk" | "sk-sk.utf-8" | "slovak" | "pl" | "pl-pl" | "pl-pl.utf-8" | "polish" | "pt" | "pt-pt" | "pt-pt.utf-8" | "portuguese" | "uk" | "uk-ua" | "uk-ua.utf-8" | "ukrainian" | "no" | "no-no" | "no-no.utf-8" | "norwegian" | "am" | "am-et" | "am-et.utf-8" | "amharic" | "cs" | "cs-cz" | "cs-cz.utf-8" | "czech" | "ru" | "ru-ru" | "ru-ru.utf-8" | "russian" | "nl" | "nl-nl" | "nl-nl.utf-8" | "dutch" | "nl-be" | "nl-be.utf-8" | "belgian" | "flemish" | "ka" | "ka-ka" | "ka-ka.utf-8" | "georgian" | "it" | "it-it" | "it-it.utf-8" | "italiano" | "italian" | "it-ch" | "it-ch.utf-8" | "hu" | "hu-HU" | "hu-hu" | "hu-HU.utf-8" | "hu-hu.utf-8" | "magyar" | "hungarian" | "zh" | "zh-cn" | "zh-cn.utf-8" | "chinese" | "tr" | "tr-tr" | "tr-tr.utf-8" | "turkish" | "ro" | "ro-ro" | "ro-RO" | "ro-ro.utf-8" | "romanian" | "bg" | "bg-bg" | "bg-BG" | "bg-bg.utf-8" | "bulgarian";
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
