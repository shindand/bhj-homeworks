const rotator = document.querySelectorAll(".rotator__case");

let i = 0;
let speed = rotator[i].dataset.speed;
let timerId;

Array.from(rotator).forEach((item, index) => item.style.color = rotator[index].dataset.color);

  let ops = function() {
     rotator[i].classList.remove("rotator__case_active");
     i++;  
     if (i == rotator.length) {   
       i = 0;  
    }
    rotator[i].classList.add("rotator__case_active");
    speed = rotator[i].dataset.speed;
    clearTimeout(timerId);
    return interval(speed);
 }
 
function interval(speed) {
  timerId = setInterval(ops, speed);
}

interval(speed);

