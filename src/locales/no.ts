import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Avbryt markering",
    text: "Avbryt",
  },
  finish: {
    title: "Ferdiggjør markering",
    text: "Ferdiggjør",
  },
  undo: {
    title: "Ta bort siste punkt",
    text: "Slett siste punkt",
  },
  buttons: {
    polyline: "Tegn flere linjer",
    polygon: "Tegn en mangekant",
    rectangle: "Tegn et rektangel",
    circle: "Tegn en sirkel",
    marker: "Sett et markeringspunkt",
    circlemarker: "Tegn et sirkelpunkt",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Klikk og dra for å tegne en sirkel.",
    },
    radius: "Radius",
  },
  circlemarker: {
    tooltip: {
      start: "Klikk på kartet for å plassere et sirkelpunkt.",
    },
  },
  marker: {
    tooltip: {
      start: "Klikk på kartet for å markere et punkt.",
    },
  },
  polygon: {
    tooltip: {
      start: "Klikk for å tegne et område.",
      cont: "Klikk for å fortsette tegningen.",
      end: "Klikk på det første punktet for å lukke området.",
    },
  },
  polyline: {
    error: "<strong>Error:</strong> kantene kan ikke krysses!",
    tooltip: {
      start: "Klikk for å tegne en linje.",
      cont: "Klikk for å fortsette å tegne linjen.",
      end: "Kikk siste punkt for å ferdiggjøre linjen.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Klikk og dra for å tegne et rektangel.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Slipp museknappen for å gjøre tegningen ferdig.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Lagre endringer.",
      text: "Lagre",
    },
    cancel: {
      title: "Avbryt redigering og forkast endringer.",
      text: "Avbryt",
    },
    clearAll: {
      title: "Nullstill alle figurer.",
      text: "Nullstill alt.",
    },
  },
  buttons: {
    edit: "Rediger figur.",
    editDisabled: "Ingen figur å redigere.",
    remove: "Slett figur.",
    removeDisabled: "Ingen figur å slette.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Dra markør for å redigere.",
      subtext: "Klikk avbryt for å angre endringer.",
    },
  },
  remove: {
    tooltip: {
      text: "Klikk for å ta bort",
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