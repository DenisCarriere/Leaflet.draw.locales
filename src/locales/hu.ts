import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Rajzolás elvetése",
    text: "Mégse",
  },
  finish: {
    title: "Rajzolás befejezése",
    text: "Befejezés",
  },
  undo: {
    title: "Legutóbbi pont törlése",
    text: "Legutóbbi pont törlése",
  },
  buttons: {
    polyline: "Útvonal rajzolása",
    polygon: "Sokszög rajzolása",
    rectangle: "Négyszög rajzolása",
    circle: "Kör rajzolása",
    marker: "Jelölő rajzolása",
    circlemarker: "Kör-jelölő rajzolása",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Kattintson és tartsa nyomva a rajzoláshoz.",
    },
    radius: "Sugár",
  },
  circlemarker: {
    tooltip: {
      start: "Kör-jelölő elhelyezéséhez kattintson a térképre.",
    },
  },
  marker: {
    tooltip: {
      start: "Jelölő elhelyezéséhez kattintson a térképre.",
    },
  },
  polygon: {
    tooltip: {
      start: "Alakzat rajzolásához kattintson a térképre.",
      cont: "Alakzat folytatásához kattintson a térképre.",
      end: "Alakzat befejezéséhez kattintson a kezdőpontra.",
    },
  },
  polyline: {
    error: "<strong>Error:</strong> shape edges cannot cross!",
    tooltip: {
      start: "Útvonal rajzolásához kattintson a térképre.",
      cont: "Útvonal folytatásához kattintson a térképre.",
      end: "Útvonal befejezéséhez kattintson a végpontra.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Kattintson és tartsa nyomva négyszög rajzolásához.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Ha elégedett az alakzattal, engedje fel az egér gombját.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Változtatások elmentése.",
      text: "Mentés",
    },
    cancel: {
      title: "Változtatások elvetése.",
      text: "Mégse",
    },
    clearAll: {
      title: "Összes réteg törlése.",
      text: "Összes törlése",
    },
  },
  buttons: {
    edit: "Rétegek szerkesztése.",
    editDisabled: "Nem állnak rendelkezésre szerkeszthető rétegek.",
    remove: "Rétegek törlése.",
    removeDisabled: "Nem állnak rendelkezésre törölhető rétegek.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Módosításhoz használja a jelölők, alakzatok kezelőit.",
      subtext: "Változások elvetéséhez kattintson a 'Mégse' gombra.",
    },
  },
  remove: {
    tooltip: {
      text: "Kattintson a jelölőkre, alakzatokra az eltávolításukhoz.",
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
