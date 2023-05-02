const signinBtn = document.getElementById('signin__btn');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');



signinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var formData = new FormData(signin__form);
    formData.append('login', 'value');
    formData.append('password', 'value');
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth", true);
    
    xhr.send(formData);


    xhr.onload = function() {
        console.log(`Загружено: ${xhr.status} ${xhr.response}`);
      };



      // ??
for(let [name, value] of formData) {
    console.log(typeof name, typeof value); // string
  }
});