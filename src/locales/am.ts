import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "መሳል ተው",
    text: "ተው",
  },
  finish: {
    title: "መሳል ጨርስ",
    text: "ጨርስ",
  },
  undo: {
    title: "መጨረሻ የተሳለውን ነጥብ አጥፋ",
    text: "መጨረሻ የተሳለውን ነጥብ አጥፋ",
  },
  buttons: {
    polyline: "ፖሊላየን ሳል",
    polygon: "ፖሊጎን ሳል",
    rectangle: "አራት መአዘን ሳል",
    circle: "ክብ ሳል",
    marker: "ምልክት ሳል",
    circlemarker: "ክብ ምልክት ሳል",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "ክብ ለመሳል ተጭንው ይጎትቱ",
    },
    radius: "ራዲየስ",
  },
  circlemarker: {
    tooltip: {
      start: "ክብ ምልክት ለመሳል ካርታውን ይጫኑ ይጎትቱ",
    },
  },
  marker: {
    tooltip: {
      start: "ምልክት ለመሳል ካርታውን ይጫኑ ይጎትቱ",
    },
  },
  polygon: {
    tooltip: {
      start: "ቅርጽን ለመሳል ካርታውን ተጭነው ይጎትቱ",
      cont: "ቅርጽን መሳሎን ለመቀጠል ይጫኑ",
      end: "ቅርጽን ስሎ ለመጨረስ የመጀመሪያውን ነጥብ ይጫኑ",
    },
  },
  polyline: {
    error: "<strong>ስህተት:</strong> መስመሮች እርስ በእርስ መተላለፍ አይችሉም!",
    tooltip: {
      start: "መስመር ለመሳል ካርታውን ተጭነው ይጎትቱ",
      cont: "መስመር መሳሎን ለመቀጠል ይጫኑ",
      end: "መስመር ስሎ ለመጨረስ የመጨረሻውን ነጥብ ይጫኑ",
    },
  },
  rectangle: {
    tooltip: {
      start: "ዐራት መአዝን ለመሳል ካርታውን ይጫኑ ይጎትቱ",
    },
  },
  simpleshape: {
    tooltip: {
      end: "ስለው ለመጨረስ አይጤን ይልቀቁ",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "ለውጦቹን አኑር",
      text: "አኑር",
    },
    cancel: {
      title: "ማስተካከሉን ተው፣ ሁሉንም ለውጦች ሰርዝ",
      text: "ተው",
    },
    clearAll: {
      title: "ሁሉንም የካርታ ገጾች አጥፋ",
      text: "ሁሉንም አጥፋ",
    },
  },
  buttons: {
    edit: "የካርታ ገጽ አስተካክል",
    editDisabled: "የሚስተካከል የካርታ ገጽ የለም",
    remove: "የካርታ ገጽ ሰርዝ.",
    removeDisabled: "የሚሰረዝ የካርታ ገጽ የለም",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "ለማስተካከል ምልክቱን ወይም መያዣውን ይጎትቱ",
      subtext: "ለውጥጡን ለመተው ተው የሚለውን ይጫኑ",
    },
  },
  remove: {
    tooltip: {
      text: "ማጥፋት የፈለጉትን ይጫኑ",
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
