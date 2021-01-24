// Initialize and add the map
function initMap() {
    // The location of Trent University
    const TrentUniversity = { lat: 44.363410789383174, lng: -78.29052212456627 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: TrentUniversity,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: TrentUniversity,
      map: map,
    });
  }