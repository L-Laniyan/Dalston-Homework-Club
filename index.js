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
window.onscroll = function(){
  if(window.pageYOffset >800) {
    nav.style.background = "transparent";
    nav.style.border = "solid ";
    document.querySelector('.navigation__nav').style.color = "black";
  }
  else if (window.pageYOffset <800){
    nav.style.background = "white";
    nav.style.border = "none";
  }
}
