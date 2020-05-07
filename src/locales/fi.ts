import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Peru piirustus",
    text: "Peru",
  },
  finish: {
    title: "Hyväksy piirustus",
    text: "Hyväksy",
  },
  undo: {
    title: "Poista viimeinen piirretty piste",
    text: "Poista viimeinen piste",
  },
  buttons: {
    polyline: "Piirrä murtoviiva",
    polygon: "Piirrä monikulmio",
    rectangle: "Piirrä suorakulmio",
    circle: "Piirrä ympyrä",
    marker: "Piirrä merkki",
    circlemarker: "Piirrä piirimerkki",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Piirrä ympyrä pitämällä hiiri painettuna ja vetämällä.",
    },
    radius: "Säde",
  },
  circlemarker: {
    tooltip: {
      start: "Aseta ympyrämerkki painamalla karttaa.",
    },
  },
  marker: {
    tooltip: {
      start: "Aseta markkeri painamalla karttaa.",
    },
  },
  polygon: {
    tooltip: {
      start: "Paina aloittaaksesi muodon piirtämisen.",
      cont: "Paina jatkaaksesi muodon piirtämistä.",
      end: "Sulje muoto painamalla ensimmäistä pistettä.",
    },
  },
  polyline: {
    error: "<strong>Virhe:</strong> muodon reunaa ei voi ylittää!",
    tooltip: {
      start: "Paina aloittaaksesi viivan piirtämisen.",
      cont: "Paina jatkaaksesi viivan piirtämistä.",
      end: "Paina viimeistä pistettä päättäksesi viiva.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Piirrä suorakulmio pitämällä hiiri painettuna ja vetämällä.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Vapauta hiiri päättääksesi piirtämisen.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Hyväksy muutokset.",
      text: "Hyväksy",
    },
    cancel: {
      title: "Peru muokkaus, hylkää kaikki muutokset.",
      text: "Peru",
    },
    clearAll: {
      title: "Poista kaikki tasot.",
      text: "Poista kaikki",
    },
  },
  buttons: {
    edit: "Muokkaa tasoja.",
    editDisabled: "Ei muokattavia tasoja.",
    remove: "Poista tasot.",
    removeDisabled: "Ei poistettavia tasoja.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Vedä pistettä tai markkeria muokataksesi piirrettyjä ominaisuuksia.",
      subtext: "Kumoa muutokset painamalla peruuta.",
    },
  },
  remove: {
    tooltip: {
      text: "Paina piirrettyä ominaisuutta poistaaksesi",
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
