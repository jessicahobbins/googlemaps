let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 44.386590, lng: -78.392747 },
    zoom: 12,
  });
}
