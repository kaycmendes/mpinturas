// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = { lat: -19.9167, lng: -43.9345 };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), { zoom: 11, center: uluru,  disableDefaultUI: true
    });

  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru, map: map,
    icon: { path: google.maps.SymbolPath.CIRCLE, scale: 177, strokeColor: 'black', fillColor: 'yellow', strokeWeight: 1, fillOpacity: 0.5 }
  });
}

