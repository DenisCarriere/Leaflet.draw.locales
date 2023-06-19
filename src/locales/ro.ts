import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Anulați desenul",
    text: "Anulare",
  },
  finish: {
    title: "Terminați desenul",
    text: "Termina",
  },
  undo: {
    title: "Șterge ultimul punct desenat",
    text: "Șterge ultimul punct",
  },
  buttons: {
    polyline: "Desenați o polilinie",
    polygon: "Desenați un poligon",
    rectangle: "Desenați un dreptunghi",
    circle: "Desenează un cerc",
    marker: "Desenați un marker",
    circlemarker: "Desenați un marcator de cerc",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Faceți clic și trageți pentru a desena cerc.",
    },
    radius: "Rază",
  },
  circlemarker: {
    tooltip: {
      start: "Faceți clic pe hartă pentru a plasa marcatorul cercului.",
    },
  },
  marker: {
    tooltip: {
      start: "Faceți clic pe hartă pentru a plasa marcatorul.",
    },
  },
  polygon: {
    tooltip: {
      start: "Faceți clic pentru a începe să desenați forma.",
      cont: "Faceți clic pentru a continua să desenați forma.",
      end: "Faceți clic pe primul punct pentru a închide această formă.",
    },
  },
  polyline: {
    error: "<strong>Eroare:</strong> marginile formei nu se pot traversa!",
    tooltip: {
      start: "Faceți clic pentru a începe să desenați o linie.",
      cont: "Faceți clic pentru a continua să desenați linia.",
      end: "Faceți clic pe ultimul punct pentru a ajunge la linia de sosire.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Faceți clic și trageți pentru a desena dreptunghi.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Eliberați mouse-ul pentru a termina desenul.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Salvează modificările.",
      text: "Salvați",
    },
    cancel: {
      title: "Anulează editarea, anulează toate modificările.",
      text: "Anulare",
    },
    clearAll: {
      title: "Ștergeți toate straturile.",
      text: "Curata tot",
    },
  },
  buttons: {
    edit: "Editați straturi.",
    editDisabled: "Fără straturi de editat.",
    remove: "Ștergeți straturile.",
    removeDisabled: "Nu există straturi de șters.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Trageți mânerele sau marcatorul pentru a edita caracteristica.",
      subtext: "Faceți clic pe Anulare pentru a anula modificările.",
    },
  },
  remove: {
    tooltip: {
      text: "Faceți clic pe o caracteristică pentru a o elimina",
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
