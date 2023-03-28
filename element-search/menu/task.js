const menuLink = document.querySelectorAll(".menu__link");
const queryMenu = document.querySelectorAll(".menu_sub");

let oldIndex = 0;
let oldPerent = 0;

  Array.from(menuLink).forEach((item, index) => item.onclick = function() { 

    let findPerent = index < menuLink.length - 1 ? index + 1: index;

    count(oldPerent);
    if (oldPerent != 0 && oldPerent != findPerent) {
      menuLink[oldPerent].closest(".menu_sub").className = "menu menu_sub";
      }
      
      oldPerent = findPerent;   

    if (menuLink[findPerent].closest(".menu_sub") != null) {
      menuLink[findPerent].closest(".menu_sub").className.includes("menu_active") ? menuLink[findPerent].closest(".menu_sub").className = "menu menu_sub" : 
      menuLink[findPerent].closest(".menu_sub").className = "menu menu_sub menu_active";
      return false;
    }

  });

  function count(oldPerent) {
    return oldPerent;
  }