import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
	actions: {
		title: 'لغو ترسیم',
		text: 'لغو',
	},
	finish: {
		title: 'پایان ترسیم',
		text: 'پایان',
	},
	undo: {
		title: 'حذف آخرین نقطه کشیده شده',
		text: 'حذف آخرین نقطه',
	},
	buttons: {
		polyline: 'ترسیم یک خط',
		polygon: 'ترسیم زمین',
		rectangle: 'ترسیم یک مربع',
		circle: 'ترسیم یک دایره',
		marker: 'نشانه گذاری',
		circlemarker: 'یک نشانگر دایره ای بکشید'
	},
};

const drawHandlers: DrawHandlers = {
	circle: {
		tooltip: {
			start: 'کیلک و کشیدن برای رسم دایره.'
		},
		radius: 'شعاع'
	},
	circlemarker: {
		tooltip: {
			start: 'برای قرار دادن علامت روی نقشه کلیک کنید.'
		},
	},
	marker: {
		tooltip: {
			start: 'روی نقشه کلیک کنید.'
		},
	},
	polygon: {
		tooltip: {
			start: 'برای رسم چند ضلعی کلیک کنید.',
			cont: 'برای ادامه ترسیم کلیک کنید.',
			end: 'برای اتمام روی نقطه شروع کلیک کنید.'
		},
	},
	polyline: {
		error: '<strong>خطاء:</strong> لبه های شکل نمی توانند متقاطع شوند!',
		tooltip: {
			start: 'برای ترسیم خط کلیک کنید.',
			cont: 'برای ادامه ترسیم کلیک کنید.',
			end: 'برای اتمام روی نقطه شروع کلیک کنید.'
		},
	},
	rectangle: {
		tooltip: {
			start: 'کیلک و کشیدن برای رسم دایره.'
		},
	},
	simpleshape: {
		tooltip: {
			end: 'برای اتمام موس را رها کنید.'
		},
	},
};

const editToolbar: EditToolbar = {
	actions: {
		save: {
			title: 'ذخیره تغییرات',
			text: 'ذخیره'
		},
		cancel: {
			title: 'لغو ویرایش، حذف همه تغییرات',
			text: 'لغو'
		},
		clearAll: {
			title: 'حذف تمام لایه ها',
			text: 'پاک سازی همه'
		},
	},
	buttons: {
		edit: 'ویرایش لایه ها',
		editDisabled: 'لایه ای برای ویرایش نیست',
		remove: 'حذف لایه ها',
		removeDisabled: 'لایه ای برای حذف نیست'
	},
};

const editHandlers: EditHandlers = {
  edit: {
		tooltip: {
			text: 'برای ویرایش، نشانگرها را بکشید.',
			subtext: 'برای لغو تغییرات روی "لغو" کلیک کنید.'
		},
	},
	remove: {
		tooltip: {
			text: 'برای حذف روی یک ویژگی کلیک کنید.'
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
