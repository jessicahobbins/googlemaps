let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 45.019443088077814, lng: -84.16767493984362 },
    zoom: 6,
    mapTypeId: 'satellite'
  });
}