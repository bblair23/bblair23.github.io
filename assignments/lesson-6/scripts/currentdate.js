
var today = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday ";
weekday[1] = "Monday ";
weekday[2] = "Tuesday ";
weekday[3] = "Wednesday ";
weekday[4] = "Thursday ";
weekday[5] = "Friday ";
weekday[6] = "Saturday ";

var n = weekday[today.getDay()];

var dd = today.getDate();

var month = new Array(12);
weekday[0] = "January ";
weekday[1] = "February ";
weekday[2] = "March ";
weekday[3] = "April ";
weekday[4] = "May ";
weekday[5] = "June ";
weekday[6] = "July ";
weekday[7] = "August ";
weekday[8] = "September ";
weekday[9] = "October ";
weekday[10] = "November ";
weekday[11] = "December ";

var m = month[today.getDay()];


var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = n + m + dd + '/' + yyyy;
document.write(today);