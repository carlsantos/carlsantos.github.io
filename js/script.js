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

  $('.home-right, .home-right h1, .home-right hr, .home-right p, .home-right .btn').css('opacity', 0);
  $('.home-right, .home-right h1, .home-right hr, .home-right p, .home-right .btn').waypoint(function() {
      $('.home-right, .home-right h1, .home-right hr, .home-right p, .home-right .btn').addClass('fadeIn');
  }, { offset: '80%' });

  $('.home-websites-left, .home-websites-left h2, .home-websites-left hr, .home-websites-left p, .home-websites-left .btn').css('opacity', 0);
  $('.home-websites-left, .home-websites-left h2, .home-websites-left hr, .home-websites-left p, .home-websites-left .btn').waypoint(function() {
      $('.home-websites-left, .home-websites-left h2, .home-websites-left hr, .home-websites-left p, .home-websites-left .btn').addClass('fadeIn');
  }, { offset: '80%' });

  $('.photos-right, .photos-right h2, .photos-right hr, .photos-right p, .photos-right .btn').css('opacity', 0);
  $('.photos-right, .photos-right h2, .photos-right hr, .photos-right p, .photos-right .btn').waypoint(function() {
      $('.photos-right, .photos-right h2, .photos-right hr, .photos-right p, .photos-right .btn').addClass('fadeIn');
  }, { offset: '100%' });

  $('.home-websites .jumbotron').css('opacity', 0);
  $('.home-websites .jumbotron').waypoint(function() {
      $('.home-websites .jumbotron').addClass('fadeInRight');
  }, { offset: '60%' });

  $('.photos-left .jumbotron').css('opacity', 0);
  $('.photos-left .jumbotron').waypoint(function() {
      $('.photos-left .jumbotron').addClass('fadeInLeft');
  }, { offset: '100%' });

  $('.nav-toggle').click(function(){
    $('.navbar').toggle('bounce', 300);
      $('.nav-toggle').toggleClass("glyphicon-remove", 300).toggleClass("glyphicon-menu-hamburger", 300);
    });


});
