
// Display Weekday Name
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

var today  = new Date();
var weekdayName = today.getDay();
var day = days[weekdayName];

// Display Month Name
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var thisMonth = today.getMonth();
var month = months[thisMonth];

// Display Today's Date
var year = today.getFullYear();
var date = today.getDate();

function ordinals(date) {
    if (date == 31 || date == 21 || date == 1) {
        return date + "st";
    } else if (date == 22 || date == 2) { 
        return date + "nd";
    } else if (date == 23 || date == 3) {
        return date + "rd";
    } else {
        return date + "th";
    }
};

// DATE DISPLAY FUNCTION
var currentDate = document.getElementById('currentDay').innerHTML = `${day}, ${month} ${ordinals(date)}`;