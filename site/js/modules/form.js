(function($) {
	var $inputs = $('input');

	$inputs.on('keypress', checkInput);

	function checkInput(event) {
		$(event.target).addClass('dirty');
		console.log($(event.target).hasClass('dirty'));
	}
})($);

