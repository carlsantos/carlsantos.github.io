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
  });

  $(function() {
      $(document).on('click', 'a', function(event) {
          var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
          }, 1500, 'easeInOutExpo');
          event.preventDefault();
      });
  });

});
