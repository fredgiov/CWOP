// docs/js/index.js

document.addEventListener('DOMContentLoaded', () => {
  // 1) Initialize Vanta.NET with your flag palette
  VANTA.NET({
    el: "#vanta-bg",
    backgroundColor: 0x0B2F6D,   // navy
    color: 0xFFC58A,             // peach
    points: 12.00,
    maxDistance: 25.00,
    spacing: 18.00,
    showDots: false
  });

  // 2) Animate the title and buttons
  anime.timeline()
    .add({
      targets: '#site-title',
      opacity: [0,1],
      scale: [0.8,1],
      easing: 'easeOutExpo',
      duration: 1200
    })
    .add({
      targets: '#overlay a',
      opacity: [0,1],
      translateY: [20,0],
      delay: anime.stagger(100, {start: 600}),
      easing: 'easeOutExpo',
      duration: 800
    });
});
