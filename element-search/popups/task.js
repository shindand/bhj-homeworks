let modal = document.getElementById("modal_main");
modal.className = "modal modal_active";

let closeModal = document.getElementsByClassName("modal__close modal__close_times");

let modalSmall = document.getElementById("modal_success");
let linksModal = document.getElementsByClassName("show-success");


 Array.from(linksModal).forEach(item => item.onclick = function () {
    modal.className = "modal";
    modalSmall.className = "modal modal_active";   
});

Array.from(closeModal).forEach(item => item.onclick = function () {
    modalSmall.className = "modal";    
});
