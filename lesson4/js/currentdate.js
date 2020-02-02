var year = new Date().getFullYear();

var m = new Date();
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
var mo = month[m.getMonth()];

var day = new Date().getDate();

var w = new Date();
var week = new Array(7);
week[0] = "Sunday";
week[1] = "Monday";
week[2] = "Tuesday";
week[3] = "Wednsday";
week[4] = "Thursday";
week[5] = "Friday";
week[6] = "Saturday";
var we = week[w.getDay()];

document.getElementById("weekday").innerHTML=we;
document.getElementById("currentday").innerHTML=day;
document.getElementById("currentmonth").innerHTML=mo;
document.getElementById("currentyear").innerHTML=year;