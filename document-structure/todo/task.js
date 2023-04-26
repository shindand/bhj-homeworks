const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && event.target.value.length > 0) {
      tasksList.innerHTML += `
        <div class="task">
          <div class="task__title">
            ${event.target.value} 
          </div>
          <a href="#" class="task__remove">&times;</a>
       </div>
`;
event.target.value = "";


Array.from(tasksList.children).forEach((item, index) => item.onclick = function() {
  item.remove();
});

    }

});



