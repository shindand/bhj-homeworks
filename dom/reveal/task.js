const reveal = document.querySelectorAll('.reveal');

Array.from(reveal).forEach(item => {
function isVisible(el) {
const {top, bottom} = el.getBoundingClientRect();

if (bottom < 0) {
  return item.className = "reveal";
}

if (top > window.innerHeight) {
  return item.className = "reveal";
}
return item.className = "reveal reveal_active";
}
setInterval(() => {isVisible(item)}, 500);
});
