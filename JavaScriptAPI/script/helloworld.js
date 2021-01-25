let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 46.09634389704842, lng: -84.14570228537825 },
    zoom: 6,
    mapTypeId: 'satellite'
  });
}