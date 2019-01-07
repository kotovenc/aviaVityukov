$( document ).ready(function() {
    $('#menu').css("background-color", "rgba(0,0,0,0)");
    $(".header-text").css("color", '#fff');
    $(".header-text").css("backgroundColor", 'rgba(0,0,0,0)');
});

$(window).scroll(function () {
    if($(window).scrollTop() > 50){
        $('.header-panel-bg').stop().animate({
            opacity:1,
        }, 100);
        $(".header-text").stop().animate({
            color: '#000',
            backgroundColor: '#fff',
        }, 200);
         $('.ham-li').stop().animate({
            backgroundColor: '#000',
        }, 100);
    } else
    {
         $(".header-text").stop().animate({
            color: '#fff',
            backgroundColor: 'rgba(0,0,0,0)',
        }, 100);
         $('.header-panel-bg').stop().animate({
            opacity:0,
        }, 500);
         $('.ham-li').stop().animate({
            backgroundColor: '#fff',
        }, 100);
    }

    /*
    var offset = $(document).scrollTop()
    var opacity = 0;
    if (offset <= 0) {
        opacity = 0;
    } else if (offset > 0 & offset <= 200) {
        opacity = (offset - 1) / 200;
    }
    else if (offset > $(document).height() - $(window).height() - 64){
        opacity = 0;
    }
    else {
        opacity = 1;
    }

    $('.header-panel-bg').css('opacity', opacity);
    */
});
