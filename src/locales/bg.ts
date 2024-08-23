import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Откажи очертаването",
    text: "Откажи",
  },
  finish: {
    title: "Завърши очертаването",
    text: "Завърши",
  },
  undo: {
    title: "Изтрий последната създадена точка",
    text: "Изтрий последната точка",
  },
  buttons: {
    polyline: "Начертай крива",
    polygon: "Начертай многоъгълник",
    rectangle: "Начертай правоъгълник",
    circle: "Начертай кръг",
    marker: "Начертай маркер",
    circlemarker: "Начертай кръгъл маркер",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Кликни и дръпни, за да нарисуваш кръг.",
    },
    radius: "Радиус",
  },
  circlemarker: {
    tooltip: {
      start: "Кликни върху картата, за да поставиш кръгъл маркер.",
    },
  },
  marker: {
    tooltip: {
      start: "Кликни върху картата, за да поставиш маркер.",
    },
  },
  polygon: {
    tooltip: {
      start: "Кликни, за да започнеш да чертаеш формата.",
      cont: "Кликни, за да продължиш да чертаеш формата.",
      end: "Кликни върху първата точка, за да затвориш тази форма.",
    },
  },
  polyline: {
    error: "<strong>Грешка:</strong> краищата на формата не могат да се пресичат!",
    tooltip: {
      start: "Кликни, за да започнеш да чертаеш линия.",
      cont: "Кликни, за да продължиш да чертаеш линия.",
      end: "Кликни върху последната точка, за да завършиш линията.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Кликни и дръпни, за да начертаеш правоъгълник.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Отпусни мишката, за да завършиш чертаенето.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Запази промените.",
      text: "Запази",
    },
    cancel: {
      title: "Отмени редактирането, отхвърляйки всички промени.",
      text: "Отмени",
    },
    clearAll: {
      title: "Изчисти всички слоеве.",
      text: "Изчисти всички",
    },
  },
  buttons: {
    edit: "Редактирай слоевете.",
    editDisabled: "Няма слоеве за редактиране.",
    remove: "Изтрий слоевете.",
    removeDisabled: "Няма слоеве за изтриване.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Плъзни дръжките или маркера, за да редактираш обекта.",
      subtext: "Кликни 'Отмени', за да върнеш промените.",
    },
  },
  remove: {
    tooltip: {
      text: "Кликни върху обект, за да го премахнеш.",
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
