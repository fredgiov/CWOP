// docs/js/states.js
document.addEventListener('DOMContentLoaded', () => {
  VANTA.NET({ el: "#vanta-bg" });
  anime({ targets: '.animate-fade-in', translateY: [-20,0], opacity: [0,1], duration: 1000 });
  new Quill('#editor', { theme: 'snow' });
});
