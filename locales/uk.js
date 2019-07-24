const drawToolbar = {
  actions: {
    title: 'Скасувати креслення',
    text: 'Скасувати'
  },
  finish: {
    title: 'Завершити креслення',
    text: 'Завершити'
  },
  undo: {
    title: 'Видалити останню нанесену точку',
    text: 'Видалити останню точку'
  },
  buttons: {
    polyline: 'Накреслити криву',
    polygon: 'Накреслити многокутник',
    rectangle: 'Накреслити прямокутник',
    circle: 'Накреслити коло',
    marker: 'Розмістити маркер',
    circlemarker: 'Розмістити маркер-коло'
  }
}

const drawHandlers = {
  circle: {
    tooltip: {
      start: 'Натисніть і перетягуйте вказівник, щоб накреслити коло.'
    },
    radius: 'Радіус'
  },
  circlemarker: {
    tooltip: {
      start: 'Натисніть на мапу, щоб розмістити маркер-коло.'
    }
  },
  marker: {
    tooltip: {
      start: 'Натисніть на мапу, щоб розмістити маркер.'
    }
  },
  polygon: {
    error: '<strong>Помилка:</strong>',
    tooltip: {
      start: 'Натисніть, щоб накреслити фігуру.',
      cont: 'Натисніть, щоб продовжити креслення фігури.',
      end: 'Натисніть на першу точку, щоб замкнути цю фігуру.'
    }
  },
  polyline: {
    error: '<strong>Помилка:</strong> сторони фігури не мають перетинатись!',
    tooltip: {
      start: 'Натисніть, щоб накреслити лінію.',
      cont: 'Натисніть, щоб продовжити креслення лінії.',
      end: 'Натисніть на останню точку, щоб завершити лінію.'
    }
  },
  rectangle: {
    tooltip: {
      start: 'Натисніть і перетягуйте вказівник, щоб накреслити прямокутник.'
    }
  },
  simpleshape: {
    tooltip: {
      end: 'Відпустіть мишку, щоб завершити рисування.'
    }
  }
}

const editToolbar = {
  actions: {
    save: {
      title: 'Зберегти зміни.',
      text: 'Зберегти'
    },
    cancel: {
      title: 'Припинити редагування, скасувати всі зміни.',
      text: 'Скасувати'
    },
    clearAll: {
      title: 'Очистити всі шари.',
      text: 'Очистити все'
    }
  },
  buttons: {
    edit: 'Редагувати шари.',
    editDisabled: 'Немає шарів для редагування.',
    remove: 'Видалити шари.',
    removeDisabled: 'Немає шарів для видалення.'
  }
}

const editHandlers = {
  edit: {
    tooltip: {
      text: 'Перетягуйте важелі або маркер для редагування фігури.',
      subtext: 'Натисніть «Скасувати» для скасування змін.'
    }
  },
  remove: {
    tooltip: {
      text: 'Натисніть на фігуру для видалення'
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
