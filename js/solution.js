document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-solution', {
        perPage: 2,
        focus: 'left',
        updateOnMove: true,
        arrows: false,
        autoWidth: true,
        breakpoints: {
            640: {
                perPage: 1,
            },
            768: {
                perPage: 1,
            },
            1024: {
                perPage: 2,
            }
        }
    }).mount();
});
