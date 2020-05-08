var nav = $("nav ul li"); //메뉴 버튼
var cont = $("#contents > div"); //컨텐츠

//nav 버튼을 클릭했을 때
nav.click(function(e){
    e.preventDefault();  //#의 기본 기능을 차단
    var target = $(this);  //클릭한 타겟을 변수에 할당
    var index = target.index(); //클릭한 타겟에 번호를 할당
    var section = cont.eq(index) //클릭한 버튼과 컨텐츠 연결
    var offset = section.offset().top; //각 컨텐츠의 오프셋 값을 할당(top에 위치한 부분이므로 즉 height값)
    $("html, body").animate({scrollTop:offset}, 600, "easeInOutExpo");

});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    if(wScroll >= cont.eq(0).offset().top){
        nav.removeClass("active");
        nav.eq(0).addClass("active");
    }
    if(wScroll >= cont.eq(1).offset().top){
        nav.removeClass("active");
        nav.eq(1).addClass("active");
    }
    if(wScroll >= cont.eq(2).offset().top){
        nav.removeClass("active");
        nav.eq(2).addClass("active");
    }
    if(wScroll >= cont.eq(3).offset().top){
        nav.removeClass("active");
        nav.eq(3).addClass("active");
    }
    if(wScroll >= cont.eq(4).offset().top){
        nav.removeClass("active");
        nav.eq(4).addClass("active");
    }
    if(wScroll >= cont.eq(5).offset().top){
        nav.removeClass("active");
        nav.eq(5).addClass("active");
    }
    
});

$('.mNav').click(function(){
    $('.menu').toggle();
});

$(window).resize(function(){
    var wWidth = $(window).width();
    if( wWidth > 800 && $('.menu').is(":hidden") ){
        $('.menu').removeAttr("style");
    }
});