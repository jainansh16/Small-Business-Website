var date;
var hours = 0;
var minutes = 0;
var seconds = 0;
var meridiem = "am";

function addZero(n) {
    if (n < 10) {
        n = "0" + n;
    }
    return n;
}

function getTime() {
    //"JavaScript GetTime() Method." www.w3schools.com/jsref/jsref_gettime.asp. Accessed 29 Dec. 2020.
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);
    if (hours > 12) {
        hours = hours - 12;
        meridiem = "pm";
    }
    //"JavaScript Output." www.w3schools.com/js/js_output.asp. Accessed 29 Dec. 2020.
    document.getElementById('time').innerHTML = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    var delay = setTimeout(getTime, 500);
}

var increaseWidth = 250;
var decreaseWidth = 200;

//“JavaScript Increasing and Decreasing Image Size.” Tutorial Republic - Online Web Development Tutorials, www.tutorialrepublic.com/codelab.php?topic=faq&amp;file=javascript-increasing-and-decreasing-image-size. Accessed 30 Dec. 2020.
function draw() {
    var logo = document.getElementById("logo");
    var currentNumber = logo.clientWidth;
    if (increaseWidth < 300) {
        currentNumber = currentNumber + 1 + "px";
        logo.style.width = currentNumber;
        logo.style.height = currentNumber;
        increaseWidth++;
        if (increaseWidth == 300) {
            decreaseWidth = increaseWidth;
        }
    }
    if (decreaseWidth > 200) {
        currentNumber = currentNumber - 1 + "px";
        logo.style.width = currentNumber;
        logo.style.height = currentNumber;
        decreaseWidth--;
        if (decreaseWidth == 200) {
            increaseWidth = decreaseWidth;
        }
    }
}

function run() {
    draw();
    setTimeout(run, 20);
}