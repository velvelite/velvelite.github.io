// $('.menu-toggle').click(function() {
  
//     $('.site-nav').toggleClass('site-nav--open', 500);
//     $(this).toggleClass('open');
    
//   })

const primaryNav = document.querySelector('.primary-navigation');
const menuToggle = document.querySelector('.menu-toggle');


menuToggle.addEventListener('click', () => {
    const navIsVisible = primaryNav.getAttribute("data-visible");
    console.log(navIsVisible);
    if(navIsVisible === "false"){
        primaryNav.setAttribute("data-visible", true);
        menuToggle.setAttribute("nav-opened", true);
    } else if(navIsVisible === "true") {
        primaryNav.setAttribute("data-visible", false);
        menuToggle.setAttribute("nav-opened", false);
    }
});