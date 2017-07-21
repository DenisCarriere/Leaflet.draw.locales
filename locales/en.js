const drawToolbar = {
  actions: {
    title: 'Cancel drawing',
    text: 'Cancel'
  },
  finish: {
    title: 'Finish drawing',
    text: 'Finish'
  },
  undo: {
    title: 'Delete last point drawn',
    text: 'Delete last point'
  },
  buttons: {
    polyline: 'Draw a polyline',
    polygon: 'Draw a polygon',
    rectangle: 'Draw a rectangle',
    circle: 'Draw a circle',
    marker: 'Draw a marker',
    circlemarker: 'Draw a circlemarker'
  }
}

const drawHandlers = {
  circle: {
    tooltip: {
      start: 'Click and drag to draw circle.'
    },
    radius: 'Radius'
  },
  circlemarker: {
    tooltip: {
      start: 'Click map to place circle marker.'
    }
  },
  marker: {
    tooltip: {
      start: 'Click map to place marker.'
    }
  },
  polygon: {
    error: '<strong>Error:</strong> FOO!',
    tooltip: {
      start: 'Click to start drawing shape.',
      cont: 'Click to continue drawing shape.',
      end: 'Click first point to close this shape.'
    }
  },
  polyline: {
    error: '<strong>Error:</strong> shape edges cannot cross!',
    tooltip: {
      start: 'Click to start drawing line.',
      cont: 'Click to continue drawing line.',
      end: 'Click last point to finish line.'
    }
  },
  rectangle: {
    tooltip: {
      start: 'Click and drag to draw rectangle.'
    }
  },
  simpleshape: {
    tooltip: {
      end: 'Release mouse to finish drawing.'
    }
  }
}

const editToolbar = {
  actions: {
    save: {
      title: 'Save changes.',
      text: 'Save'
    },
    cancel: {
      title: 'Cancel editing, discards all changes.',
      text: 'Cancel'
    },
    clearAll: {
      title: 'clear all layers.',
      text: 'Clear All'
    }
  },
  buttons: {
    edit: 'Edit layers.',
    editDisabled: 'No layers to edit.',
    remove: 'Delete layers.',
    removeDisabled: 'No layers to delete.'
  }
}

const editHandlers = {
  edit: {
    tooltip: {
      text: 'Drag handles, or marker to edit feature.',
      subtext: 'Click cancel to undo changes.'
    }
  },
  remove: {
    tooltip: {
      text: 'Click on a feature to remove'
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
