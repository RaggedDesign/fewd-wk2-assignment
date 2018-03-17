// DOCUMENT READY function

$(document).ready(function() {

// apply PREVENT DEFAULT to anchor tags

$('a').on('click', function(anchor) {
	anchor.preventDefault();
});

// select readmore class on CLICK
	// HIDE
	// NEXT p tag SLIDE DOWN
	// readless class SHOW

$('.readmore').on('click', function() {
	$(this).hide().next('p').slideDown(1000);
	$('.readless').show();
});

// select readless class on CLICK
	// HIDE
	// PREV p tag SLIDE UP
	// readmore class SHOW

$('.readless').on('click', function() {
	$(this).delay(1000).hide(0).prev('p').slideUp(1000);
	$('.readmore').delay(1000).show(0);
});

// select class learnmore on CLICK
	// HIDE
	// span with id learnmoretext SLIDE DOWN

$('.learnmore').on('click', function() {
	$(this).hide();
	$('#learnmoretext').slideDown(1000);
});


});