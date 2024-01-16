import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "Huỷ hình vẽ",
    text: "Huỷ",
  },
  finish: {
    title: "Xong hình vẽ",
    text: "Xong",
  },
  undo: {
    title: "Xoá điểm vừa vẽ gần nhất",
    text: "Xoá điểm vừa vẽ",
  },
  buttons: {
    polyline: "Vẽ đường tự do",
    polygon: "Vẽ đa giác tự do",
    rectangle: "Vẽ hình chữ nhật",
    circle: "Vẽ hình tròn",
    marker: "Đánh dấu điểm",
    circlemarker: "Khoanh tròn điểm",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "Nhấp và rê chuột để vẽ hình tròn.",
    },
    radius: "Bán kính",
  },
  circlemarker: {
    tooltip: {
      start: "Nhấp chuột lên bản đồ để khoanh tròn một điểm.",
    },
  },
  marker: {
    tooltip: {
      start: "Nhấp chuột lên bản đồ để đánh dấu một điểm.",
    },
  },
  polygon: {
    tooltip: {
      start: "Nhấp chuột để bắt đầu vẽ hình đa giác.",
      cont: "Nhấp chuột để tiếp tục vẽ hình đa giác.",
      end: "Nhấp chuột vào đỉnh đầu tiên để hoàn thiện hình đa giác.",
    },
  },
  polyline: {
    error: "<strong>Lỗi:</strong> Các đường không được cắt nhau!",
    tooltip: {
      start: "Nhấp chuột để bắt đầu vẽ đường.",
      cont: "Nhấp chuột để tiếp tục vẽ đường.",
      end: "Nhấp chuột vào điểm gấp khúc vừa vẽ để hoàn thiện đường.",
    },
  },
  rectangle: {
    tooltip: {
      start: "Nhấp và rê chuột để vẽ hình chữ nhật.",
    },
  },
  simpleshape: {
    tooltip: {
      end: "Nhả chuột để hoàn thiện hình.",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "Lưu thay đổi.",
      text: "Lưu",
    },
    cancel: {
      title: "Dừng chỉnh sửa, huỷ toàn bộ thay đổi.",
      text: "Huỷ",
    },
    clearAll: {
      title: "Xoá toàn bộ các lớp.",
      text: "Xoá tất cả",
    },
  },
  buttons: {
    edit: "Chỉnh sửa lớp.",
    editDisabled: "Không có lớp nào để chỉnh sửa.",
    remove: "Xoá lớp.",
    removeDisabled: "Không có lớp nào để xoá.",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "Di chuyển các điểm tay nắm để chỉnh sửa hình vẽ.",
      subtext: "Bấm Huỷ để khôi phục hình vẽ ban đầu.",
    },
  },
  remove: {
    tooltip: {
      text: "Nhấp chuột vào hình vẽ để xoá đi",
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
