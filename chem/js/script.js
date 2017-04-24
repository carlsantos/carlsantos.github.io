$(document).ready(function(){
  $(window).scroll(function(){
    if ($(document).scrollTop() > 100) {
      $('.navbar-default').addClass('navbar2');
    } else {
      $('.navbar-default').removeClass('navbar2');
    }
  });

});
