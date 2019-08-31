// const sections = [...document.getElementsByTagName('section')];
// let currentSection = 0;

// window.addEventListener('wheel', function(e) {
//   e.preventDefault();

//   (e.deltaY < 0) ? --currentSection: ++currentSection;

//   if (currentSection < 0) currentSection = 0;
//   else if (currentSection > (sections.length - 1)) currentSection = (sections.length - 1);

//   scrollToSection(currentSection);
// });

// function scrollToSection(i) {
//   document.getElementById(sections[i].id).scrollIntoView({
//     behavior: 'smooth'
//   });
// }

    
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
$('section.fifth').on('inview', function(event, isInView) {
    if (isInView) {
        $('section.fourth .today').addClass('active');
        $('section.third .rightside, section.third .leftside').css('margin-top', '-60.5vh');
        $('.tomorrow hr').addClass('active');
    } else {
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
            scrollSpeed: 2000,
            scrollbars: false,
            touchScroll: true,
            easing: "easeInOutCubic",
            interstitialSection : ".fourth, .third, .sixth, .fifth, .seventh"
        });
    });
 } 
 

});