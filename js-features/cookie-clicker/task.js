const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");

function changeSizes() {   
    image.width = image.width == "300" ? "200" : "300";
    clicker.textContent++;
    clicker.textContent = clicker.textContent > 39 ? "0" : clicker.textContent; 
    
    clickTime();

};

image.onclick = changeSizes;

function clickTime() {
    let newDate = new Date();
    speed.textContent = ((1 / newDate.getMilliseconds()) * 1000).toFixed(2);
}

