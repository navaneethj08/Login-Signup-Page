$(window).on("hashchange", function() {
    if(location.hash.slice(1)=="signup") {
        $(".page").addClass("extend");
        $("#login").removeClass("active");
        $("#signup").addClass("active");
    } else {
        $(".page").removeClass("extend");
        $("#login").addClass("active");
        $("#signup").removeClass("active");
    }
});
$(window).trigger("hashchange");

function validateLoginForm() {
	var name = document.getElementById("loginName").value;
	var password = document.getElementById("loginPassword").value;

	if (name == "" || password == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must be atleast 8 characters"
		return false;
	}
	else {
		alert("You have been successfully logged in!");
		return true;
	}
}

function validateSignupForm() {
	var mail = document.getElementById("signupEmail").value;
	var name = document.getElementById("signupName").value;
	var password = document.getElementById("signupPw").value;
	var password2 = document.getElementById("signupPw2").value;

	if (mail == "" || name == "" || password == "" || password2 == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

	else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must be atleast 8 characters"
		return false;
	}

    else if (password != password2) {
        document.getElementById("errorMsg").innerHTML = "Passwords does not match"
        return false;
    }
	else {
		alert("You have been successfully signed up!");
		return true;
	}
}