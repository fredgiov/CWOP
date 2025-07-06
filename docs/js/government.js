// docs/js/government.js
document.addEventListener('DOMContentLoaded', () => {
  VANTA.GLOBE({ el: "#vanta-bg" });
  anime({ targets: '.animate-fade-in', scale: [0.8,1], opacity: [0,1], duration: 1200 });
  new Quill('#editor', { theme: 'snow' });
});
