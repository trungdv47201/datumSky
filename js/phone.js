document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#splide-phone', {
    type: 'loop',
    perPage: 3,
    autoplay: "playing",
    interval: 3000,
    speed: 800,
    focus: 'center',
    updateOnMove: true,
    pagination: false,
    gap: '12rem',
    breakpoints: {
      400: {
        gap: '2.5rem',
      },
      440: {
        gap: '3.5rem',
      },
      640: {
        gap: '4.5rem',
      },
      768: {
        gap: '8rem',
      },
      1024: {
        gap: '9em',
      },
      1280: {
        gap: '12rem',
      },
    }
  }).mount();
});
