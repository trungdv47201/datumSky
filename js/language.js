let arrLang = {
    'en': {
        'home': 'Home',
        'introduce': 'Introduce',
        'service': 'Service',
        'contact': 'Contact',
    },
    'vi': {
        'home': 'Trang chủ',
        'introduce': 'Giới thiệu',
        'service': 'Dịch vụ',
        'contact': 'Liên hệ',
    }
}

$(function () {
    $('.translate').on('click', function () {
        let lang = $(this).attr('id');
        if (lang.includes('mobi')) {
            lang = lang.replaceAll('_mobi', '');
        }
        sessionStorage.setItem("lang", lang);
        $('.lang').each(function (index, element) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        })
        $('.translate').each(function () {
            const id = $(this).attr('id');
            if (id.includes(lang)) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    });
});