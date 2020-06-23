import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
  actions: {
    title: "取消绘制",
    text: "取消",
  },
  finish: {
    title: "结束绘制",
    text: "结束",
  },
  undo: {
    title: "删除最后一个绘制点",
    text: "删除最后一个点",
  },
  buttons: {
    polyline: "绘制折线",
    polygon: "绘制多边形",
    rectangle: "绘制矩形",
    circle: "绘制圆形",
    marker: "绘制标志物",
    circlemarker: "绘制圆形标志物",
  },
};

const drawHandlers: DrawHandlers = {
  circle: {
    tooltip: {
      start: "单击并拖拽绘制圆形",
    },
    radius: "半径",
  },
  circlemarker: {
    tooltip: {
      start: "单击地图放置圆形标志物",
    },
  },
  marker: {
    tooltip: {
      start: "单击地图放置标志物",
    },
  },
  polygon: {
    tooltip: {
      start: "单击地图绘制图形",
      cont: "继续单击绘制图形",
      end: "单击起始点结束绘制",
    },
  },
  polyline: {
    error: "<strong>错误:</strong> 图形边缘不能交叉!",
    tooltip: {
      start: "单击地图绘制折线",
      cont: "继续单击绘制下一段折线",
      end: "单击最后一个点结束绘制",
    },
  },
  rectangle: {
    tooltip: {
      start: "单击并拖拽绘制矩形",
    },
  },
  simpleshape: {
    tooltip: {
      end: "松开鼠标结束绘制",
    },
  },
};

const editToolbar: EditToolbar = {
  actions: {
    save: {
      title: "保存变更",
      text: "保存",
    },
    cancel: {
      title: "取消编辑，放弃所有变更",
      text: "取消",
    },
    clearAll: {
      title: "清除所有图形",
      text: "清除所有",
    },
  },
  buttons: {
    edit: "编辑图形",
    editDisabled: "无图形可编辑",
    remove: "删除图形",
    removeDisabled: "无图形可删除",
  },
};

const editHandlers: EditHandlers = {
  edit: {
    tooltip: {
      text: "拖拽线段或标志点以编辑图形",
      subtext: "点击<strong>取消</strong>按钮撤销变更",
    },
  },
  remove: {
    tooltip: {
      text: "单击图形以移除",
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
