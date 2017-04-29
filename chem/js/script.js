$(document).ready(function(){
  $(window).scroll(function(){
    if ($(document).scrollTop() > 200) {
      $('.navbar-default').addClass('navbar2');
    } else {
      $('.navbar-default').removeClass('navbar2');
    }
  });
  AOS.init({
    duration: 1500,
  })
});
