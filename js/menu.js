$(document).ready(function(){
	// Definiendo Variables
	var rock_menu = $('.rock_menu'),
		menu = $('#menu');

	// EVENTOS
	rock_menu.click(function(){
		menu.slideToggle();
	});
});