let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let digitalHour = document.getElementById('digital-hour');
let digitalMinute = document.getElementById('digital-minute');
let digitalSecond = document.getElementById('digital-second');

function displayTime(){
    let date = new Date();

    // Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
    
    // Digital clock display
  digitalHour.textContent = (hh < 10) ? `0${hh}` : hh;
  digitalMinute.textContent = (mm < 10) ? `0${mm}` : mm;
  digitalSecond.textContent = (ss < 10) ? `0${ss}` : ss;
}

setInterval(displayTime, 1000);