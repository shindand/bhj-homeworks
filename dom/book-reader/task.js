const fonSize = document.querySelectorAll(".font-size");
const fontBook = document.getElementById("book");
const fontColor = document.querySelector(".book__control.book__control_color");
const fonColor = document.querySelector(".book__control.book__control_background");

Array.from(fonSize).forEach(item => item.onclick = function() {

    Array.from(fonSize).forEach(item => item.classList.remove('font-size_active'));
    fontBook.classList.remove("book_fs-big", "book_fs-small"); 
    fontBook.classList.add(`book_fs-${item.dataset.size}`);
    item.classList.add('font-size_active');
    return false;
});

Array.from(fontColor.children).forEach(item => item.onclick = function() {
    
        if(item.tagName == "A") {
            Array.from(fontColor.children).forEach(item => item.classList.remove('color_active'));
            fontBook.classList.remove("book_color-whitesmoke", "book_color-gray", "book_color-black"); 
            fontBook.classList.add(`book_color-${item.dataset.textColor}`);
            item.classList.add("color_active");
        }
        return false;
    });

    Array.from(fonColor.children).forEach(item => item.onclick = function() {
    
        if(item.tagName == "A") {
            Array.from(fonColor.children).forEach(item => item.classList.remove('color_active'));
            fontBook.classList.remove("book_bg-gray", "book_bg-black", "book_bg-white"); 
            fontBook.classList.add(`book_bg-${item.dataset.bgColor}`);
            item.classList.add("color_active");
        }
        return false;
    });