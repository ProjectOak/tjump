$(document).ready(function () {

	$( "#nav-show" ).hide();
	
	$( "#show, .nav-item" ).click(function () {
		$( "#nav-show" ).slideToggle(200, 'linear');
		$("#nav i").toggleClass("fa-bars fa-times");
	});

	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({	
	        'scrollTop': $target.offset().top - 400,
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
