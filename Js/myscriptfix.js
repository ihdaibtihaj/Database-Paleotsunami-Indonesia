//basemap tilelayer
var peta1 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' +
      'Basemap © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11'
  });

var peta2 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' +
      'Basemap © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-v9'
  });

var peta3 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' +
      'Basemap © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v10'
  });

var peta4 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, ' +
      'Basemap © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/dark-v10'
  });

//menampilkan peta
var map = L.map('map', {zoomControl:false,
    center: [-5.99, 113.93],
    zoom: 6,
    layers: [peta1]
  });

//icon dari tiap layer
var allTsunami =L.icon({
    iconUrl: 'img/tsunami1.png',
    iconSize:     [15, 15], // size of the icon
});

var iconValidExc =L.icon({
    iconUrl: 'img/iconvalidexc.png',
    iconSize:     [15, 15], // size of the icon
});

var iconValidMod =L.icon({
    iconUrl: 'img/iconvalidmoderate.png',
    iconSize:     [15, 15], // size of the icon
});

var iconValidFair =L.icon({
    iconUrl: 'img/iconvalidfair.png',
    iconSize:     [15, 15], // size of the icon
});

var iconHistorical =L.icon({
    iconUrl: 'img/historical.png',
    iconSize:     [20, 20], // size of the icon
});

var iconPrehistorical =L.icon({
    iconUrl: 'img/prehistorical.png',
    iconSize:     [15, 15], // size of the icon
});

var iconDeposit =L.icon({
    iconUrl: 'img/icondepositditemukan.png',
    iconSize:     [20, 20], // size of the icon
});

var iconNoDeposit =L.icon({
    iconUrl: 'img/icondepositunknown.png',
    iconSize:     [20, 20], // size of the icon
});

var iconPrimer =L.icon({
    iconUrl: 'img/iconprimer.png',
    iconSize:     [20, 20], // size of the icon
});

var iconSekunder =L.icon({
    iconUrl: 'img/iconsekunder.png',
    iconSize:     [25, 25], // size of the icon
});

var iconsumbertsunami =L.icon({
    iconUrl: 'img/iconsumbertsunami.png',
    iconSize:     [15, 15], // size of the icon
});

var iconGempabumi =L.icon({
    iconUrl: 'img/gempa.png',
    iconSize:     [20, 20], // size of the icon
});

var iconVulkanisme =L.icon({
    iconUrl: 'img/vulkanisme.jpg',
    iconSize:     [20, 20], // size of the icon
});

var iconLongsor =L.icon({
    iconUrl: 'img/landslide.png',
    iconSize:     [20, 20], // size of the icon
});

var iconGempaLongsor =L.icon({
    iconUrl: 'img/gempalongsor.png',
    iconSize:     [20, 20], // size of the icon
});

var iconGempaVulkanisme =L.icon({
    iconUrl: 'img/gempavulkanisme.png',
    iconSize:     [20, 20], // size of the icon
});

var iconVulkanismeLongsor =L.icon({
    iconUrl: 'img/vulkanismelongsor.jpg',
    iconSize:     [20, 20], // size of the icon
});

var iconGunungApi =L.icon({
    iconUrl: 'img/gunungapi.png',
    iconSize:     [20, 20], // size of the icon
});

//menampilkan popup
function popUp(f,l){
    var out = [];
    if (f.properties){
        for(key in f.properties){
            out.push(key+": "+f.properties[key]);
        }
        l.bindPopup(out.join("<br />"));
    }
}

//scale bar
L.control.scale().addTo(map);

