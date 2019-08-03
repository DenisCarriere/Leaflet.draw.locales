import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Tekening annuleren",
    text: "Annuleren",
  },
  finish: {
    title: "Tekening voltooien",
    text: "Voltooien",
  },
  undo: {
    title: "Laatst getekende punt verwijderen",
    text: "Verwijder laatst getekende punt",
  },
  buttons: {
    polyline: "Teken een polygonale lijn",
    polygon: "Teken een polygoon",
    rectangle: "Teken een rechthoek",
    circle: "Teken een cirkel",
    marker: "Plaats een marker",
    circlemarker: "Teken een cirkelmarkering",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Klik en sleep om de cirkel te tekenen.",
    },
    radius: "Radius",
  },
  circlemarker: {
    tooltip: {
      start: "Klik op de kaart om de cirkelmarkering te plaatsen.",
    },
  },
  marker: {
    tooltip: {
      start: "Klik op de kaart om de markering te plaatsen.",
    },
  },
  polygon: {
    tooltip: {
      start: "Klik om te beginnen met het tekenen van de polygoon.",
      cont: "Klik om door te gaan met het tekenen van de vorm.",
      end: "Klik op het eerste punt om dit polygoon te sluiten.",
    },
  },
  polyline: {
    error: "<strong>Fout:</strong> vormranden kunnen niet kruisen!",
    tooltip: {
      start: "Klik om te beginnen met het tekenen van een lijn.",
      cont: "Klik om door te gaan met het tekenen van de lijn.",
      end: "Klik laatst getekende punt om deze lijn te voltooien.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Klik en sleep om een rechthoek te tekenen.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Laat de muis los om de tekening te voltooien.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Wijzigingen opslaan.",
      text: "Opslaan",
    },
    cancel: {
      title: "Annuleer bewerken en verwijder alle wijzigingen.",
      text: "Annuleren",
    },
    clearAll: {
      title: "Verwijder alle lagen.",
      text: "Verwijderd alles",
    },
  },
  buttons: {
    edit: "Lagen bewerken.",
    editDisabled: "Geen lagen om te bewerken.",
    remove: "Verwijder lagen.",
    removeDisabled: "Geen lagen om te verwijderen.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Sleep hoeken om te schalen of middenpunt om te verplaatsen.",
      subtext: "Klik op annuleren om wijzigingen ongedaan te maken.",
    },
  },
  remove: {
    tooltip: {
      text: "Klik op een vorm om die te verwijderen",
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
