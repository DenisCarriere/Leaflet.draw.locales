import { DrawHandlers, DrawToolbar, EditHandlers, EditToolbar } from "../index";

const drawToolbar: DrawToolbar = {
    actions: {
        title: "Çizimi iptal et",
        text: "İptal",
    },
    finish: {
        title: "Çizimi Bitir",
        text: "Bitir",
    },
    undo: {
        title: "Çizilen son noktayı sil",
        text: "Son noktayı sil",
    },
    buttons: {
        polyline: "Çoklu çizgi çiz",
        polygon: "Çokgen çiz",
        rectangle: "Dikdörtgen çiz",
        circle: "Yuvarlak çiz",
        marker: "İşaretçi çiz",
        circlemarker: "Yuvarlak işaretçi çiz",
    },
};

const drawHandlers: DrawHandlers = {
    circle: {
        tooltip: {
            start: "Yuvarlak çizmek için tıklayın ve sürükleyin.",
        },
        radius: "Çap",
    },
    circlemarker: {
        tooltip: {
            start: "Yuvarlak işaretçi yerleştirmek için haritaya tıklayın.",
        },
    },
    marker: {
        tooltip: {
            start: "İşaretçi yerleştirmek için haritaya tıklayın.",
        },
    },
    polygon: {
        tooltip: {
            start: "Şekil çizmeye başlamak için tıklayın.",
            cont: "Şekil çizmeye devam etmek için tıklayın.",
            end: "Bu şekli tamamlamak için ilk noktayı tıklayın.",
        },
    },
    polyline: {
        error: "<strong>Hata:</strong> şekil kenarları kesişemez!",
        tooltip: {
            start: "Hat çizmeye başlamak için tıklayın.",
            cont: "Hat çizmeye devam etmek için tıklayın.",
            end: "Bu hattı tamamlamak için ilk noktayı tıklayın.",
        },
    },
    rectangle: {
        tooltip: {
            start: "Dikdörtgen çizmek için tıklayın ve sürükleyin.",
        },
    },
    simpleshape: {
        tooltip: {
            end: "Çizimi bitirmek için fareyi bırakın.",
        },
    },
};

const editToolbar: EditToolbar = {
    actions: {
        save: {
            title: "Değişiklikleri kaydet.",
            text: "Kaydet",
        },
        cancel: {
            title: "Düzenlemeyi iptal et, tüm değişiklikleri çıkar.",
            text: "İptal",
        },
        clearAll: {
            title: "Tüm katmanları temizle.",
            text: "Hepsini temizle",
        },
    },
    buttons: {
        edit: "Katmanları düzenle.",
        editDisabled: "Düzenlenecek katman bulunamadı.",
        remove: "Katmanları sil.",
        removeDisabled: "Silinecek katman bulunamadı.",
    },
};

const editHandlers: EditHandlers = {
    edit: {
        tooltip: {
            text: "Çizimi düzenlemek için köşeleri veya işaretçiyi sürükleyin.",
            subtext: "Değişiklikleri geri almak için iptale tıklayın.",
        },
    },
    remove: {
        tooltip: {
            text: "Çizimi silmek için tıklayın",
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
