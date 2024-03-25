function goNext(slider) {
    const element = document.querySelector("#" + slider);
    const maxScrollLeft = element.scrollWidth - element.clientWidth;
    element.scrollLeft = getNextScroll(element.scrollLeft, slider);
    if (element.scrollLeft >= maxScrollLeft) {
        element.scrollLeft = 0;
    }
}

function getNextScroll(scrollLeft, slider) {
    const sliderJs = document.getElementById(slider);
    const itemSlider = $('#' + slider + " .item-slider");
    const itemWidth = parseInt($(itemSlider).css('width'));
    const itemGap = parseInt($(sliderJs).css('gap'));
    let nextScroll = 0;
    for (let i = 1; i <= itemSlider.length; i++) {
        nextScroll = i * (itemWidth + itemGap);
        if (scrollLeft < nextScroll) {
            break;
        }
    }
    return nextScroll;
}

function goPrev(slider) {
    const element = document.querySelector("#" + slider);
    const maxScrollLeft = element.scrollWidth - element.clientWidth;
    element.scrollLeft = getPrevScroll(element.scrollLeft, slider);
    if (element.scrollLeft <= 0) {
        element.scrollLeft = maxScrollLeft;
    }
}

function getPrevScroll(scrollLeft, slider) {
    const sliderJs = document.getElementById(slider);
    const itemSlider = $('#' + slider + " .item-slider");
    const itemWidth = parseInt($(itemSlider).css('width'));
    const itemGap = parseInt($(sliderJs).css('gap'));
    let prevScroll = 0;
    for (let i = itemSlider.length; i >= 0; i--) {
        prevScroll = i * (itemWidth + itemGap);
        if (scrollLeft > prevScroll) {
            break;
        }
    }
    return prevScroll;
}

$(window).resize(function () {
    const element = document.querySelectorAll(".sliders");
    for (let i = 0; i < element.length; i++) {
        element[i].scrollLeft = 0;
    }
});