import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Zrušit kreslení",
    text: "Zrušit",
  },
  finish: {
    title: "Dokončit kreslení",
    text: "Dokončit",
  },
  undo: {
    title: "Smazat poslední nakreslený bod",
    text: "Smazat poslední bod",
  },
  buttons: {
    polyline: "Nakreslit mnohoúhelník",
    polygon: "Nakreslit polygon",
    rectangle: "Nakreslit obdélník",
    circle: "Nakreslit kruh",
    marker: "Nakreslit značku",
    circlemarker: "Nakreslit kruhovou značku",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Kliknout a táhnout pro nakreslení kruhu.",
    },
    radius: "Poloměr",
  },
  circlemarker: {
    tooltip: {
      start: "Kliknout do mapy pro umístění kruhové značky.",
    },
  },
  marker: {
    tooltip: {
      start: "Kliknout do mapy pro umístění značky.",
    },
  },
  polygon: {
    tooltip: {
      start: "Kliknout pro začátek kreslení tvaru.",
      cont: "Kliknout pro pokračování v kreslení tvaru.",
      end: "Kliknout na pvní bod k uzavření tvaru.",
    },
  },
  polyline: {
    error: "<strong>Chyba:</strong> hrany tvaru se nemohou protínat!",
    tooltip: {
      start: "Kliknout pro začátek kreslení úsečky.",
      cont: "Kliknout pro pokračování v kreslení úsečky.",
      end: "Kliknout na koncový bod k ukončení kreslení úsečky.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Kliknout a táhnout k nakreslení obdélníku.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Pustit myš k dokončení kreslení.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Uložit změny.",
      text: "Uložit",
    },
    cancel: {
      title: "Zrušit úpravu, zruší všechny změny.",
      text: "Zrušit",
    },
    clearAll: {
      title: "Vymazat všechny vrstvy.",
      text: "Vymazat vše",
    },
  },
  buttons: {
    edit: "Upravit vrstvy.",
    editDisabled: "Žádné vrstvy k úpravě.",
    remove: "Vymazat vrstvy.",
    removeDisabled: "Žádná vrstva k vymazání.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Táhnout za úchopy pro editaci tvaru.",
      subtext: "Kliknutím na zrušit vrátite změny.",
    },
  },
  remove: {
    tooltip: {
      text: "Kliknout na tvar pro smazání",
    },
  },
};

export default {
  draw: {
    toolbar: drawToolbar,
    handlers: drawHandlers,
  },
  edit: {
    toolbar: editToolbar,
    handlers: editHandlers,
  },
};
