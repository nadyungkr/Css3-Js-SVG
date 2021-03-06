var dot = $("#dot > ul > li");
var nav = $("nav ul li");
var cont = $("#contents > div");

dot.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    //alert(index);
    var section = cont.eq(index);
    var offset = section.offset().top;
    $("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
});
nav.click(function(e){
    e.preventDefault();
    var target = $(this);
    var index = target.index();
    //alert(index);
    var section = cont.eq(index);
    var offset = section.offset().top;
    $("html,body").animate({ scrollTop:offset },600,"easeInOutExpo");
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    if ( wScroll > 200 ) {
        $("#nav").addClass("on");
    } else if ( wScroll == 0 ) {
        $("#nav").removeClass("on");
    }
    
    if(wScroll >= cont.eq(0).offset().top){
        dot.removeClass("active");
        dot.eq(0).addClass("active");
        nav.removeClass("active");
        nav.eq(0).addClass("active");
    }
    if(wScroll >= cont.eq(1).offset().top){
        dot.removeClass("active");
        dot.eq(1).addClass("active");
        nav.removeClass("active");
        nav.eq(1).addClass("active");
    }
    if(wScroll >= cont.eq(2).offset().top){
        dot.removeClass("active");
        dot.eq(2).addClass("active");
        nav.removeClass("active");
        nav.eq(2).addClass("active");
    }
    if(wScroll >= cont.eq(3).offset().top){
        dot.removeClass("active");
        dot.eq(3).addClass("active");
        nav.removeClass("active");
        nav.eq(3).addClass("active");
    }
    if(wScroll >= cont.eq(4).offset().top){
        dot.removeClass("active");
        dot.eq(4).addClass("active");
        nav.removeClass("active");
        nav.eq(4).addClass("active");
    }
    if(wScroll >= cont.eq(5).offset().top){
        dot.removeClass("active");
        dot.eq(5).addClass("active");
        nav.removeClass("active");
        nav.eq(5).addClass("active");
    }
    /*text animation*/
    //offset top값보다 조금더 작은 값을 줘서 텍스트가 더 빨리보이게 하기
    if(wScroll >= cont.eq(0).offset().top){
        cont.eq(0).addClass("show");
    }
    if(wScroll >= cont.eq(1).offset().top - $(window).height()/3){
        cont.eq(1).addClass("show");
    }
    if(wScroll >= cont.eq(2).offset().top - $(window).height()/3){
        cont.eq(2).addClass("show");
    }
    if(wScroll >= cont.eq(3).offset().top - $(window).height()/3){
        cont.eq(3).addClass("show");
    }
    if(wScroll >= cont.eq(4).offset().top - $(window).height()/3){
        cont.eq(4).addClass("show");
    }
    if(wScroll >= cont.eq(5).offset().top - $(window).height()/3){
        cont.eq(5).addClass("show");
    } 
});

/* toggle menu */
$('.mNav').click(function(){
    $('.menu').toggle();
});

/*responsive*/
$(window).resize(function(){
    var wWidth = $(window).width();
    if( wWidth > 800 && $('.menu').is(":hidden") ){
        $('.menu').removeAttr("style");
    }
});