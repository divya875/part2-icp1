
var courses;
var id;

function init(){
    var mailId1 = localStorage.getItem("email2");
    if (mailId1 == null) {
        window.location.href = "index.html";
    }
    $.getJSON('https://api.mlab.com/api/1/databases/tut9/collections/weblab?q={"Email":"' + mailId1 + '"}&apiKey=SmaCXoSLpeMEZe-UpnPrgjpC0Wg_H2rZ', {
    }).done(function (data) {
        //console.log(data.length)
        console.log(data);
        courses = data[0].Courses;
        id = data[0]._id.$oid;
        //$('#name1').html("Welcome");
        $('#name').html("Welcome" + " " + data[0].FirstName + "!!");
        console.log(data[0].Courses);
        if (data[0].Courses.length == 0) {
            $("#listView").html("You have not enrolled for any courses");
            return;
        }
        $(function () {
            var dataSource = new kendo.data.DataSource({
                data: data[0].Courses,
                pageSize: 5
            });

            $("#pager").kendoPager({
                dataSource: dataSource
            });

            $("#listView").kendoListView({
                dataSource: dataSource,
                template: kendo.template($("#template").html()),
                editTemplate: kendo.template($("#editTemplate").html())
            });
        });
    });
}
$(document).ready(function () {

    init();


})
function logout() {
    localStorage.removeItem("email2");
    window.location.href = "index.html";
}
function update(e) {
    console.log($(e).parent().parent().find('#Subject').val());

    subject = $(e).parent().parent().find('#Subject').val();
    for (var i = 0; i < courses.length; i++) {
        if (courses[i].Subject == subject) {
            courses[i].Classroom = $(e).parent().parent().find('#Classroom').val();
            courses[i].InstrutorName = $(e).parent().parent().find('#InstrutorName').val();
            courses[i].Day = $(e).parent().parent().find('#Day').val();
            courses[i].Time = $(e).parent().parent().find('#Time').val();
            break;
        }
    }
    $.ajax({
        url: ' https://api.mlab.com/api/1/databases/tut9/collections/weblab/' + id + '?apiKey=SmaCXoSLpeMEZe-UpnPrgjpC0Wg_H2rZ',
        data: JSON.stringify({ "$set": { "Courses": courses } }),
        type: "PUT",
        contentType: "application/json"
    });
}
function Delete(e) {
    console.log(e);
    if (confirm('Do you want to delete?') == false) {
        return;
    }
    console.log($(e).parent().parent().find('#sub')[0].innerHTML);
    subject = $(e).parent().parent().find('#sub')[0].innerHTML;
    console.log(subject);
    for (var i = 0; i < courses.length; i++) {
        if (courses[i].Subject == subject) {
            var index = courses.indexOf(courses[i]);
            if (index > -1) {
                courses.splice(index, 1);
            }
            break;
        }
    }
    $.ajax({
        url: ' https://api.mlab.com/api/1/databases/tut9/collections/weblab/' + id + '?apiKey=SmaCXoSLpeMEZe-UpnPrgjpC0Wg_H2rZ',
        data: JSON.stringify({ "$set": { "Courses": courses } }),
        type: "PUT",
        contentType: "application/json",
        success:function(){
            init();
        }
    });
}