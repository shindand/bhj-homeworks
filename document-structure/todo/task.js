const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

taskInput.addEventListener('keydown', function(event) {
    if ((event.key === 'Enter') && (this.value != '')) {
      tasksList.innerHTML += `
        <div class="task">
          <div class="task__title">
            ${this.value} 
          </div>
          <a href="#" class="task__remove">&times;</a>
       </div>
`;
this.value = "";

event.preventDefault();

Array.from(tasksList.children).forEach((item, index) => item.onclick = function() {
  item.remove();
});

    }

});

