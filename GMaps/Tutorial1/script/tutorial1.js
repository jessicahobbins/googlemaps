// Initialize and add the map
function initMap() {
    // The location of Uluru
    const TrentUniversity = { lat: 44.363165340797, lng: -78.29052212456627 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 8,
      center: TrentUniversity,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: TrentUniversity,
      map: map,
    });
  }