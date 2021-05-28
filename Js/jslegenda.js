//Pengaturan Legenda
var legend = L.control({ position: "topright"});

function showDisclaimer () {
  var div = document.getElementById("legend")
  div.innerHTML += "<h4>Legenda</h4>";
  div.innerHTML += '<i class="icon" style="background-image: url(img/tsunami1.png);background-repeat: no-repeat;"></i><span>Seluruh Kejadian Tsunami</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(img/iconsumbertsunami.png);background-repeat: no-repeat;"></i><span>Lokasi Sumber Tsunami</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(img/iconsubduksi.png);background-repeat: no-repeat;"></i><span>Zona Subduksi</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(img/iconsesar.png);background-repeat: no-repeat;"></i><span>Sesar</span><br>';
  div.innerHTML += "<h5>Validitas</h5>";
  div.innerHTML += '<i class="icon" style="background-image: url(img/iconvalidexc.png);background-repeat: no-repeat;"></i><span>Excellent</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(img/iconvalidmoderate.png);background-repeat: no-repeat;"></i><span>Moderate</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(img/iconvalidfair.png);background-repeat: no-repeat;"></i><span>Fair</span><br>';
  div.innerHTML += "<h5>Klasifikasi Waktu</h5>";
  div.innerHTML += '<i class="icon" style="background-image: url(img/historical.png);background-repeat: no-repeat;"></i><span>Historical</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(img/prehistorical.png);background-repeat: no-repeat;"></i><span>Prehistorical</span><br>';
  div.innerHTML += "<h5>Bukti Alam</h5>";
  div.innerHTML += '<i class="icon" style="background-image: url(img/iconprimer.png);background-repeat: no-repeat;"></i><span>Primer</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(img/iconsekunder.png);background-repeat: no-repeat;"></i><span>Sekunder</span><br>';
  div.innerHTML += "<h5>Status Deposit</h5>";
  div.innerHTML += '<i class="icon" style="background-image: url(img/icondepositditemukan.png);background-repeat: no-repeat;"></i><span>Deposit Ditemukan</span><br>';
  div.innerHTML += '<i class="icon" style="background-image: url(img/icondepositunknown.png);background-repeat: no-repeat;"></i><span>Deposit Tidak Diketahui</span><br>';
}

function hideDisclaimer() {
  var div = document.getElementById("legend")
  div.innerHTML = '<i class="icon2" style="background-image: url(img/map-legend.png);background-repeat: no-repeat;"></i><br>';
}

legend.onAdd = function(map) {
  var div = L.DomUtil.create("div", "legend");
  div.innerHTML = '<i class="icon2" style="background-image: url(img/map-legend.png);background-repeat: no-repeat;"></i><span></span><br>';
  div.setAttribute("onmouseenter", "showDisclaimer()");
  div.setAttribute("onmouseleave", "hideDisclaimer()");
  div.id = "legend"


  return div;
};

legend.addTo(map);