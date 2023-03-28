const upMenu = document.querySelectorAll(".tab");
const contentMenu = document.querySelectorAll(".tab__content");

Array.from(upMenu).forEach((item, index) => item.onclick = function() {

   Array.from(upMenu).forEach((item2, index2) => {
    if (upMenu[index2].className == "tab tab_active" && index != index2) {
        upMenu[index2].className = "tab";
        contentMenu[index2].className = "tab__content";

        upMenu[index].className = "tab tab_active";
        contentMenu[index].className = "tab__content tab__content_active";
    }
   });


});