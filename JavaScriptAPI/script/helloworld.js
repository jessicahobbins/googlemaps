let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.019443088077814, lng: -84.16767493984362 },
    zoom: 6,
    mapTypeId: 'satellite'
  });
  mapLabel = new MapLabel({
    text: 'Lake Ontario',
    position: new google.maps.LatLng(43.684027511300016, -77.81757779934962),
    map: map,
    fontSize: 35,
    align: 'right'
});
}