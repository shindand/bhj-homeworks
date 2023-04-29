const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');

tasksAdd.addEventListener('click', (e) => {
  e.preventDefault();
  if (taskInput.value.trim() != '') {
     tasksList.insertAdjacentHTML('afterEnd', `
       <div class="task">
         <div class="task__title">
           ${taskInput.value} 
         </div>
        <a href="#" class="task__remove">&times;</a>
        </div>`);

taskInput.value = "";

const taskRemove = document.querySelector('a.task__remove');
const task = document.querySelector('.task');
taskRemove.addEventListener('click', () => {
  task.remove(); 
});

}

});
