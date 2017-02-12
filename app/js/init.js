
$('.services-slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: true,
  autoplaySpeed: 2000,
  responsive:[
  	{
  		breakpoint: 959,
  		settings:{
  			slidesToShow: 3,
  		}
  	},
  	{
  		breakpoint: 479,
  		settings:{
  			slidesToShow: 1,
  		}
  	},
  ]
});

//init formstyler


(function($) {
	$(function() {

  $('select').styler();

});
})(jQuery);