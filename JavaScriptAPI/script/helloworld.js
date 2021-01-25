let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 46.157257770401074, lng: -84.73896412905184 },
    zoom: 6,
    mapTypeId: 'satellite'
  });
}
