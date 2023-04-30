const editor = document.getElementById('editor');
const resetEditor = document.getElementById('reset');

editor.addEventListener('keypress', function() {
  localStorage.lastname = this.value;
});

if (localStorage.lastname) {
  editor.textContent = localStorage.lastname;
}

resetEditor.addEventListener('click', (e) => {
  editor.value = '';
    
});
