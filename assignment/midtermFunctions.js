/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
//Get my data from github
var data = $.ajax("https://raw.githubusercontent.com/RuochangH/Huang-Ruochang_Midterm/master/jsMidterm.geojson");
var parseData = function (data) {var parsed =JSON.parse(data);return parsed;};
var bkdat = parseData (data);

//Filter display data according to user input
var week = $(".weekday").val();
var hour = $(".hour").var();
var dsply = _.filter(alldata, function(each){return each.week === week && each.hour === hour;});

//plot filtered data
var makeMarkers = function (filtered) {var markers =[]; marker = L.circle(); markers.push(marker); return markers;};
var plotMarkers = function (markers) {for(){marker[i].addTo(map).bindPopup();}};

//add click zoom in
function onMarkerClick(e){
  map.setView(e.latlng,14);
};

//add click chart
var eachFeatureFunction = function (layer) {
  layer.on('click',function(event){
    var chart = new CanvasJS.chart('chartContainer',{title,data,type,name,showInLegend})
  })
};
