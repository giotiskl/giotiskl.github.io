$(document).ready(function() {
	
	var snapper = $('.snap-container').gridSnapIt({
		'filterOutCss': {
			'opacity': 0,
			'transform': 'scale(0,0) rotate(30deg)'
		},
		'filterInCss': {
			'opacity': 1,
			'transform': 'scale(1,1) rotate(0)'
		}
	});

});
