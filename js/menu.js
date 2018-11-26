$(window).scroll(function () {
    $('.header-panel-bg').stop().animate({
        opacity: $(document).scrollTop() > 50 ? 1 : 0,
    
    }, 500);
    if($(window).scrollTop() > 50){
        $(".header-text").stop().animate({
            color: '#000',
        }, 500);
    } else
    {
         $(".header-text").stop().animate({
            color: '#fff',
        }, 500);
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

/*Скрипт для мобильного меню
после первого клика по бургеру 
второй клик (в любом месте) закрывает меню*/
let every_second_click = 0;
var delay = 500;
$('.menu-icon').click(function(){
    var lastTime = +localStorage.lastTime;
    var nowTime = +new Date();
    if (lastTime && (lastTime + delay > nowTime)) {
            setTimeout(function f(){}, 500);
            return false;
        } else {
           localStorage.lastTime = nowTime;
        }
     $(".menu-hidden").animate({left: '0'},500);
    if (every_second_click != 2) {
        every_second_click = 1;
    }
});

$(document).click(function(){
    if (every_second_click == 2) {
        $(".menu-hidden").animate({left: '-100%'},500);
        every_second_click = 0;
    }
    if (every_second_click == 1) {
        every_second_click++;
    }
});