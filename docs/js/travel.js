// docs/js/travel.js
document.addEventListener('DOMContentLoaded', () => {
  VANTA.CELLS({ el: "#vanta-bg" });
  anime({ targets: '.animate-fade-in', scale: [1.1,1], opacity: [0,1], duration: 1200 });
  new Quill('#editor', { theme: 'snow' });
});
