/// <reference path="../Views/Home/Main.cshtml" />
$(document).ready(function(){
    $("body").hide();
	$("body").fadeIn("slow");	
	$("#logMessage").hide();
	$.ajaxSetup ({
		cache: false
	});
	var sessionUser = sessionStorage.user;	
	console.log(sessionStorage.user);
	function redirectPage(link) {
        window.location.href = link;
	};

	$("#username").attr("placeholder", "Username");
	$("#password").attr("placeholder", "Password");
	
	
	
	
	$("#submitlogin").click(function(){
		$.ajax({
			url: "/DSSAssets/Home/Login",
			data: {
				user: $("#username").val(),
				pass: $("#password").val()
			 },
			//dataType: "json",
			type: "POST",
			//dataFilter: function (data) { return data; },
			success: function(output)
			{
				if(output == 'true'){
				    sessionUser = $("#username").val();
					sessionStorage.user = sessionUser;
					$("body").fadeOut("slow", redirectPage("/DSSAssets/Home/Main"));
				}else{
					$("#logMessage").hide();
					$("#logMessage").slideDown("fast");
					console.log(output);
				}
			}
		});
		return false;
	});
})