import drawLocales from "https://unpkg.com/leaflet-draw-locales";

// Leaflet
const map = L.map("mapid").setView([51.505, -0.09], 13);

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?" +
            "access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw", {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: "mapbox.streets",
}).addTo(map);

// LeafletDraw.Locales
drawLocales("nl")

// Leaflet.Draw
const drawnItems = L.featureGroup().addTo(map);

// re-trigger LeafletDraw.Locales
drawLocales("nl")

map.addControl(new L.Control.Draw({
    edit: {
        featureGroup: drawnItems,
        poly: {
            allowIntersection: false,
        },
    },
    draw: {
        polygon: {
            allowIntersection: false,
            showArea: true,
        },
    },
}));

map.on(L.Draw.Event.CREATED, (event) => {
    const layer = event.layer;

    drawnItems.addLayer(layer);
});
