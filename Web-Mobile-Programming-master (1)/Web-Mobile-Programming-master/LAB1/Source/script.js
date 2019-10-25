$(document).ready(function () {
       $("#login").click(function () {
        $.getJSON('https://api.mlab.com/api/1/databases/tut9/collections/weblab?apiKey=SmaCXoSLpeMEZe-UpnPrgjpC0Wg_H2rZ', {
        }).done(function (data) {
            //console.log(data.length)
            console.log(data);
            console.log($("#loginemail").val());
            var mailId=$('#loginemail')[0].value;
            //export { mailId };
            //amplify.store("key1", "mailId")
            // var globalVariable={
            //     mail: 'mailId'
            //  };
            var myemail=mailId;
            localStorage.setItem("email2",myemail);
            var email2 = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/i);
            console.log($('#loginemail')[0].value);
            console.log($('#loginpassword')[0].value);
            if ($('#loginemail')[0].value == '' || $("#loginpassword")[0].value == '') {
                alert("Please fill all fields...!!!!!!");

            } else if (!($('#loginemail')[0].value).match(email2)) {
                alert("Please enter valid Email...!!!!!!");
            }
            else {
                var login= false;
                for (var i = 0; i < data.length; i++) {
                    if ($('#loginemail')[0].value == data[i].Email && $('#loginpassword')[0].value == data[i].Password) {
                        //alert("You have successfully Logged in...!!!!!!");
                        login = true;
                        location.href = 'home.html';
                        $("form")[0].reset();
                    }
                   
                }
                if(login == false)
                {
                    alert("Email ID or Password is Incorrect.Please try again..!!");
                }


            }
        });
    });
        $("#register").click(function () {
            // $.ajax({
            //     url: "https://api.mlab.com/api/1/databases/tut9/collections/weblab?apiKey=SmaCXoSLpeMEZe-UpnPrgjpC0Wg_H2rZ",
            //     data: JSON.stringify({ "FirstName": fname, "LastName": lname, "Email": email, "Contact": contact, "UserName": username, "Password": password, "Courses": ["Network Architecture", "DAA"] }),
            //     type: "POST",
            //     contentType: "application/json"
            // });
            // alert("You have successfully Sign Up, Now you can login...!!!!!!");
            
            var fname = document.getElementById('fname').value;
            var lname = document.getElementById('lname').value;
            var email = document.getElementById('email').value;
            var username = document.getElementById('uname').value;
            var password = document.getElementById('password').value;
            var contact = document.getElementById('contact').value;
            console.log(fname)
            var email1 = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/i);
            if ($('#uname').val() == '' || $('#email').val() == '' || $('#password').val() == '' || $('#contact').val() == '') {
                alert("Please fill all fields...!!!!!!");
            } else if (!($('#email').val()).match(email1)) {
                alert("Please enter valid Email...!!!!!!");
            } else {
                $.ajax({
                    url: "https://api.mlab.com/api/1/databases/tut9/collections/weblab?apiKey=SmaCXoSLpeMEZe-UpnPrgjpC0Wg_H2rZ",
                    data: JSON.stringify({ "FirstName": fname, "LastName": lname, "Email": email, "Contact": contact, "UserName": username, "Password": password, "Courses": [] }),
                    type: "POST",
                    contentType: "application/json"
                });
                alert("You have successfully Sign Up, Now you can login...!!!!!!");
                $("#form")[0].reset();
                $("#second").slideUp("slow", function () {
                    $("#first").slideDown("slow");
                });
            }
        });
    // On Click SignUp It Will Hide Login Form and Display Registration Form
    $("#signup").click(function () {
        $("#first").slideUp("slow", function () {
            $("#second").slideDown("slow");
        });
    });
    // On Click SignIn It Will Hide Registration Form and Display Login Form
    $("#signin").click(function () {
        $("#second").slideUp("slow", function () {
            $("#first").slideDown("slow");
        });
    });
});