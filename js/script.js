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


    

if ($(window).width() < 770) {
    $('.rightside').addClass('col-md-12').removeClass('col-md-6');
    $('.leftside').addClass('col-md-12').removeClass('col-md-6');
}
  
    
        


$(window).scroll(function() {
     var scroll = $(window).scrollTop();
     console.log(scroll);
     var h = $(window).height(); 
     if (scroll >= 1500) { 
         $('.rightside img').addClass('active');
         $('.all h2.white').addClass('active');
     }
    })

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        var h = $(window).height(); 
        if (scroll >= 1642) { 
            function go(){
                $('section.fourth .today').addClass('active');
                $('section.third .rightside, section.third .leftside').css('margin-top', '-60.5vh');
              }
              setTimeout(go, 1000);   
        }
        if (scroll >= 1642) { 
            $('.tomorrow hr').addClass('active');
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