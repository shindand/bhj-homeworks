const hasTooltip = document.querySelectorAll('.has-tooltip');

Array.from(hasTooltip).forEach((item, index) => {
    let {left, top} = item.getBoundingClientRect();
    item.insertAdjacentHTML("afterEnd", `<div class='tooltip' style='left: ${left}px; top: ${top + 20}px'>${item.title}</div>`);
  });

const tooltip = document.querySelectorAll('.tooltip');

let i = null;

Array.from(hasTooltip).forEach((item, index) => item.onclick = function() {
    if (i != null && i != index) {
        tooltip[i].classList.remove('tooltip_active');
    }
    if (i == index) {
      tooltip[index].classList.toggle('tooltip_active');
    }
    else {
      tooltip[index].classList.add('tooltip_active');
      i = index;
    }
    return false;
  });
