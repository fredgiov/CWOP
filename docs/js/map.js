// docs/js/map.js
document.addEventListener('DOMContentLoaded', () => {
  VANTA.NET({ el: "#vanta-bg" });
  anime({ targets: '.animate-fade-in', opacity: [0,1], duration: 1000 });

  // Leaflet init stub:
  const map = L.map('map').setView([0,0], 2);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  // -> later, load your GeoJSON or embed Dynmap iframe
});
