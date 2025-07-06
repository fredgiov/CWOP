// docs/js/sports.js
document.addEventListener('DOMContentLoaded', () => {
  VANTA.DOTS({ el: "#vanta-bg" });
  anime({ targets: '.animate-fade-in', rotate: [ -5, 0 ], opacity: [0,1], duration: 1000 });
  new Quill('#editor', { theme: 'snow' });
});