//menampilkan layer
var database = new L.GeoJSON.AJAX(["geojson/layer data/databasetsunami.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: allTsunami})}}).addTo(map);
var validitasExc = new L.GeoJSON.AJAX(["geojson/layer data/validitasexcellent.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconValidExc})}});
var validitasMod = new L.GeoJSON.AJAX(["geojson/layer data/validitasmoderate.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconValidMod})}});
var validitasFair = new L.GeoJSON.AJAX(["geojson/layer data/validitasfair.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconValidFair})}});
var waktuHistorical = new L.GeoJSON.AJAX(["geojson/layer data/waktuhistorical.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconHistorical})}});
var waktuPrehistorical = new L.GeoJSON.AJAX(["geojson/layer data/waktuprehistorical.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconPrehistorical})}});
var buktiPrimer = new L.GeoJSON.AJAX(["geojson/layer data/buktialamprimer.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconPrimer})}});
var buktiSekunder = new L.GeoJSON.AJAX(["geojson/layer data/buktialamsekunder.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconSekunder})}});
var depositDitemukan = new L.GeoJSON.AJAX(["geojson/layer data/depositditemukan.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconDeposit})}});
var depositUnknown = new L.GeoJSON.AJAX(["geojson/layer data/deposittidakdiketahui.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconNoDeposit})}});
var sumberTsunami = new L.GeoJSON.AJAX(["geojson/sumbertsunami.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconsumbertsunami})}});
var sebabGempa = new L.GeoJSON.AJAX(["geojson/layer data/sebab_gempabumi.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconGempabumi})}});
var sebabVulkanisme = new L.GeoJSON.AJAX(["geojson/layer data/sebab_vulkanik.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconVulkanisme})}});
var sebabLongsor = new L.GeoJSON.AJAX(["geojson/layer data/sebab_longsor.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconLongsor})}});
var sebabGempaLongsor = new L.GeoJSON.AJAX(["geojson/layer data/sebab_gempalongsor.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconGempaLongsor})}});
var sebabGempaVulkanisme = new L.GeoJSON.AJAX(["geojson/layer data/sebab_gempavulkanik.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconGempaVulkanisme})}});
var sebabVulkanismeLongsor = new L.GeoJSON.AJAX(["geojson/layer data/sebab_vulkaniklongsor.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconVulkanismeLongsor})}});
var zonaSubduksi = new L.GeoJSON.AJAX(["geojson/zonasubduksi.geojson"],{onEachFeature:popUp, style: function (feature){return (feature, {color:"#000000", weight:3})}});//pada script ini juga di atur style dari layer dengan function
var sesar1 = new L.GeoJSON.AJAX(["geojson/sesarindo1.geojson"],{onEachFeature:popUp, style: function (feature){return (feature, {color:"#cc0000", weight:2})}});
var sesar2 = new L.GeoJSON.AJAX(["geojson/sesarindo2.geojson"],{onEachFeature:popUp, style: function (feature){return (feature, {color:"#cc0000", weight:2})}});
var gunungApi = new L.GeoJSON.AJAX(["geojson/gunungapi_indonesia.geojson"],{onEachFeature:popUp, pointToLayer: function (feature,latlng){return L.marker(latlng,{icon: iconGunungApi})}});

//Layer Group
var validitas =L.layerGroup([validitasExc, validitasMod, validitasFair]);
var klasifikasiWaktu =L.layerGroup([waktuHistorical, waktuPrehistorical]);
var buktiAlam =L.layerGroup([buktiPrimer,buktiSekunder]);
var statusDeposit =L.layerGroup([depositDitemukan, depositUnknown]);
var sebabTsunami= L.layerGroup([sebabGempa, sebabVulkanisme, sebabLongsor, sebabGempaLongsor, sebabGempaVulkanisme, sebabVulkanismeLongsor]);
var sesarIndo =L.layerGroup([sesar1, sesar2]);

var baseLayers = {
    "Topografi": peta1,
    "Satelit": peta2,
    "Terang" : peta3,
    "Gelap" :peta4
    
  };

var overlays = {
    "Seluruh Kejadian": database,
    "Validitas": validitas,
    "Klasifikasi Waktu": klasifikasiWaktu,
    "Bukti Alam": buktiAlam,
    "Status Deposit": statusDeposit,
    "Sebab Tsunami" : sebabTsunami,
    "Lokasi Sumber Tsunami": sumberTsunami,
    "Subduksi": zonaSubduksi,
    "Sesar Indonesia": sesarIndo,
    "Gunung Api Indonesia": gunungApi

  };


//Pengaturan Koordinat plugin
var bounds = new L.LatLngBounds(new L.LatLng(7, 130), new L.LatLng(-6, 111));

map.fitBounds(bounds);
//add configured controls
L.control.coordinates({
      position:"bottomright",
      decimals:2,
      decimalSeperator:",",
      labelTemplateLat:"Latitude: {y}",
      labelTemplateLng:"Longitude: {x}"
}).addTo(map);

//control layer list
L.control.layers(baseLayers, overlays, {position:"bottomright"}).addTo(map);

//Pengaturan Home Button
var zoomHome = new L.Control.zoomHome({position:"bottomleft"});
zoomHome.addTo(map);

//fitur pencarian
var searchControl = L.esri.Geocoding.geosearch({
    position:'bottomleft',
    placeholder: 'Temukan Lokasi atau Alamat',
    useMapBounds: false,
    providers: [L.esri.Geocoding.arcgisOnlineProvider({
      apikey:'AAPK39be87d79b2f45aaa429538f831f954dsbq_62q8ZCEpCvOBLLsS_aZqHI9SOdPmV0RcM93bEe81UDhritv01zbGww1yrEE1', // replace with your api key - https://developers.arcgis.com
      nearby: {
        lat: -33.8688,
        lng: 151.2093
      }
    })]
  }).addTo(map);

var results = L.layerGroup().addTo(map);

  searchControl.on('results', function (data) {
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
      results.addLayer(L.marker(data.results[i].latlng));
    }
  });

//widget lokasi user(geolocation)
L.control.locate({
  position:"bottomleft"
}).addTo(map);
