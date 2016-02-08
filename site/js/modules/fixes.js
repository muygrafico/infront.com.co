(function () {

	adjustBoxes();

	$(window).resize(adjustBoxes);

	function adjustBoxes() {
		var $boxes = $('.hiw-box.fix-height');
		var height = 0;

		$boxes.each(function() {
			if(this.getBoundingClientRect().height > height) {
				height = this.getBoundingClientRect().height;
			}
		});

		$boxes.height(height);
	}
})($);