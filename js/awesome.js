// JavaScript Document// JavaScript Document

$(document).ready(function (ev) {
		
		
		$('#form').submit(function(ev) {
		ev.preventDefault();
		if ($('#menu option:selected').val() == "border") { 
				$('#circle').css("border-color", $('#change').val());
	
		}
		if ($('#menu option:selected').val() == "background") {
				$('#circle').css("background-color", $('#change').val());
	
		}
		if ($('#menu option:selected').val() == "color") {
				$('#circle').css("color", $('#change').val());
	
		}
		
		});
	
		$('#reset').click(function(ev) {
		ev.preventDefault();
				$('#circle').toggle(1500);

		});
	  
});