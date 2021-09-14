const daysE1 = document.getElementById('days');    
const hoursE1 = document.getElementById('hours');
const minE1 = document.getElementById('minutes');
const secondsE1 = document.getElementById('seconds');

const newYears = '1 Jan 2022'

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) % 24 - 1;
    const minutes = Math.floor(totalSeconds/ 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    //console.log(daysLeft, hoursLeft, minutesLeft, secondsLeft);

    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minE1.innerHTML = formatTime(minutes);
    secondsE1.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();

setInterval(countdown, 1000);
