
var today = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var n = weekday[today.getDay()];

var months = ["January ","February ","March ","April ","May ","June ","July ","August ","September ","October ","November ","December "];
var m = months[today.getMonth()];

var d = today.getDate();

var yyyy = today.getFullYear();

today = n + ', ' + d + ' ' + m + yyyy;
document.write(today);