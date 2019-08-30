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


$(window).scroll(function() {
     var scroll = $(window).scrollTop();
     console.log(scroll);
     var h = $(window).height(); 
     if (scroll >= 1500) { 
         $('.rightside img').addClass('active');
         $('.all h2.white').addClass('active');
     }
    })

$(document).ready(function() {

new WOW().init();

$('#top').on("click",function() {
    $('body').animate({ scrollTop: 0 }, 'slow');
});

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

});