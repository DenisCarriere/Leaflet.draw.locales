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
      start: "Dați clic și trageți pentru a desena cerc.",
    },
    radius: "Rază",
  },
  circlemarker: {
    tooltip: {
      start: "Dați clic pe hartă pentru a plasa marcatorul cercului.",
    },
  },
  marker: {
    tooltip: {
      start: "Dați clic pe hartă pentru a plasa marcatorul.",
    },
  },
  polygon: {
    tooltip: {
      start: "Dați clic pentru a începe desenarea parcelei",
      cont: "Dați clic pentru a continua desenarea parcelei",
      end: "Dați clic pe primul punct pentru a închide această parcelei.",
    },
  },
  polyline: {
    error: "<strong>Eroare:</strong> marginile formei nu se pot traversa!",
    tooltip: {
      start: "Daţi clic pentru a începe să desenezi o linie.",
      cont: "Daţi clic pentru a continua să desenezi linia.",
      end: "Dați clic pe ultimul punct pentru a ajunge la linia de sosire.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Dați clic și trageți pentru a desena dreptunghi.",
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
      subtext: "Dați clic pe Anulare pentru a anula modificările.",
    },
  },
  remove: {
    tooltip: {
      text: "Dați clic pe o caracteristică pentru a o elimina",
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
