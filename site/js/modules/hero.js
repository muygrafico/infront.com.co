(function($) {
	$(document).ready(function(){
		initHero();
	});

	function initHero() {
		initSlider();
		initType();
	}

	function initType() {
		var $element = $('.hero-type');
		var rawData = $element.attr('data-copy').split(',');
		var copy = [];
		var colors = [];

		for(var i = 0; i < rawData.length; i++) {
			var temp = rawData[i].split('|');
			copy.push(temp[0]);
			colors.push(temp[1]);
		}

		console.log(copy, colors);

		$(".hero-type").typed({
			'backDelay': 3000,
			'loop': true,
			'strings': copy,
			'typeSpeed': 0,
			'onStringTyped': function() {
				// change to next slide when the string is typed
				// you can change the slide before the string is typed moving nextSlide() function to preStringTyped callback
				// more callbacks here: https://github.com/mattboldt/typed.js/#customization
				nextSlide();
			},
			'preStringTyped': function(index) {
				$element.css('color', colors[index]);
			}
		});
	}

	function initSlider() {
		var images = 0;
		var timeout = null;

		$('.hero-slider').slick({
			'accessibility': false,
			'adaptiveHeight': true,
			'arrows': false,
			'centerMode': true,
			'centerPadding': '0px',
			'cssEase': 'ease-in-out',
			'draggable': false,
			'slidesToShow': 1,
			'swipe': false,
			'variableWidth': true
		});

		$('.hero-slider img').each(function() {
			images++;
			$(this).on('load', function() {
				images--;

				if(images === 0) {
					$('.hero-slider').on('setPosition', function() {
						$('.hero-slider').removeClass('loading');
					});
				}
			});
		});
	}

	function nextSlide() {
		$('.hero-slider').slick('slickNext');
	}
})($);