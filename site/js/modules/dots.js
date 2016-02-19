(function($) {
	var $sections = $('.section');
	var $dots = $('.dots');
	var timeout;

	function init() {
		$sections.each(function() {
			createDot(this);
		});

		$dots.find('.dot:first-child').addClass('is-activate');

		timeout = setTimeout(function() {
			$dots.addClass('initialized');
			clearTimeout(timeout);
		}, 500);
		
		$(window).on('scroll', function() {
			var $current = $('.section:in-viewport(100)');
			if($current.length > 0) {
				activateDot($current);
			}
		});
	}

	function createDot(section) {
		var id = $(section).attr('id');
		var $dot = $('<a />', {'data-id': id, 'class': 'dot', 'href': '#' + id, 'data-scroll': true});
		$dots.append($dot);
	}

	function activateDot($current) {
		var id = $current.attr('id');
		$('.dot').removeClass('is-activate');
		$('.dot[data-id="' + id + '"]').addClass('is-activate');
	}

	init();


})($);