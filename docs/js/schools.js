// docs/js/schools.js
document.addEventListener('DOMContentLoaded', () => {
  VANTA.FOG({ el: "#vanta-bg" });
  anime({ targets: '.animate-fade-in', scale: [0.9,1], opacity: [0,1], duration: 1000 });
  new Quill('#editor', { theme: 'snow' });
});
