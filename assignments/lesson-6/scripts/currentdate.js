var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
    var months = ["January","February","March","April","May","June",
    "July","August","September","October","November","December"];
} 

today = months + '/' + dd + '/' + yyyy;
document.write(today);