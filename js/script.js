$(document).ready(function(){
  var color1 = "", color2 = "#fff";
  $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $('.nav-toggle').css({"background-color" : "#202020"});
      color1 = "#fff";
    } else{
      $('.glyphicon-menu-hamburger').css({"background-color" : "transparent"});
      $('.glyphicon-remove').css({"color" : "#fff", "background-color" : "#202020"});
    }
  });
  /*    NAVBAR    */
  $('.home-link a').mouseenter(function(){
      $('.about-link, .works-link, .contact-link').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('.home-link a').mouseleave(function(){
      $('.about-link, .works-link, .contact-link').css({"opacity" : "1"});
  });
  $('.about-link a').mouseenter(function(){
      $('.home-link, .works-link, .contact-link').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('.about-link a').mouseleave(function(){
      $('.home-link, .works-link, .contact-link').css({"opacity" : "1"});
  });
  $('.works-link a').mouseenter(function(){
      $('.home-link, .about-link, .contact-link').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('.works-link a').mouseleave(function(){
      $('.home-link, .about-link, .contact-link').css({"opacity" : "1"});
  });
  $('.contact-link a').mouseenter(function(){
      $('.home-link, .works-link, .about-link').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('.contact-link a').mouseleave(function(){
      $('.home-link, .works-link, .about-link').css({"opacity" : "1"});
  });
  $('.fa-facebook').mouseenter(function(){
      $('.fa-twitter, .fa-instagram').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('.fa-facebook').mouseleave(function(){
      $('.fa-twitter, .fa-instagram').css({"opacity" : "1"});
  });
  $('.fa-twitter').mouseenter(function(){
      $('.fa-facebook, .fa-instagram').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('.fa-twitter').mouseleave(function(){
      $('.fa-facebook, .fa-instagram').css({"opacity" : "1"});
  });
  $('.fa-instagram').mouseenter(function(){
      $('.fa-twitter, .fa-facebook').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('.fa-instagram').mouseleave(function(){
      $('.fa-twitter, .fa-facebook').css({"opacity" : "1"});
  });


  /*   ANIMATE   */
  $('.home-right, .home-right h1, .home-right hr, .home-right p, .home-right .btn').css('opacity', 0);
  $('.home-right, .home-right h1, .home-right hr, .home-right p, .home-right .btn').waypoint(function() {
      $('.home-right, .home-right h1, .home-right hr, .home-right p, .home-right .btn').addClass('fadeIn');
  }, { offset: '60%' });

  $('.home-websites-left, .home-websites-left h2, .home-websites-left hr, .home-websites-left p, .home-websites-left .btn').css('opacity', 0);
  $('.home-websites-left, .home-websites-left h2, .home-websites-left hr, .home-websites-left p, .home-websites-left .btn').waypoint(function() {
      $('.home-websites-left, .home-websites-left h2, .home-websites-left hr, .home-websites-left p, .home-websites-left .btn').addClass('fadeIn');
  }, { offset: '60%' });

  $('.photos-right, .photos-right h2, .photos-right hr, .photos-right p, .photos-right .btn').css('opacity', 0);
  $('.photos-right, .photos-right h2, .photos-right hr, .photos-right p, .photos-right .btn').waypoint(function() {
      $('.photos-right, .photos-right h2, .photos-right hr, .photos-right p, .photos-right .btn').addClass('fadeIn');
  }, { offset: '60%' });

  $('.home-websites .jumbotron').css('opacity', 0);
  $('.home-websites .jumbotron').waypoint(function() {
      $('.home-websites .jumbotron').addClass('fadeInRight');
  }, { offset: '60%' });

  $('.photos-left .jumbotron').css('opacity', 0);
  $('.photos-left .jumbotron').waypoint(function() {
      $('.photos-left .jumbotron').addClass('fadeInLeft');
  }, { offset: '60%' });

  /*    NAVBAR TOGGLE   */
  $('.nav-toggle').click(function(){
    $('.navbar').toggle('puff', 300);
      $('.nav-toggle').toggleClass("glyphicon-remove", 300).toggleClass("glyphicon-menu-hamburger", 300);
    });


});
