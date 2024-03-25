document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#splide-rating', {
    type: 'loop',
    perPage: 2,
    focus: 'left',
    flickMaxPages: 2,
    updateOnMove: true,
    pagination: false,
    gap: '2.5rem',
    breakpoints: {
      640: {
        perPage: 1,
        gap: '2.5rem',
      },
      768: {
        perPage: 2,
        gap: '1.5rem',
      }
    }
  }).mount();
});