document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-google-ads-lg', {
        type: 'loop',
        perPage: 1,
        interval: 4000,
        speed: 800,
        focus: 'left',
        updateOnMove: true,
        arrows: false,
        gap: '6rem',
        breakpoints: {
            1280: {
                gap: '2rem',
            }
        }
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-google-ads-sm', {
        type: 'loop',
        perPage: 1,
        interval: 4000,
        speed: 800,
        focus: 'left',
        updateOnMove: true,
        arrows: false,
        gap: '2rem',
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#splide-google-ads', {
        type: 'loop',
        perPage: 1,
        interval: 4000,
        speed: 800,
        focus: 'left',
        updateOnMove: true,
        arrows: false,
        gap: '2rem',
    }).mount();
});
