import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "መሳል ተው",
    text: "ተው",
  },
  finish: {
    title: "መሳል ጨርስ",
    text: "ጨርስ",
  },
  undo: {
    title: "መጨረሻ የተሳለውን ነጥብ አጥፋ",
    text: "መጨረሻ የተሳለውን ነጥብ አጥፋ",
  },
  buttons: {
    polyline: "ፖሊላየን ሳል",
    polygon: "ፖሊጎን ሳል",
    rectangle: "አራት መአዘን ሳል",
    circle: "ክብ ሳል",
    marker: "ምልክት ሳል",
    circlemarker: "ክብ ምልክት ሳል",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "ክብ ለመሳል ተጭንው ይጎትቱ",
    },
    radius: "Radius",
  },
  circlemarker: {
    tooltip: {
      start: "ምልክት ለመሳል ካርታውን ይጫኑ ይጎትቱ",
    },
  },
  marker: {
    tooltip: {
      start: "ምልክት ለመሳል ካርታውን ይጫኑ ይጎትቱ",
    },
  },
  polygon: {
    tooltip: {
      start: "Click to start drawing shape.",
      cont: "Click to continue drawing shape.",
      end: "Click first point to close this shape.",
    },
  },
  polyline: {
    error: "<strong>Error:</strong> shape edges cannot cross!",
    tooltip: {
      start: "Click to start drawing line.",
      cont: "Click to continue drawing line.",
      end: "Click last point to finish line.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Click and drag to draw rectangle.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Release mouse to finish drawing.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Save changes.",
      text: "Save",
    },
    cancel: {
      title: "Cancel editing, discards all changes.",
      text: "Cancel",
    },
    clearAll: {
      title: "Clear all layers.",
      text: "Clear All",
    },
  },
  buttons: {
    edit: "Edit layers.",
    editDisabled: "No layers to edit.",
    remove: "Delete layers.",
    removeDisabled: "No layers to delete.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Drag handles, or marker to edit feature.",
      subtext: "Click cancel to undo changes.",
    },
  },
  remove: {
    tooltip: {
      text: "Click on a feature to remove",
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
