import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Avbryt ritning",
    text: "Avbryt",
  },
  finish: {
    title: "Avsluta ritning",
    text: "Avsluta",
  },
  undo: {
    title: "Ta bort senaste punkten ritad",
    text: "Ta bort senaste punkten",
  },
  buttons: {
    polyline: "Rita en polyline",
    polygon: "Rita en polygon",
    rectangle: "Rita en rektangel",
    circle: "Rita en cirkel",
    marker: "Rita en markör",
    circlemarker: "Rita en cirkelmarkör",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Klicka och dra to rita cirkel.",
    },
    radius: "Radius",
  },
  circlemarker: {
    tooltip: {
      start: "Klicka på kartan för att placera cirkelmarkör.",
    },
  },
  marker: {
    tooltip: {
      start: "Klicka på kartan för att placera markör.",
    },
  },
  polygon: {
    tooltip: {
      start: "Klicka för att börja rita formen.",
      cont: "Klicka för att fortsätta rita formen.",
      end: "Klicka första punkten för att slutföra formen",
    },
  },
  polyline: {
    error: "<strong>Fel:</strong> formens kanter får inte överlappa!",
    tooltip: {
      start: "Klicka för att påbörja linen.",
      cont: "Klicka för att fortsätta rita linjen.",
      end: "Klicka senaste punkten för att slutföra linjen.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Klicka och dra för att rita rektangeln.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Släpp musen för att slutföra formen.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Spara ändringar.",
      text: "Spara",
    },
    cancel: {
      title: "Avbryt redigering, ignorera alla ändringar.",
      text: "Avbryt",
    },
    clearAll: {
      title: "Töm alla lager.",
      text: "Töm Alla",
    },
  },
  buttons: {
    edit: "Redigera lager.",
    editDisabled: "Inget lager att redigera.",
    remove: "Ta bort lager.",
    removeDisabled: "Inget lager att ta bort.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Dra handtag eller markör för att redigera formen.",
      subtext: "Klicka avbryt för att ångra ändringar.",
    },
  },
  remove: {
    tooltip: {
      text: "Klicka på en form för att ta bort den",
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
