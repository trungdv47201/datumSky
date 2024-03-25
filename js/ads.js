document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#splide-ads', {
    type: 'loop',
    perPage: 3,
    focus: 'left',
    updateOnMove: true,
    pagination: false,
    gap: '1.5rem',
    breakpoints: {
      640: {
        perPage: 1,
        gap: '0.5rem',
      },
      768: {
        perPage: 2,
        gap: '1.5rem',
      },
      1024: {
        perPage: 2,
        gap: '1.5rem',
      }
    }
  }).mount();
});
