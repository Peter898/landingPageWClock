//setInterval refreshes the page every 1000 millisecond
var myVar = setInterval(myTimer,1000);

//Create the array for the months
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

//gets the date and time
function myTimer()
{
    var date = new Date();
    var i = month[date.getMonth()];

    document.getElementById("date").innerHTML = i + " - " +
    date.getDate() + " - "+
    date.getFullYear();
    document.getElementById("show-hours").innerHTML = date.getHours();
    document.getElementById("show-min").innerHTML = date.getMinutes();
    document.getElementById("show-secs").innerHTML = date.getSeconds();
    document.getElementById("ampm").innerHTML = date.getHours()<12?"AM":"PM";
}



