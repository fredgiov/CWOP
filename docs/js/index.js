// docs/js/index.js
document.addEventListener('DOMContentLoaded', () => {
  // Vanta.NET drifting on its own
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

  // Animate title then links in one smooth timeline
  anime.timeline()
    .add({
      targets: '#site-title',
      opacity: [0, 1],
      scale: [0.7, 1],
      easing: 'easeOutExpo',
      duration: 1200
    })
    .add({
      targets: '#links',
      opacity: [0, 1],
      translateY: [24, 0],
      easing: 'easeOutExpo',
      duration: 800,
      offset: '-=600'
    });
});
