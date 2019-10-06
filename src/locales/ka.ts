import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "ხატვის გაუქმება",
    text: "გაუქმება",
  },
  finish: {
    title: "ხატვის დასრულება",
    text: "დასრულება",
  },
  undo: {
    title: "ბოლო დახატული წერტილის წაშლა",
    text: "ბოლო წერტილის წაშლა",
  },
  buttons: {
    polyline: "პოლილაინის დახაზვა",
    polygon: "პოლიგონის დახაზვა",
    rectangle: "მართკუთხედის დახაზვა",
    circle: "წრის დახაზვა",
    marker: "ადგილმდებარეობის დატანა",
    circlemarker: "ადგილმდებარეობის დატანა(წრის სახით)",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "დააწკაპუნეთ და გადაიტანეთ იმისათვის, რომ წრე დახაზოთ.",
    },
    radius: "რადიუსი",
  },
  circlemarker: {
    tooltip: {
      start: "დააწკაპუნეთ რუკაზე ადგილმდებარეობის შესაქმნელად.",
    },
  },
  marker: {
    tooltip: {
      start: "დააწკაპუნეთ რუკაზე ადგილმდებარეობის შესაქმნელად.",
    },
  },
  polygon: {
    tooltip: {
      start: "დააწკაპუნეთ, კონტურის ხაზვის დაწყებისთვის.",
      cont: "დააწკაპუნეთ, კონტრუსი ხაზვის დასრულებისთვის.",
      end: "დააწკაპუნეთ პირველ წერტილზე, რათა დაასრულოთ კონტურის ხაზვა.",
    },
  },
  polyline: {
    error: "<strong>შეცდომა:</strong> ხაზი ვერ გადაკვეთავს თავის თავს",
    tooltip: {
      start: "დააწკაპუნეთ, ხაზის ხაზვის დაწყებისთვის.",
      cont: "დააწკაპუნეთ, ხაზის ხაზვის დასრულებისთვის.",
      end: "დააწკაპუნეთ ბოლო წერტილზე, რათა დაასრულოთ ხაზის ხაზვა.",
    },
  },
  rectangle: {
    tooltip: {
      start: "დააწკაპუნეთ და გადაიტანეთ იმისათვის, რომ მართკუთხედი დახაზოთ.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "გაათავისუფლეთ თაგვის ღილაკი ხაზვის დასასრულებლად.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "ცვლილებების შენახვა.",
      text: "შენახვა",
    },
    cancel: {
      title: "რედაქტირების გაუქმება, დააბრუნე ყველა ცვლილება.",
      text: "გაუქმება",
    },
    clearAll: {
      title: "ყველა რედაქტირებული ფენის გასუფთავება.",
      text: "გასუფთავება",
    },
  },
  buttons: {
    edit: "რედაქტირება.",
    editDisabled: "ფენები არ არის რედაქტირებისთვის.",
    remove: "წაშლა.",
    removeDisabled: "ფენები არ არის წაშლისთვის.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "გადაიტანეთ წვერები ან წერტილები ობიექტის რედაქტირებისთვის.",
      subtext: 'დააჭირეთ "გაუქმება", საწყის მდგომარეობაში დასაბრუნებლად.',
    },
  },
  remove: {
    tooltip: {
      text: "დააწკაპუნეთ ობიექტზე წაშლისთვის",
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
