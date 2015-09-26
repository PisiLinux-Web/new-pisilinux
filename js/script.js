$(document).ready(function(){
	// Dialog
	var user;
	var email;
	var message;
	
	$("#button-send").on("click", function(){
		$("#contact-dialog").on("hide.bs.modal", function(){
			user = $("#name").val();
			email = $("#email").val();
			message = $("#message").val();
		});
		$("#contact-dialog").one("hidden.bs.modal", function(){
			// Send POST data to a URL and return. Use user, email, message variables.
			user=null;email=null;message=null;
			$("#sent-dialog").modal("show");
		});
	});
	
	$(document).mouseover(function(){
		// Needed for chromium webkit renderer to reset right padding of the whole page.
		// Bug appears on Opera, Chrome, Chromium | Not: Firefox
		// See: http://stackoverflow.com/q/32797159/2926992
		$("body").css("padding-right", "0");
	});
});
