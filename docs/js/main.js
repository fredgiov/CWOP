// main.js
// Fade in the hero headline
anime({
  targets: '.animate-fade-in',
  opacity: [0, 1],
  duration: 2000,
  easing: 'easeInOutQuad'
});

// Slide up the subheading
anime({
  targets: '.animate-slide-up',
  translateY: [50, 0],
  opacity: [0, 1],
  duration: 2000,
  delay: 500,
  easing: 'easeOutExpo'
});
