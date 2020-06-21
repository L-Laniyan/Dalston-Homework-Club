//$("h1").css("color", "red");
// $('li').attr('tabindex','0').focus();
// $(document).ready(function(){
//
//   $(window).scroll(function(){
//
//     if($(window).scrollTop()>300){
//       $('navigation').addClass('red');
//   }else{
//     $('navigation').removeClass('red');
//   })
// });
// });

var nav = document.getElementById('nav');
var navList = document.querySelector('ul.navigation__list'); 
//var navLink = document.querySelector('.navigation__link'); 
window.onscroll = function(){
  if(window.pageYOffset >800) {
    nav.style.background = "rgba(0, 0, 0, 0.1)";
    nav.style.borderBottom = "solid";
    nav.style.color = "yellow";
      navList.classList.add("nav_list");
    //  navLink.classList.add("nav_link");
  }
  else if (window.pageYOffset <800){
      nav.style.background = "white";
      nav.style.border = "none";
      navList.classList.remove("nav_list");
  }
}
