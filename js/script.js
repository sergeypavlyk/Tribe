const sections = [...document.getElementsByTagName('section')];
let currentSection = 0;

window.addEventListener('wheel', function(e) {
  e.preventDefault();

  (e.deltaY < 0) ? --currentSection: ++currentSection;

  if (currentSection < 0) currentSection = 0;
  else if (currentSection > (sections.length - 1)) currentSection = (sections.length - 1);

  scrollToSection(currentSection);
});

function scrollToSection(i) {
  document.getElementById(sections[i].id).scrollIntoView({
    behavior: 'smooth'
  });
}


$(document).ready(function() {
new WOW().init();

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 400);
    return false;
});
});