let hour = 00;
let minute = 00;
let second = 00;

let appHour = document.getElementById("hour");
let appMinute = document.getElementById("minute");
let appSecond = document.getElementById("Second");
let btn_start = document.getElementById("btn_start");
let btn_stop = document.getElementById("btn_stop");
let btn_reset = document.getElementById("btn_reset");

function startTimer() {
    second++;
    if(second < 9){
        appSecond.innerHTML = "0" + second;
    }   
    if(second > 9){
        appSecond.innerHTML = second;
    }
    if (second > 59) {
        minute++;
        appMinute.innerHTML = "0" + minute ;
        second = 0;
        appSecond.innerHTML = "0" + 0;
    }
    if(minute < 9){
        appMinute.innerHTML = "0" + minute;
    }   
    if(minute > 9){
        appMinute.innerHTML = minute;
    }
    if (minute > 59) {
        hour++;
        appHour.innerHTML = "0" + hour ;
        minute = 0;
        appMinute.innerHTML = "0" + 0;
    }
}


btn_start.addEventListener("click", function () {
    interval = setInterval(startTimer, 1000);
})

btn_stop.addEventListener("click", function () {
    clearInterval(interval);
})

btn_reset.addEventListener("click", function(){
    clearInterval(interval);
    hour = "00";
    minute = "00";
    second = "00";

    appHour.innerHTML = hour;
    appMinute.innerHTML = minute;
    appSecond.innerHTML = second;
})