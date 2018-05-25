const drawToolbar = {
  actions: {
    title: 'Zrušiť kreslenie',
    text: 'Zrušiť'
  },
  finish: {
    title: 'Dokončiť kreslenie',
    text: 'Dokončiť'
  },
  undo: {
    title: 'Zmazať posledný nakreslený bod',
    text: 'Zmazať posledný bod'
  },
  buttons: {
    polyline: 'Nakresliť čiaru',
    polygon: 'Nakresliť polygón',
    rectangle: 'Nakresliť obdĺžnik',
    circle: 'Nakresliť kruh',
    marker: 'Nakresliť bod',
    circlemarker: 'Nakresliť kruhový bod'
  }
}

const drawHandlers = {
  circle: {
    tooltip: {
      start: 'Kliknite a potiahnite, aby ste nakreslili kruh.'
    },
    radius: 'Polomer'
  },
  circlemarker: {
    tooltip: {
      start: 'Kliknite na mapu aby ste umiestnili kruhový bod.'
    }
  },
  marker: {
    tooltip: {
      start: 'Kliknite na mapu aby ste umiestnili bod.'
    }
  },
  polygon: {
    error: '<strong>Chyba:</strong> FOO!',
    tooltip: {
      start: 'Kliknite, aby ste začali kresliť útvar.',
      cont: 'Kliknite, aby ste nakreslili ďalší bod útvaru.',
      end: 'Kliknite na prvý bod, aby ste uzavreli útvar.'
    }
  },
  polyline: {
    error: '<strong>Chyba:</strong> čiary sa nesmú pretínať!',
    tooltip: {
      start: 'Kliknite, aby ste začali kresliť čiaru.',
      cont: 'Kliknite, aby ste nakreslili ďalší bod čiary.',
      end: 'Kliknite posledný bod, aby ste dokončili čiaru.'
    }
  },
  rectangle: {
    tooltip: {
      start: 'Kliknite a potiahnite, aby ste nakreslili štvorec.'
    }
  },
  simpleshape: {
    tooltip: {
      end: 'Uvoľnením tlačidla myši ukončíte kreslenie.'
    }
  }
}

const editToolbar = {
  actions: {
    save: {
      title: 'Uložiť zmeny.',
      text: 'Uložiť'
    },
    cancel: {
      title: 'Ukončiť úpravu, zrušiť všetky zmeny.',
      text: 'Zrušiť'
    },
    clearAll: {
      title: 'Zmazať všetky vrstvy.',
      text: 'Zmazať všetko'
    }
  },
  buttons: {
    edit: 'Upraviť vrstvy.',
    editDisabled: 'Žiadne vrstvy pre úpravu',
    remove: 'Zmazať vrstvy.',
    removeDisabled: 'Žiadne vrstvy pre zmazanie.'
  }
}

const editHandlers = {
  edit: {
    tooltip: {
      text: 'Potiahnutím vyznačených štvorčekov, alebo bodov upravíte útvar.',
      subtext: 'Kliknite zrušiť, pre zrušenie zmien.'
    }
  },
  remove: {
    tooltip: {
      text: 'Kliknite na útvar pre jeho zmazanie.'
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
