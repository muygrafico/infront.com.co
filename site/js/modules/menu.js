(function($) {
	var $menuIcon = $('.nav-mobile-icon');
	var $menuBox = $('.nav-container');
	var $menuOption = $('.nav-option a');
	var $nav = $('.nav');
	var $preNav = $('.pre-nav');

	smoothScroll.init({
		offset: $nav.height()
	});

	$(window).scroll(checkViewport);

	$menuOption.click(closeMenu);

	$menuIcon.click(toggleMenu);

	function openMenu() {
		$menuIcon.addClass('icon-close').removeClass('icon-hamburguer');
		$menuBox.addClass('is-open');
	}

	function closeMenu() {
		$menuIcon.removeClass('icon-close').addClass('icon-hamburguer');
		$menuBox.removeClass('is-open');
	}

	function toggleMenu() {
		$menuIcon.toggleClass('icon-close').toggleClass('icon-hamburguer');
		$menuBox.toggleClass('is-open');
	}

	function checkViewport() {
		var top = $(window).scrollTop();
		var preNavHeight = $preNav[0].getBoundingClientRect().height;

		if(top > preNavHeight) {
			$nav.addClass('is-fixed');
			$('body').addClass('fixed-nav');
		} else {
			$nav.removeClass('is-fixed');
			$('body').removeClass('fixed-nav');
		}
	}
})($);