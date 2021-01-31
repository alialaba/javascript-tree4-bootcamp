/**
 
 ** Exercise 4: What 's the time? **
 
 Why wear a watch when you can check the time, live in your webpage ?

  1. Create a basic HTML file
  2. in the HTML file Include a script tag and link the JavaScript file
  3. Inside the JS file, write a function that adds the current time to the webpage. Make sure it 's written in the HH:MM:ss notation (hour, minute, second). Hint: use `setInterval()` to make sure the time stays current
  4. Have the function execute when it 's loading in the browser

 */
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second")

function displayCurrentTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let twelveth = hours % 12
        //set hour timer
    if (hours > 12) {
        hour.innerHTML = twelveth;
    } else {
        hour.innerHTML = hours;
    }
    //set minute timer
    if (minutes < 10) {
        minute.innerHTML = `0${minutes};`
    } else {
        minute.innerHTML = minutes;
    }
    //set second timer
    if (seconds < 10) {
        second.innerHTML = `0${seconds}`;
    } else {
        second.innerHTML = seconds
    }
    hours >= 12 ? timeOfDay.innerHTML = "pm" : timeOfDay.innerHTML = "am"
}
window.onload = () => {
    displayCurrentTime();
}
setInterval(displayCurrentTime, 1000);