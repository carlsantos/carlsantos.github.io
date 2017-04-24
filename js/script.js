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

  /*    NAVBAR TOGGLE   */
  $('.nav-toggle').click(function(){
    $('.navbar').toggle('puff', 300);
      $('.nav-toggle').toggleClass("glyphicon-remove", 300, "easeOutSine").toggleClass("glyphicon-menu-hamburger", 300, "easeOutSine");
    });

  /*    NAVBAR    */
  $('ul .home-link a').mouseenter(function(){
      $('.about-link a, .works-link a, .contact-link a').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('ul .home-link a').mouseleave(function(){
      $('.about-link a, .works-link a, .contact-link a').css({"opacity" : "1"});
  });
  $('ul .about-link a').mouseenter(function(){
      $('.home-link a, .works-link a, .contact-link a').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('ul .about-link a').mouseleave(function(){
      $('.home-link a, .works-link a, .contact-link a').css({"opacity" : "1"});
  });
  $('ul .works-link a').mouseenter(function(){
      $('.home-link a, .about-link a, .contact-link a').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('ul .works-link a').mouseleave(function(){
      $('.home-link a, .about-link a, .contact-link a').css({"opacity" : "1"});
  });
  $('ul .contact-link a').mouseenter(function(){
      $('.home-link a, .works-link a, .about-link a').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('ul .contact-link a').mouseleave(function(){
      $('.home-link a, .works-link a, .about-link a').css({"opacity" : "1"});
  });



  $('.fa-facebook').mouseenter(function(){
      $('.fa-twitter, .fa-instagram, .fa-linkedin').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('.fa-facebook').mouseleave(function(){
      $('.fa-twitter, .fa-instagram, .fa-linkedin').css({"opacity" : "1"});
  });
  $('.fa-twitter').mouseenter(function(){
      $('.fa-facebook, .fa-instagram, .fa-linkedin').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('.fa-twitter').mouseleave(function(){
      $('.fa-facebook, .fa-instagram, .fa-linkedin').css({"opacity" : "1"});
  });
  $('.fa-instagram').mouseenter(function(){
      $('.fa-twitter, .fa-facebook, .fa-linkedin').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('.fa-instagram').mouseleave(function(){
      $('.fa-twitter, .fa-facebook, .fa-linkedin').css({"opacity" : "1"});
  });
  $('.fa-linkedin').mouseenter(function(){
      $('.fa-twitter, .fa-facebook, .fa-instagram').css({"opacity" : ".3", "transition" : ".3s"});
  });
  $('.fa-linkedin').mouseleave(function(){
      $('.fa-twitter, .fa-facebook, .fa-instagram').css({"opacity" : "1"});
  });




  /*   ANIMATE   */
  /**       HOME          **/
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
  }, { offset: '80%' });

  $('.home-websites .jumbotron').css('opacity', 0);
  $('.home-websites .jumbotron').waypoint(function() {
      $('.home-websites .jumbotron').addClass('fadeInRight');
  }, { offset: '60%' });

  $('.photos-left .jumbotron').css('opacity', 0);
  $('.photos-left .jumbotron').waypoint(function() {
      $('.photos-left .jumbotron').addClass('fadeInLeft');
  }, { offset: '60%' });

  $('.home-link, .about-link, .works-link, .contact-link').css('opacity', 0);
  $('.home-link, .about-link, .works-link, .contact-link').waypoint(function() {
      $('.home-link, .about-link, .works-link, .contact-link').addClass('fadeIn');
  }, { offset: '100%' });

  /**       ABOUT       **/

  $('.services h2, .services hr, .services-icons div').css('opacity', 0);
  $('.services h2, .services hr, .services-icons div').waypoint(function() {
      $('.services h2, .services hr, .services-icons div').addClass('fadeInUp');
  }, { offset: '50%' });

  $('.skills h2, .skills hr, .skillset i, .skillset h4, .skillset2 i, .skillset2 h4').css('opacity', 0);
  $('.skills h2, .skills hr, .skillset i, .skillset h4, .skillset2 i, .skillset2 h4').waypoint(function() {
      $('.skills h2, .skills hr, .skillset i, .skillset h4, .skillset2 i, .skillset2 h4').addClass('fadeInUp');
  }, { offset: '50%' });

  $('.photography h2').css('opacity', 0);
  $('.photography h2').waypoint(function() {
      $('.photography h2').addClass('fadeInUp');
  }, { offset: '50%' });

  $('.photog1 img, .photog1 h4, .photog1 p').css('opacity', 0);
  $('.photog1 img, .photog1 h4, .photog1 p').waypoint(function() {
      $('.photog1 img, .photog1 h4, .photog1 p').addClass('fadeInUp');
  }, { offset: '50%' });

  $('.photog2 img, .photog2 h4, .photog2 p').css('opacity', 0);
  $('.photog2 img, .photog2 h4, .photog2 p').waypoint(function() {
      $('.photog2 img, .photog2 h4, .photog2 p').addClass('fadeInUp');
  }, { offset: '50%' });

  /*$(document).on('scroll', function(){
    var curScrollPos = $(document).scrollTop();
    $('.photography').css('background-position', '0' + curScrollPos/-4 + 'px');
  });*/


});
