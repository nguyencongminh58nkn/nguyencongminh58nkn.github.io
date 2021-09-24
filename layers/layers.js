var wms_layers = [];

var format_Basin_0 = new ol.format.GeoJSON();
var features_Basin_0 = format_Basin_0.readFeatures(json_Basin_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basin_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basin_0.addFeatures(features_Basin_0);
var lyr_Basin_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Basin_0, 
                style: style_Basin_0,
                interactive: true,
                title: '<img src="styles/legend/Basin_0.png" /> Basin'
            });

lyr_Basin_0.setVisible(true);
var layersList = [lyr_Basin_0];
lyr_Basin_0.set('fieldAliases', {'BASIN_ID': 'BASIN_ID', 'AREA_SQKM': 'AREA_SQKM', });
lyr_Basin_0.set('fieldImages', {'BASIN_ID': '', 'AREA_SQKM': '', });
lyr_Basin_0.set('fieldLabels', {'BASIN_ID': 'no label', 'AREA_SQKM': 'no label', });
lyr_Basin_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});