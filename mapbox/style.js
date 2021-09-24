
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "bando_0": {
            "type": "geojson",
            "data": json_bando_0
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_bando_0_0",
            "type": "fill",
            "source": "bando_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#a47158'}
        }
],
}