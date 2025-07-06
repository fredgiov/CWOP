// docs/js/language.js
document.addEventListener('DOMContentLoaded', () => {
  // 1) Vanta background
  VANTA.CLOUDS({ el: "#vanta-bg" });

  // 2) Fade-in title
  anime({ targets: '.animate-fade-in', opacity: [0,1], duration: 1200 });

  // 3) Init Quill editor
  const quill = new Quill('#editor', { theme: 'snow' });
});
