$(document).ready(function () {
	$( "#nav-show" ).hide();
	$( "#show" ).click(function() {
		$( "#nav-show" ).slideToggle(200, function() {
		});
	$("i", this).toggleClass("fa-bars fa-times");
	});
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({	
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});