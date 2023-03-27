const menuUp = document.getElementsByClassName("menu menu_sub");
const menuLink = document.getElementsByClassName("menu__link");

const menuLink2 = document.querySelectorAll(".menu__link");

const queryMenu = document.querySelectorAll(".menu_sub");

let oldIndex = 0;

  Array.from(menuLink2).forEach((item, index) => item.onclick = function() { 

  if (oldIndex != 0 && oldIndex != index) {
     menuLink2[++oldIndex].closest(".menu_sub").className = "menu menu_sub";
   }

    menuLink2[++index].closest(".menu_sub").className.includes("menu_active") ? menuLink2[index + 1].closest(".menu_sub").className = "menu menu_sub" : 
  menuLink2[++index].closest(".menu_sub").className = "menu menu_sub menu_active";
  
    oldIndex = index;
  
    return false;
  });


  