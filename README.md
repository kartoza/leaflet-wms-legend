# Leaflet WMS Legend Plugin

This is a simple plugin for [leaflet](http://leafletjs.com/) that will display a 
WMS GetLegendGraphic request result in a legend. At the moment the plugin is 
*really, really* simple in that is actually will display any image URI you 
pass it on initialisation. However that is enough to create a nice looking 
legend on your map like this:

![Legend Example](https://raw.githubusercontent.com/kartoza/leaflet-wms-legend/master/example.png)


## Usage

To use it simply include the supplied javascript and css files (make sure the 
js file comes after the main leaflet js file):

```
<link rel="stylesheet" href="../css/leaflet.wmslegend.css"/>
<script src="../js/leaflet.wmslegend.js"></script>
```

Then add a call to the legend control as per this example:

```
uri = "http://maps.kartoza.com/cgi-bin/qgis_mapserv.fcgi?";
uri += "map=/web/Boosmansbos/Boosmansbos.qgs&";
uri += "&SERVICE=WMS&VERSION=1.3.0&SLD_VERSION=1.1.0&";
uri += "REQUEST=GetLegendGraphic&FORMAT=image/jpeg&LAYER=Boosmansbos&STYLE=";
L.wmsLegend(uri);

```

## Demos

For a complete example, please see example.html in the source tree. You can
also visit http://maps.kartoza.com as various of our demos there use the legend
control provided here.

## License

MIT License - see LICENSE.txt provided in the source

## Requirements

Works with leaflet 0.7.3 - may work with older version (untested by the author).

# Author

Tim Sutton (tim@kartoza.com)

August 2014
