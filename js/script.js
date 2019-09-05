  
$(document).ready(function() {



//wow initialization
new WOW().init();

//forlogo anchor
$('#top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});


//for dopsvideo
$('.play').on('click', function(){
    $('.dopsvideo')[0].play();
    $('.play').css('display', 'none');
})
if ($(".dopsvideo").get(0).played){
    $('.dopsvideo').on('click', function(){
        $(".dopsvideo").get(0).pause();
        $('.play').css('display', '');
    })
}



//when width <770px
if ($(window).width() < 770) {
    $('.rightside').addClass('col-md-12').removeClass('col-md-6');
    $('.leftside').addClass('col-md-12').removeClass('col-md-6');
}





//when fifth section 5vh is in viewport img slide from up
$('.climateaction span.white').on('inview', function(event, isInView) {
    if (isInView) {
        $('section.fourth .today').addClass('active');
        $('section.third .rightside, section.third .leftside').css('margin-top', '-60.5vh');
        $('.tomorrow hr').addClass('active');
    }
  });

  $('section.tenth p.trigger').on('inview', function(event, isInView) {
    if (isInView) {
        $('section.tenth .top, section.tenth .mid, section.tenth .bottom').css('display', 'block');
    }
  });








//when dopsvideo in viewport image slide from right
$('.dopsvideo').on('inview', function(event, isInView) {
    if (isInView) {
        $('.rightside img').addClass('active');
        $('.all h2.white').addClass('active');
    } else {
    }
  });

 
 

 //google earth video play
 $('section.nineth img').on('click', function(){
    $('section.nineth video')[0].play();
    $('section.nineth img.clickableimg').css('opacity', '0');
    $('img.ellipse').css('margin-left', '65%');
})
if ($("section.nineth video").get(0).played){
    $('section.nineth video').on('click', function(){
        $("section.nineth video").get(0).pause();
        $('section.nineth img.clickableimg').css('opacity', '1');
        $('img.ellipse').css('margin-left', '60%');
    })
}
 




});