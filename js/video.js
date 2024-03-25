document.addEventListener( 'DOMContentLoaded', function () {
  new Splide('#splide-video', {
    type: 'loop',
    perPage: 3,
    focus: 'center',
    updateOnMove: true,
    pagination: false,
    gap: '7rem',
    breakpoints: {
      640: {
        perPage: 1,
        gap: '7rem',
      },
      768: {
        perPage: 2,
        gap: '7.5rem',
      },
      1024: {
        perPage: 3,
        gap: '6rem',
      }
    }
  }).mount();
});
