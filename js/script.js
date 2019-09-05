  
$(document).ready(function() {



//wow initialization
new WOW().init();

//forlogo anchor
$('#top').on("click",function() {
    $('body').animate({ scrollTop: 0 }, 'slow');
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


//or this function

// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     console.log(scroll);
//     var h = $(window).height(); 
//     if (scroll >= 1642) { 
//         function go(){
//             $('section.fourth .today').addClass('active');
//             $('section.third .rightside, section.third .leftside').css('margin-top', '-60.5vh');
//           }
//           setTimeout(go, 1000);   
//     }
//     if (scroll >= 1642) { 
//         $('.tomorrow hr').addClass('active');
//     }
    
//    })











//when dopsvideo in viewport image slide from right
$('.dopsvideo').on('inview', function(event, isInView) {
    if (isInView) {
        $('.rightside img').addClass('active');
        $('.all h2.white').addClass('active');
    } else {
    }
  });


  //or this function

// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     console.log(scroll);
//     var h = $(window).height(); 
//     if (scroll >= 1500) { 
//         $('.rightside img').addClass('active');
//         $('.all h2.white').addClass('active');
//     }
//    })



//scrollify function
if($(window).innerWidth() >= 600) {
    $(function() {
        $.scrollify({
            section : ".section",
            scrollSpeed: 1300,
            scrollbars: false,
            touchScroll: true,
            setHeights: false,
            easing: "easeOutQuart",
            // interstitialSection : ".fourth, .third, .sixth, .fifth, .seventh"
        });
    });
 }
 
 

 //google earth video play
 $('section.nineth img').on('click', function(){
    $('section.nineth video')[0].play();
    $('section.nineth img.clickableimg').css('opacity', '0');
    $('img.ellipse').css('margin-left', '65%');
})
 

//upslide googlevideo
// $('section.nineth img').on('inview', function(event, isInView) {
//     if (isInView) {
//         $('section.section.eight ').css('margin-bottom', '50vh');
//     } else {
//     }
//   });


//last video click
// function play(event) {
//     var noRedirect = '.play, #video, .dopsvideo, .dops *';
//     if (!event.target.matches(noRedirect)) {
//         $('.clickableimg').css('display', 'none');
//         $('#videoPlayer').get(0).play();
//     }
//   };
//   document.body.addEventListener('click', play);

});