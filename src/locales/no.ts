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
    polygon: "Tegn mange linjer sammen",
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
      start: "Klikk på kartet for å markere et sted.",
    },
  },
  polygon: {
    tooltip: {
      start: "Klikk for å tegne.",
      cont: "Klikk for å fortsette tegningen.",
      end: "Klikk på det første punktet for å lukke tegningen.",
    },
  },
  polyline: {
    error: "<strong>Error:</strong> shape edges cannot cross!",
    tooltip: {
      start: "Klikk for å tegne linje.",
      cont: "Klikk for å fortsette å tegne linje.",
      end: "Kikk siste punkt for å ferdiggjøre linje.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Klikk og dra for å tegne et rektangel.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Slipp opp musen for å gjøre ferdig tegningen.",
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
      title: "Avbryt redigering og forkast alle endringer.",
      text: "Avryt",
    },
    clearAll: {
      title: "Nullstill alle lag.",
      text: "Nullstill alt.",
    },
  },
  buttons: {
    edit: "Rediger lag.",
    editDisabled: "Ingen lag å redigere.",
    remove: "Slett lag.",
    removeDisabled: "Ingen lag å slette.",
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
