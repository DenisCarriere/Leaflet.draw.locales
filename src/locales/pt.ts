import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Cancelar desenho",
    text: "Cancelar",
  },
  finish: {
    title: "Terminar desenho",
    text: "Terminar",
  },
  undo: {
    title: "Eliminar último ponto desenhado",
    text: "Eliminar último ponto",
  },
  buttons: {
    polyline: "Desenhar uma polilinha",
    polygon: "Desenhar um polígono",
    rectangle: "Desenhar um retângulo",
    circle: "Desenhar um círculo",
    marker: "Desenhar un marcador",
    circlemarker: "Desenhar um marcador circular",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Clique e arrastrar para desenhar o círculo.",
    },
    radius: "Raio",
  },
  circlemarker: {
    tooltip: {
      start: "Clique no mapa para colocar o marcador circular.",
    },
  },
  marker: {
    tooltip: {
      start: "Clique no mapa para colocar o marcador.",
    },
  },
  polygon: {
    tooltip: {
      start: "Clique para começar a desenhar a figura.",
      cont: "Clique para continuar desenhando a figura.",
      end: "Clique no primeiro ponto para fechar esta figura.",
    },
  },
  polyline: {
    error: "<strong>Erro:</strong> as bordas de forma não podem atravessar!",
    tooltip: {
      start: "Clique para começar a desenhar a linha.",
      cont: "Clique para continuar desenhando a linha.",
      end: "Clique no último ponto para terminar a linha.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Clique e arrastrar para desenhar o retângulo.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Soltar o mouse para terminar o desenho.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Guardar alterações.",
      text: "Guardar",
    },
    cancel: {
      title: "Cancelar edição, descarta todas as alterações.",
      text: "Cancelar",
    },
    clearAll: {
      title: "Limpar todas as camadas.",
      text: "Limpar tudo",
    },
  },
  buttons: {
    edit: "Editar camadas.",
    editDisabled: "Nenhuma camada que editar.",
    remove: "Eliminar camadas.",
    removeDisabled: "Nenhuma camada que eliminar.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Arrastar manipuladores ou marcadores para editar a figura.",
      subtext: "Clique em cancelar para desfazer as alterações.",
    },
  },
  remove: {
    tooltip: {
      text: "Clique em uma figura para removê-la",
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
