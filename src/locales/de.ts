import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Zeichnung abbrechen",
    text: "Abbrechen",
  },
  finish: {
    title: "Zeichnung fertigstellen",
    text: "Fertigstellen",
  },
  undo: {
    title: "Lösche den zuletzt gezeichneten Punkt",
    text: "Letzter Punkt löschen",
  },
  buttons: {
    polyline: "Zeichne eine Linie",
    polygon: "Zeichne ein Polygon",
    rectangle: "Zeichne ein Rechteck",
    circle: "Zeichne einen Kreis",
    marker: "Zeichne einen Marker",
    circlemarker: "Zeichne einen Kreis-Marker",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Klicken und ziehen um einen Kreis zu zeichnen.",
    },
    radius: "Radius",
  },
  circlemarker: {
    tooltip: {
      start: "Karte anklicken um einen Kreis-Marker zu platzieren.",
    },
  },
  marker: {
    tooltip: {
      start: "Karte anklicken um einen Marker zu platzieren.",
    },
  },
  polygon: {
    tooltip: {
      start: "Klicken um mit dem Zeichnen einer Form zu beginnen.",
      cont: "Klicken um mit dem Zeichnen dieser Form fortzufahren.",
      end: "Erster Punkt anklicken um diese Form abzuschliessen.",
    },
  },
  polyline: {
    error: "<strong>Fehler:</strong> Form-Ecken dürfen sich nicht überschneiden!",
    tooltip: {
      start: "Klicken um mit dem Zeichnen einer Linie zu beginnen.",
      cont: "Klicken um mit dem Zeichnen dieser Linie fortzufahren.",
      end: "Erster Punkt anklicken um diese Linie abzuschliessen.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Klicken und ziehen um ein Rechteck zu zeichnen.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Maustaste loslassen um die Zeichnung fertigzustellen.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Speichere Änderungen.",
      text: "Speichern",
    },
    cancel: {
      title: "Bearbeitung abbrechen, alle Änderungen verwerfen.",
      text: "Abbrechen",
    },
    clearAll: {
      title: "Alle Layer bereinigen.",
      text: "Alles bereinigen",
    },
  },
  buttons: {
    edit: "Layer bearbeiten.",
    editDisabled: "Keine Layer zum bearbeiten.",
    remove: "Layer löschen.",
    removeDisabled: "Keine Layer zum löschen.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Ziehe den Griff oder den Marker um die Eigenschaft zu bearbeiten.",
      subtext: "Klicke abbrechen um Änderungen rückgängig zu machen.",
    },
  },
  remove: {
    tooltip: {
      text: "Klicke auf eine Eigenschaft um diese zu entfernen.",
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
