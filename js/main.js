$(function() {
	$(window).resize(function(){
		var window_height = $(window).height();

		$('.slide').each(function(index, el) {
			$(this).css('min-height', window_height - 40);
		});

		$('.super-wrap').offset({ top: window_height});
	}).resize();

	// Start Slider
	var slider = $('.slides').bxSlider({
		pager : false,
		nextText: '<span class="icon-arrow-right"></span>',
		prevText: '<span class="icon-arrow-left"></span>',
		randomStart: true,
		auto: true
	})

	// Arrow Key Up/Down Scrolling
	// ---------------------------
	var doc = $("html, body"),
			window_height = $(window).height();

	// Go Up
	function goUp() {
		if($(document).scrollTop() > window_height) {
			doc.animate({ scrollTop: $('.super-wrap').offset().top - 50}, 500);
		} else {
			doc.animate({ scrollTop: 0 }, 500);
		}
		
		return false;
	}
	// Go Down
	function goDown() {
		if(($(document).scrollTop() + 51) > window_height) {
			doc.animate({ scrollTop: $('footer').offset().top - 50}, 500);
		} else {
			doc.animate({ scrollTop: $('.super-wrap').offset().top - 50}, 500);
		}

		return false;
	}

	// Keyboard slider navigation
	$(document).keydown(function(e) {
		switch(e.which) {
		case 37: // left
			slider.goToPrevSlide();
		break;

		case 38: // up
			goUp();
		break;

		case 39: // right
			slider.goToNextSlide();
		break;

		case 40: // down
			goDown();
		break;

		default: return; // exit this handler for other keys
		}
		e.preventDefault(); // prevent the default action (scroll / move caret)
	});

	// Go up to home when clicked
	$('.nav-top li').click(function(event) {
		event.preventDefault();
		doc.animate({ scrollTop: 0 }, 500);
	});

	// Go to about when clicked
	$('#more').click(function(event) {
		event.preventDefault();
		doc.animate({ scrollTop: $('.super-wrap').offset().top - 50}, 500);
	});

	// Flowtype.js
	// -----------
	// For Slider
	$(".slide-content").flowtype({
		fontRatio: 7
	});

	// About Content
	$(".about p").flowtype({
		minFont: 22,
		fontRatio: 31
	});

	// Footer
	$("footer .big").flowtype({
		minFont: 30,
		fontRatio: 15
	});

	$("footer p").flowtype({
		minFont: 22
	});
});