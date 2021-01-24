let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 26.028473, lng: -80.114671 },
    zoom: 10,
  });
}
