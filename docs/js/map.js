// docs/js/map.js

document.addEventListener('DOMContentLoaded', () => {
  // 1) Vanta.NET background, no interaction
  VANTA.NET({
    el: "#vanta-bg",
    backgroundColor: 0x0B2F6D,
    color: 0xffffff,
    points: 12.0,
    maxDistance: 25.0,
    spacing: 18.0,
    showDots: false,
    mouseControls: false,
    touchControls: false,
    gyroControls: false
  });

  // 2) Initialize Leaflet with Simple CRS (no real-world projection)
  const map = L.map('map', {
    crs: L.CRS.Simple,
    attributionControl: false,
    zoomControl: true
  });

  // 3) Define the bounds of your image (width x height in pixels)
  //    Replace 2000 with your actual map image's width and height
  const mapWidth  = 2000;
  const mapHeight = 2000;
  const bounds = [[0, 0], [mapHeight, mapWidth]];

  // 4) Add your Minecraft map image as an overlay
  //    Place your PNG at docs/images/panslonuvo_map.png
  L.imageOverlay('images/panslonuvo_map.png', bounds).addTo(map);

  // 5) Fit the map view to the image bounds
  map.fitBounds(bounds);

  // 6) (Optional) Add markers or labels here:
  // L.marker([1000, 500]).addTo(map).bindPopup('Capital City');
});
