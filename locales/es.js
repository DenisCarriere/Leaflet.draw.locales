const drawToolbar = {
  actions: {
    title: 'Cancelar dibujo',
    text: 'Cancelar'
  },
  finish: {
    title: 'Terminar dibujo',
    text: 'Terminar'
  },
  undo: {
    title: 'Eliminar último punto dibujado',
    text: 'Eliminar último punto'
  },
  buttons: {
    polyline: 'Dibujar una polilínea',
    polygon: 'Dibujar un polígono',
    rectangle: 'Dibujar un rectángulo',
    circle: 'Dibujar un círculo',
    marker: 'Dibujar un marcador',
    circlemarker: 'Dibujar un marcador circular'
  }
}

const drawHandlers = {
  circle: {
    tooltip: {
      start: 'Haz click y arrastra para dibujar un círculo'
    },
    radius: 'Radio'
  },
  circlemarker: {
    tooltip: {
      start: 'Haz click en el mapa para situar el marcador circular'
    }
  },
  marker: {
    tooltip: {
      start: 'Haz click en el mapa para situar el marcador'
    }
  },
  polygon: {
    error: '<strong>Error:</strong>',
    tooltip: {
      start: 'Haz click para empezar a dibujar la forma',
      cont: 'Haz click para continuar dibujando la forma',
      end: 'Haz click en el primer punto para cerrar la forma'
    }
  },
  polyline: {
    error: '<strong>Error:</strong> las líneas no deben cruzarse',
    tooltip: {
      start: 'Haz click para empezar a dibujar la línea',
      cont: 'Haz click para continuar dibujando la línea',
      end: 'Haz click en el último punto para terminar la línea'
    }
  },
  rectangle: {
    tooltip: {
      start: 'Haz click y arrastra para dibujar un rectángulo'
    }
  },
  simpleshape: {
    tooltip: {
      end: 'Suelta el ratón para terminar de dibujar'
    }
  }
}

const editToolbar = {
  actions: {
    save: {
      title: 'Guardar los cambios',
      text: 'Guardar'
    },
    cancel: {
      title: 'Cancelar la edición, descarta todos los cambios',
      text: 'Cancelar'
    },
    clearAll: {
      title: 'Limpiar todas las capas',
      text: 'Limpiar todo'
    }
  },
  buttons: {
    edit: 'Editar capas',
    editDisabled: 'No hay capas que editar',
    remove: 'Eliminar capas',
    removeDisabled: 'No hay capas que eliminar'
  }
}

const editHandlers = {
  edit: {
    tooltip: {
      text: 'Arrastra el marcador para editar la forma',
      subtext: 'Haz click en cancelar para deshacer los cambios'
    }
  },
  remove: {
    tooltip: {
      text: 'Haz click en una forma para eliminarla'
    }
  }
}

module.exports = {
  draw: {
    toolbar: drawToolbar,
    handlers: drawHandlers
  },
  edit: {
    toolbar: editToolbar,
    handlers: editHandlers
  }
}
