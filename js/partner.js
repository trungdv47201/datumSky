document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#splide-partner', {
    type: 'loop',
    perPage: 6,
    focus: 'left',
    updateOnMove: true,
    pagination: false,
    gap: '1.5rem',
    breakpoints: {
      640: {
        perPage: 4,
        gap: '0.5rem',
      },
      768: {
        perPage: 4,
        gap: '1.5rem',
      },
      1024: {
        perPage: 5,
        gap: '1.5rem',
      }
    }
  }).mount();
});
