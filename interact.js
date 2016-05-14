$(document).ready(function () {
	$( "#nav-show" ).hide();
	$( "#show" ).click(function() {
		$( "#nav-show" ).slideToggle(200, function() {
		});
	$("i", this).toggleClass("fa-bars fa-times");
	});
});