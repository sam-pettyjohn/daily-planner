
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
    if (date = '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '24', '25', '26', '27', '28', '29', '30') {
        return today.getDate() + 'th';
    } else if (date = '1', '21', '31') {
        return today.getDate() + 'st';
    } else if (date = '2', '22') {
        return today.getDate() + 'nd';
    } else {
        return today.getDate() + 'rd'
    }
}

// DATE DISPLAY FUNCTION
var currentDate = document.getElementById('currentDay').innerHTML = `${day}, ${month} ${ordinals(date)}`;