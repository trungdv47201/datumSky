let slider;
let isDown = false;
let startX;
let scrollLeft;

init(".sliders");

function init(ele) {
    slider = document.querySelectorAll(ele);
}

for (let i = 0; i < slider.length; i++) {
    slider[i].addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider[i].offsetLeft;
        scrollLeft = slider[i].scrollLeft;
    });
    
    slider[i].addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    slider[i].addEventListener('mouseup', () => {
        isDown = false;
    });
    
    slider[i].addEventListener('mousemove', (e) => {
        if (!isDown) {
            return;
        }
        e.preventDefault();
        const x = e.pageX - slider[i].offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider[i].scrollLeft = scrollLeft - walk;
    });
}