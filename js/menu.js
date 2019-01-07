$( document ).ready(function() {
    
    if (window.innerWidth > 500) {
        $('#menu').css("background-color", "rgba(0,0,0,0)");
        $(".header-text").css("color", '#fff');
        $(".header-text").css("backgroundColor", 'rgba(0,0,0,0)');
    } else{
        //$('#menu').css("background-color", "rgba(255,255,255,1)");
        $(".header-text").css("color", '#000');
        $(".header-text").css("backgroundColor", 'rgba(255,255,255,1)');
    }
});

 $(window).resize(function() {
    if (window.innerWidth > 500 && $(window).scrollTop() < 50) {
        $('#menu').css("background-color", "rgba(0,0,0,0)");
        $(".header-text").css("color", '#fff');
        $(".header-text").css("backgroundColor", 'rgba(0,0,0,0)');
    } else{
        //$('#menu').css("background-color", "rgba(255,255,255,1)");
        $(".header-text").css("color", '#000');
        $(".header-text").css("backgroundColor", 'rgba(255,255,255,1)');
    }
});

$(window).scroll(function () {
    if($(window).scrollTop() > 50){
        $(".header-panel-bg").css("opacity", "1");
        if (window.innerWidth > 500) {
            $(".header-text").css("color", '#000');
            $(".header-text").css("backgroundColor", '#fff');
        }
         $('.ham-li').css("backgroundColor", '#000');
    } else
    {
        if (window.innerWidth > 500) {
         $(".header-text").css("color", '#fff');
        $(".header-text").css("backgroundColor", 'rgba(0,0,0,0)');
        }
         $(".header-panel-bg").css("opacity", "0");
          $('.ham-li').css("backgroundColor", '#fff');
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
