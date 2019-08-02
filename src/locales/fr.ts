import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Annuler le dessin",
    text: "Annuler",
  },
  finish: {
    title: "Terminer le dessin",
    text: "Terminer",
  },
  undo: {
    title: "Supprimer le dernier point tiré",
    text: "Supprimer le dernier point",
  },
  buttons: {
    polyline: "Dessinez une polyligne",
    polygon: "Dessinez un polygone",
    rectangle: "Dessinez un rectangle",
    circle: "Dessiner un cercle",
    marker: "Dessinez un marqueur",
    circlemarker: "Dessinez un marqueur circulaire",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Cliquez et faites glisser pour dessiner le cercle.",
    },
    radius: "Rayon",
  },
  circlemarker: {
    tooltip: {
      start: "Cliquez sur la carte pour placer le marqueur circulaire.",
    },
  },
  marker: {
    tooltip: {
      start: "Cliquez sur la carte pour placer le marqueur.",
    },
  },
  polygon: {
    tooltip: {
      start: "Cliquez pour commencer à dessiner.",
      cont: "Cliquez pour continuer à dessiner.",
      end: "Cliquez sur le premier point pour fermer cette forme.",
    },
  },
  polyline: {
    error: "<strong>Erreur:</strong> les polyligne ne peuvent pas traverser!",
    tooltip: {
      start: "Cliquez pour commencer à dessiner.",
      cont: "Cliquez pour continuer à dessiner.",
      end: "Cliquez sur le dernier point pour fermer cette forme.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Cliquez et faites glisser pour dessiner le rectangle.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Relâchez la souris pour terminer le dessin.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Sauvegarder les modifications.",
      text: "Sauvegarder",
    },
    cancel: {
      title: "Annuler l'édition, rejette toutes les modifications.",
      text: "Annuler",
    },
    clearAll: {
      title: "Effacez toutes les collections.",
      text: "Tout effacer",
    },
  },
  buttons: {
    edit: "Modifier les collections.",
    editDisabled: "Pas de collections à éditer.",
    remove: "Supprimez les collections.",
    removeDisabled: "Pas de collections à supprimer.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Sélectionnez les poignées ou le marqueur pour modifier l'entité.",
      subtext: "Cliquez sur annuler pour rétablir les modifications.",
    },
  },
  remove: {
    tooltip: {
      text: "Cliquez sur un entité pour supprimer",
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
