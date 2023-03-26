const slidMove = document.getElementsByClassName("slider__arrow");
const slidImage = document.getElementsByClassName("slider__item");

const slidImageNext = document.querySelector("div.slider__arrow.slider__arrow_next");
const slidImagePrev = document.querySelector("div.slider__arrow.slider__arrow_prev");


let index = 0;
let oldIndex = 0;
let count = 0;
let per = false;

const pointClass = document.getElementsByClassName("slider__dot");
const point = document.querySelectorAll(".slider__dot");

pointClass[oldIndex].className = "slider__dot slider__dot_active";
Array.from(point).forEach((item, index) => item.onclick = function() {
    count = index; 
    per = true;
    if (pointClass[index].className.includes("slider__dot")) {
    changeArrow(index, oldIndex);
    oldIndex = index;
    }
});

const slidMoveAll = document.querySelectorAll(".slider__arrow");
Array.from(slidMoveAll).forEach((item) => item.onclick = function() {
    if (item.className.includes("slider__arrow slider__arrow_next")) {
        if (per) {
            index = count;
            per =false;
        }
        index++;
        if (index == slidImage.length) {
            index = 0;
        }
        changeArrow(index, oldIndex);
        oldIndex = index;
    }
    if (item.className.includes("slider__arrow slider__arrow_prev")) {
        if (per) {
            index = count;
            per =false;
        }
        index--;
        if (index < 0) {
            index = slidImage.length - 1;
        }
        changeArrow(index, oldIndex);
       oldIndex = index;
    }
});

function changeArrow(index, oldIndex) {

    slidImage[index].className = "slider__item slider__item_active";
    slidImage[oldIndex].className = "slider__item"; 

    pointClass[index].className = "slider__dot slider__dot_active";
    pointClass[oldIndex].className = "slider__dot";
    
}
