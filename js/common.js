jQuery(function ($) {
//    mobile menu
    var $mobileBtnMenu = $('._menu_btn_wrap');
    var $mobileBtn = $mobileBtnMenu.find('button._menu_btn');
    var $mobileMenuWrap = $('._mobile_menu_wrap');
    $mobileBtn.on('click', function () {
        if ($(this).hasClass('_open_btn')) {
            $(this).fadeOut(function () {
                $(this).siblings().fadeIn();
            });
            $mobileMenuWrap.animate({
                marginRight: 0
            });
        } else {
            $(this).fadeOut(function () {
                $(this).siblings().fadeIn();
            });
            $mobileMenuWrap.animate({
                marginRight: -60 + '%'
            });
        }
    });
})
