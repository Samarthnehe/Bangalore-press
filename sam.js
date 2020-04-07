window.addEventListener("DOMContentLoaded", function(e) {

    var stage = document.getElementById("stage");
    var fadeComplete = function(e) { stage.appendChild(arr[0]); };
    var arr = stage.getElementsByTagName("a");
    for(var i=0; i < arr.length; i++) {
    arr[i].addEventListener("animationend", fadeComplete, false);
    }

    }, false);

    window.onscroll = function() {myFunction()};

    var sam = document.getElementById("stage")
    var header = document.getElementById("samarth");
    var sticky = header.offsetTop;

    function myFunction() {
    if (window.pageYOffset > sticky ){
        header.classList.add("sticky");
        sam.classList.add("sticky1");

    } else {
        header.classList.remove("sticky");
    }
    }

    document.getElementById("contactForm").onsubmit = function () {
        var x = document.forms["contactForm"]["name"].value;
        var y = document.forms["contactForm"]["email"].value;
        var z = document.forms["contactForm"]["phone"].value;
        var a = document.forms["contactForm"]["address1"].value;
        var b = document.forms["contactForm"]["subj"].value;
        var c = document.forms["contactForm"]["mess"].value;

        var submit = true;

        if (x == null || x == "") {
            nameError = "Please enter your name";
            document.getElementById("name_error").innerHTML = nameError;
            document.getElementById("name_error").style.color = red;
            submit = false;
        }
        if (y == null || y == "") {
            emailError = "Please enter your email";
            document.getElementById("email_error").innerHTML = emailError;
            document.getElementById("email_error").style.color = red;
            submit = false;
        }
        if (z == null || z == "") {
            telephoneError = "Please enter your phone number";
            document.getElementById("phone_error").innerHTML = telephoneError;
            document.getElementById("phone_error").style.color = red;
            submit = false;
        }
        if (a == null || a == "") {
            addressError = "Please enter your address";
            document.getElementById("address_error").innerHTML = addressError;
            document.getElementById("address_error").style.color = red;
            submit = false;
        }
        if (b == null || b == "") {
            subjectError = "Please enter your subject";
            document.getElementById("subject_error").innerHTML = subjectError;
            document.getElementById("subject_error").style.color = red;
            submit = false;
        }
        if (c == null || c == "") {
            messageError = "Please enter your message";
            document.getElementById("message_error").innerHTML = messageError;
            document.getElementById("message_error").style.color = red;
            submit = false;
        }
        return submit;

    }
    function removeWarning() {
        document.getElementById(this.id + "_error").innerHTML = "";
    }
    document.getElementById("name").onkeyup = removeWarning;
    document.getElementById("email").onkeyup = removeWarning;
    document.getElementById("phone").onkeyup = removeWarning;
    document.getElementById("address").onkeyup = removeWarning;
    document.getElementById("subject").onkeyup = removeWarning;
    document.getElementById("textbox").onkeyup = removeWarning;