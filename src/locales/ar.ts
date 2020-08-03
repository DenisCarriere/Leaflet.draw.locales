import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "الغاء الرسم",
    text: "الغاء",
  },
  finish: {
    title: "انهاء الرسم",
    text: "انهاء",
  },
  undo: {
    title: "مسح اخر رسمة",
    text: "مسح اخر نقطة",
  },
  buttons: {
    polyline: "رسم خط",
    polygon: "رسم منطقة",
    rectangle: "رسم مستطيل",
    circle: "رسم دائرة",
    marker: "رسم علامة",
    circlemarker: "رسم علامة دائرة",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "اضغط واسحب لرسم دائرة",
    },
    radius: "القطر",
  },
  circlemarker: {
    tooltip: {
      start: "اضغط على الخريطة لرسم دائرة",
    },
  },
  marker: {
    tooltip: {
      start: "اضغط على الخريطة لرسم نقطة",
    },
  },
  polygon: {
    tooltip: {
      start: "اضغط لبدء رسم منطقة",
      cont: "اضغط لاستمرار رسم منطقة",
      end: "اضغط على اول نقطة لاكمال المنطقة",
    },
  },
  polyline: {
    error: "<strong>خطأ:</strong> لا يمكن تقاطع الخطوط",
    tooltip: {
      start: "اضغط لبدئ رسم الخط",
      cont: "اضغط لاستكمال رسم الخط",
      end: "اضغط على اخر نقطة للانهاء",
    },
  },
  rectangle: {
    tooltip: {
      start: "اضغط واسحب لرسم مستطيل",
    },
  },
  simpleshape: {
    tooltip: {
      end: "اترك الماوس للانهاء",
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
