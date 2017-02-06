;(function ($){
	var moreOptionBtn = $('.more-option-btn');
	var moreOptionForm = $('.more-option-form');

	moreOptionBtn.on('click', function () {
		moreOptionForm.slideToggle();
		moreOptionForm.toggleClass ('open');
		moreOptionForm.toggleClass ('open');
	});
})(jQuery);