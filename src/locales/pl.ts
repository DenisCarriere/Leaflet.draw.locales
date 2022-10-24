import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Anuluj wyznaczanie",
    text: "Anuluj",
  },
  finish: {
    title: "Zakończ wyznaczanie",
    text: "Zakończ",
  },
  undo: {
    title: "Usuń ostatnio wyznaczony punkt",
    text: "Usuń ostatni punkt",
  },
  buttons: {
    polyline: "Wyznacz wzór",
    polygon: "Wyznacz wielokąt",
    rectangle: "Wyznacz prostokąt",
    circle: "Wyznacz koło",
    marker: "Umieść znacznik",
    circlemarker: "Umieść okrągły znacznik",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Kliknij i przeciągnij, aby wyznaczyć koło.",
    },
    radius: "Promień",
  },
  circlemarker: {
    tooltip: {
      start: "Kliknij na mapę, aby umieścić okrągły znacznik.",
    },
  },
  marker: {
    tooltip: {
      start: "Kliknij na mapę, aby umieścić znacznik.",
    },
  },
  polygon: {
    tooltip: {
      start: "Kliknij, aby rozpocząć wyznaczanie kształtu.",
      cont: "Kliknij, aby kontynuować wyznaczanie kształtu.",
      end: "Kliknij pierwszy punkt, aby zakończyć ten kształt.",
    },
  },
  polyline: {
    error: "<strong>Błąd:</strong> odcinki nie mogą się przecinać!",
    tooltip: {
      start: "Kliknij, aby rozpocząć wyznaczanie lini.",
      cont: "Kliknij, aby kontynuować wyznaczanie lini.",
      end: "Kliknij ostatni punkt, aby ukończyć linię.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Kliknij i przeciągnij, aby wyznaczyć prostokąt.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Zwolnij przycisk myszy, aby ukończyć wyznaczanie.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Zapisz zmiany.",
      text: "Zapisz",
    },
    cancel: {
      title: "Anuluj edytowanie i odrzuć zmiany.",
      text: "Anuluj",
    },
    clearAll: {
      title: "Wyczyść wszystkie warstwy.",
      text: "Wyczyść wszystko",
    },
  },
  buttons: {
    edit: "Edytuj warstwy.",
    editDisabled: "Brak warstw do edycji.",
    remove: "Usuń warstwy.",
    removeDisabled: "Brak warstw do usunięcia.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Przeciągnij uchwyt lub znacznik, aby edytować.",
      subtext: "Kliknij anuluj, aby odrzucić zmiany.",
    },
  },
  remove: {
    tooltip: {
      text: "Kliknij obiekt, aby go usunąć.",
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
