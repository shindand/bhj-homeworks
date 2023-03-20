const countdown = function() {
    const timer = document.getElementById("timer");
    let arr = timer.textContent.split(':');
    let alltime = Number(arr[0]) * 3600 + Number(arr[1]) * 60 + Number(arr[2]);
    alltime -= 1;
    if (alltime == 0) {
        clearInterval(intervalID);
        alert("Вы победили в конкурсе!");
        location = "load.zip";
     }
    let hour = Math.trunc(alltime / 3600);
    let hourFinish = hour < 10 ? '0' + hour : hour;
    let minute = Math.trunc((alltime / 60) % 60);
    let minuteFinish = minute < 10 ? '0' + minute : minute;
    let sec = Math.trunc((alltime) % 60);
    let secFinish = sec < 10 ? '0' + sec : sec;

    timer.textContent = hourFinish + ':' + minuteFinish + ':' + secFinish;

   }
  const intervalID = setInterval(countdown, 1000);