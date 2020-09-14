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
      title: "حفظ التغييرات",
      text: "حفظ",
    },
    cancel: {
      title: "الغاء كل التعديلات",
      text: "الغاء",
    },
    clearAll: {
      title: "مسح كل الطبقات",
      text: "مسح الكل",
    },
  },
  buttons: {
    edit: "تعديل الطبقات",
    editDisabled: "لاتوجد طبقات للتعديل",
    remove: "مسح الطبقات",
    removeDisabled: "لا يوجد طبقات للمسح",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "اسحب للتعديل",
      subtext: "اضغط الغاء لمسح التعديلات",
    },
  },
  remove: {
    tooltip: {
      text: "اضغط على رسمة للمسح",
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
