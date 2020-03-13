import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Annulla disegno",
    text: "Annulla",
  },
  finish: {
    title: "Completa disegno",
    text: "Completa",
  },
  undo: {
    title: "Elimina l'ultimo punto disegnato",
    text: "Elimina l'ultimo punto",
  },
  buttons: {
    polyline: "Disegna una polilinea",
    polygon: "Disegna un poligono",
    rectangle: "Disegna un rettangolo",
    circle: "Disegna un cerchio",
    marker: "Disegna un marcatore",
    circlemarker: "Disegna un marker circolare",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Clicca e trascina per disegnare un cerchio.",
    },
    radius: "Raggio",
  },
  circlemarker: {
    tooltip: {
      start: "Clicca la mappa per posizionare un marcatore circolare.",
    },
  },
  marker: {
    tooltip: {
      start: "Clicca la mappa per posizionare un marcatore.",
    },
  },
  polygon: {
    tooltip: {
      start: "Clicca per iniziare a disegnare una figura.",
      cont: "Clicca per continuare a disegnare una figura.",
      end: "Clicca il primo punto per chiudere questa figura.",
    },
  },
  polyline: {
    error: "<strong>Errore:</strong> i margini della figura non si possono incrociare!",
    tooltip: {
      start: "Clicca per iniziare a disegnare una linea.",
      cont: "Clicca per continuare a disegnare una linea",
      end: "Clicca l'ultimo punto per finire questa linea",
    },
  },
  rectangle: {
    tooltip: {
      start: "Clicca e trascina per disegnare un rettangolo.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Rilascia il mouse per finire il disegno.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Salva modifiche.",
      text: "Salva",
    },
    cancel: {
      title: "Annulla tutte le modifiche.",
      text: "Annulla",
    },
    clearAll: {
      title: "Pulisci tutti i livelli.",
      text: "Pulisci tutto",
    },
  },
  buttons: {
    edit: "Modifica i livelli.",
    editDisabled: "Nessun livello disponibile per la modifica.",
    remove: "Elimina livelli.",
    removeDisabled: "Nessun livello disponibile per l'eliminazione.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Trascina le maniglie, o i marcatori per modificare l'elemento.",
      subtext: "Clicca annulla per annullare le modifiche.",
    },
  },
  remove: {
    tooltip: {
      text: "Clicca un elemento per rimuoverlo",
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
