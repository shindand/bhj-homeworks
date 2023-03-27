const openMenuList = document.querySelector(".dropdown__list");

const openMenu = document.querySelector(".dropdown__value");

const menuLanguage = document.querySelectorAll(".dropdown__item");

function listOpen() {
  openMenuList.className = openMenuList.className == "dropdown__list dropdown__list_active" ? "dropdown__list" :  "dropdown__list dropdown__list_active";
}

openMenu.addEventListener("click", listOpen);

Array.from(menuLanguage).forEach(item => item.onclick = function() {
   openMenu.textContent = item.textContent;
   listOpen();
   return false;
});

