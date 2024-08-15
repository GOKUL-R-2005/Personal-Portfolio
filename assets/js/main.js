
function sendMail() {
  window.location.href = "mailto:gokulr20005@gmail.com?subject=This is my subject&body=This is my body";
  setTimeout(function() {
    
  })
}
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}
var typingEffect = new Typed(".typedText",{
  strings : ["WEB DESIGNER","PROGRAMMER"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
})

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name')
sr.reveal('.featured-text-info')
sr.reveal('.featured-text-btn')
sr.reveal('.social_icons')
sr.reveal('.featured-image')
sr.reveal('.project-box')
sr.reveal('.top-header',{})
const srLeft = ScrollReveal({
origin: 'left',
reset: true
})

srLeft.reveal('.about-info')
srLeft.reveal('.contact-info')
const srRight = ScrollReveal({
origin: 'right',
reset: true
})

srRight.reveal('.skills-box')
srRight.reveal('.form-control')
const sections = document.querySelectorAll('section[id]')
function scrollActive() {
const scrollY = window.scrollY;
sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

let lastScrollTop = 0;
const navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = "-80px"; // Hide the navbar (adjust this value to match your navbar's height)
    } else {
        // Scrolling up
        navbar.style.top = "0"; // Show the navbar
    }

    lastScrollTop = scrollTop;
});

