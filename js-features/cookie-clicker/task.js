const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");

let firstTime = new Date();

function changeSizes() {   

    image.width = ++clicker.textContent % 2 ? 250 : 200;
    clicker.textContent = clicker.textContent > 39 ? 0 : clicker.textContent; 
  
  
    clickTime(firstTime);

};

image.onclick = changeSizes;

function clickTime(firstTime) {
    let newDate = new Date();
    console.log(firstTime.getMilliseconds(), newDate.getMilliseconds());
    speed.textContent = ((1 / (firstTime.getMilliseconds() - newDate.getMilliseconds())) * 1000).toFixed(2);
    firstTime = new Date();
    return firstTime;
    
}

