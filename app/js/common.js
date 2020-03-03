$(function() {

	// tabs
	$("#tabs").tabs();

	// popup
	$(".popup").magnificPopup();

	// mobile menu

	$('.menu__triger').click(function () {

		$('#mobile__menu').slideToggle(500);
	});
	$(window).resize(function () {

		if ($(window).width() > 500) {

			$('#mobile__menu').removeAttr('style');
		}
	});


});


