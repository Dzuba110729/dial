$(function () {
	$('.header__menu-btn, .footer__menu-btn').on('click', function () {
		$('.header__menu ul, .footer__menu ul').slideToggle();
	});
});