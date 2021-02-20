const btnUp = document.getElementById("btn-increase");
const btnDown = document.getElementById("btn-decrease");
const counter = document.querySelector(".pomodoro-count");
const minute = document.querySelector(".timing-minutes");
const second = document.querySelector(".timing-seconds");
let timingCount = document.getElementById("timing-count");
let play = document.querySelector(".play")
let fakeTime = 600
let count = 25;
const increase = () => {
    if (count < 100) {
        count++
    }
    counter.innerHTML = count;
    timingCount.innerHTML = count;
}
const decrease = () => {
    if (count > 0) {
        count--;
    }
    counter.innerHTML = count;
    timingCount.innerHTML = count;
}


btnUp.addEventListener('click', increase)
btnDown.addEventListener("click", decrease)

const updateTimer = () => {
    let currentTime = count.currentTime;
    console.log(currentTime);
    let elapse = fakeTime - currentTime;
    let mins = Math.floor(elapse / 60);
    let secs = Math.floor(elapse % 60);
    minute.textContent = mins;
    second.textContent = secs;
}
play.addEventListener("click", updateTimer)