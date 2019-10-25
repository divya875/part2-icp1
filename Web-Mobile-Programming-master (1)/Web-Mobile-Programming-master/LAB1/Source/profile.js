var data1;
var id1;
$(document).ready(function () {

    var mailId1 = localStorage.getItem("email2");
    if (mailId1 == null) {
        window.location.href = "index.html";
    }
    var m;
    $.getJSON('https://api.mlab.com/api/1/databases/tut9/collections/weblab?apiKey=SmaCXoSLpeMEZe-UpnPrgjpC0Wg_H2rZ', {
    }).done(function (data) {
        data1 = data;
        console.log(data1)
        var mailId1 = localStorage.getItem("email2");
        var j = 0;

        for (j = 0; j < data1.length; j++) {
            if (mailId1 == data1[j].Email) {
                m = j;
                console.log(m)
            }
        }

        id1 = data1[m]._id.$oid;
        list = "";
        list = "<table border='1' style='width:80%; background:white; margin:0;cellspacing:0;border-collapse: collapse;border: 1px solid black;'>";
        list += "<tr>";

        list += "<td>" + "First Name" + "</td>";
        list += "<td contenteditable='true' class='profiledata' id='fname'>" + data1[m].FirstName + "</td>";

        list += "</tr>";
        list += "<tr>";

        list += "<td>" + "Last Name" + "</td>";
        list += "<td contenteditable='true' class='profiledata' id='lname'>" + data1[m].LastName + "</td>";

        list += "</tr>";
        list += "<tr>";

        list += "<td>" + "Email" + "</td>";
        list += "<td id='email'>" + data1[m].Email + "</td>";

        list += "</tr>";
        list += "<tr>";

        list += "<td>" + "Contact" + "</td>";
        list += "<td contenteditable='true' class='profiledata' id='contact'>" + data1[m].Contact + "</td>";

        list += "</tr>";
        list += "<tr>";

        list += "<td>" + "User Name" + "</td>";
        list += "<td contenteditable='true' class='profiledata' id='uname'>" + data1[m].UserName + "</td>";

        list += "</tr>";

        list += "</table>";

        $('#abc').html(list);
        $('.profiledata').attr('contenteditable', 'false');
    });



    $('#edit').click(function () {
        console.log('edit');
        $('.profiledata').attr('contenteditable', 'true');
        $('#save').show();
        $('#edit').hide();

    });

    $('#save').click(function () {

        var updatedfname = $('#fname')[0].innerHTML;

        console.log($('#lname')[0])
        var updatedlname = $('#lname')[0].innerHTML;
        console.log(updatedlname)
        var updatedemail = $('#email')[0].innerHTML;
        var updatedcontact = $('#contact')[0].innerHTML;
        var updateduname = $('#uname')[0].innerHTML;
        $.ajax({
            url: ' https://api.mlab.com/api/1/databases/tut9/collections/weblab/' + id1 + '?apiKey=SmaCXoSLpeMEZe-UpnPrgjpC0Wg_H2rZ',
            data: JSON.stringify({ "$set": { "FirstName": updatedfname, "LastName": updatedlname, "Email": updatedemail, "Contact": updatedcontact, "UserName": updateduname } }),
            type: "PUT",
            contentType: "application/json"
        });
        $('#save').hide();
        $('#edit').show();
        $('.profiledata').attr('contenteditable', 'false');
    });
});
function logout() {
    localStorage.removeItem("email2");
    window.location.href = "index.html";
  }