//chart validitas
var datavalid = {
  labels: [
  "Excellent", "Moderate", "Fair"],
  datasets: [{
    label: 'Validitas',
    data: [19, 53, 229],
    backgroundColor: [
      '#003566',
      '#003566',
      '#003566'  
    ],
    borderColor: [
      '#003566',
      '#003566',
      '#003566'
    ],
    borderWidth: 1
  }]
};

var configvalid = {
  type: 'bar',
  data: datavalid,
  options:{indexAxis: "y",}};

var myChartvalid = new Chart(
    document.getElementById('validitas'),
    configvalid
  );

//chart sebab tsunami
var datasebab = {
  labels: [
  "Gempa Bumi", "Vulkanisme", "Longsor Bawah Laut", "Gempa Bumi, Longsoran", "Gempa Bumi, Vulkanisme", "Vulkanisme, Longsoran"],
  datasets: [{
    label: 'Frekuensi Sebab Tsunami',
    data: [255, 26, 1, 9, 7, 3],
    backgroundColor: [
      '#FFD60A',
      '#FFD60A',
      '#FFD60A',
      '#FFD60A',
      '#FFD60A',
      '#FFD60A'
      
    ],
    borderColor: [
      '#FFD60A',
      '#FFD60A',
      '#FFD60A',
      '#FFD60A',
      '#FFD60A',
      '#FFD60A'

    ],
    borderWidth: 1
  }]
};

var configsebab = {
  type: 'bar',
  data: datasebab,
  options:{indexAxis: "y",}};

var myChartsebab = new Chart(
    document.getElementById('sebabtsunami'),
    configsebab
  );

//chart waktu
const data = {
  labels: [
    'Prehistorical',
    'Historical'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [37, 264],
    backgroundColor: [
      '#001D3D',
      '#FFD60A',
    ],
    hoverOffset: 4
  }]
};

const config = {
  type: 'pie',
  data: data,
};

      var myChart1 = new Chart(
    document.getElementById('waktukejadian'),
    config
  );

//chart bukti alam
var data2 = {
  labels: [
    'Primer',
    'Sekunder'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [94, 207],
    backgroundColor: [
      '#FFD60A',
      '#003566'
    ],
    hoverOffset: 4
  }]
};

var config2 = {
  type: 'pie',
  data: data2,
};

      var myChart2 = new Chart(
    document.getElementById('buktialam'),
    config2
  );

//chart deposit
var data3 = {
  labels: [
    'Deposit Ditemukan',
    'Deposit Tidak Diketahui'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [71, 230],
    backgroundColor: [
      '#003566',
      '#FFD60A'
    ],
    hoverOffset: 4
  }]
};

var config3 = {
  type: 'pie',
  data: data3,
};

      var myChart3 = new Chart(
    document.getElementById('deposit'),
    config3
  );
