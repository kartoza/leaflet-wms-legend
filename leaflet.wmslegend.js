/*
 * L.Control.WMSLegend is used to add a WMS Legend to the map
 */

L.Control.WMSLegend = L.Control.extend({
    options: {
        position: 'topright',
        uri: '',
    },

    onAdd: function () {
        var controlClassName = 'leaflet-control-wms-legend',
            legendClassName = 'wms-legend',
            container = L.DomUtil.create('div', controlClassName),
            stop = L.DomEvent.stopPropagation;
        this.img = L.DomUtil.create('img', legendClassName, container);
        this.img.src = uri;
        this.img.alt = 'Legend';

        L.DomEvent
            .on(this.img, 'click', stop)
            .on(this.img, 'mousedown', stop)
            .on(this.img, 'dblclick', stop)
            .on(this.img, 'click', L.DomEvent.preventDefault)
            .on(this.img, 'click', stop);
        return container;
    }
});

L.wmsLegend = function(uri) {
  var wmsLegendControl = new L.Control.WMSLegend;
  wmsLegendControl.options.uri = uri;
  map.addControl(wmsLegendControl);
  return wmsLegendControl;
};
