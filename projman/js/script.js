$(document).ready(function(){
	
	$(window).scroll(function() {
	    if($(document).scrollTop() > 100) {
	      $('#navbar').addClass("navbar2");
	    }
		else {
		  $('#navbar').removeClass("navbar2");
		}
  	});

$("#a, #b, #c, #d, #e").on('click', function(event) {
	if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 450, function(){
		window.location.hash = hash;
		});
	}
});

  	/*  ANIMATIONS  */
	$('.about-cont').css('opacity', 0);
	  $('.about-cont').waypoint(function() {
	      $('.about-cont').addClass('fadeInUp');
	  }, { offset: '60%' });

	$('.vm, .pic-slider').css('opacity', 0);
	  $('.vm, .pic-slider').waypoint(function() {
	      $('.vm, .pic-slider').addClass('animated fadeIn');
	  }, { offset: '60%' });  

	$('.facility h2').css('opacity', 0);
	  $('.facility h2').waypoint(function() {
	      $('.facility h2').addClass('fadeInUp');
	  }, { offset: '60%' });
	
	$('.facility p').css('opacity', 0);
	  $('.facility p').waypoint(function() {
	      $('.facility p').addClass('fadeInDown');
	  }, { offset: '60%' });

	$('form').css('opacity', 0);
	  $('form').waypoint(function() {
	      $('form').addClass('fadeInUp');
	  }, { offset: '80%' });

	$('.wrap').css('opacity', 0);
	  $('.wrap').waypoint(function() {
	      $('.wrap').addClass('fadeInUp');
	  }, { offset: '80%' });
	   
	$('.social h2, .social-media1, .social-media2, .social-media3').css('opacity', 0);
	  $('.social h2, .social-media1, .social-media2, .social-media3').waypoint(function() {
	      $('.social h2, .social-media1, .social-media2, .social-media3').addClass('fadeInUp');
	  }, { offset: '80%' });    

/*	$(document).on('scroll', function(){

    var curScrollPos = $(document).scrollTop();

    $('.facility').css('background-position', '0' + curScrollPos/1 + 'px');
  });  */

});