const hasTooltip = document.querySelectorAll('.has-tooltip');

Array.from(hasTooltip).forEach((item, index) => {
    let {left, top} = item.getBoundingClientRect();
    item.innerHTML += `
      <div class="tooltip" style="left: ${left}; top: ${top}">
        ${item.title}
      </div>
    `;
  });

const tooltip = document.querySelectorAll('.tooltip');

let i = null;

Array.from(hasTooltip).forEach((item, index) => item.onclick = function() {
    if (i != null) {
        tooltip[i].classList.remove('tooltip_active');
    }
    tooltip[index].classList.add('tooltip_active');
    i = index;
    return false;
  });