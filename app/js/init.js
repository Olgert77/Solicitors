
$('.services-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: true,
  autoplaySpeed: 2000,
  responsive:[
  	{
  		breakpoint: 959,
  		settings:{
  			slidesToShow: 4,
  		}
  	},
    {
      breakpoint: 767,
      settings:{
        slidesToShow: 3,
      }
    },
  	{
  		breakpoint: 539,
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

// sliknav menu

$(function(){
  $('.header-nav').slicknav({
    label: '',
    prependTo: '.header .container',
  });
});
