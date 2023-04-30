const signinBtn = document.getElementById('signin__btn');
const form = document.getElementById('signin__form');

signinBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var formData = new FormData(signin__form);
    formData.append(login, value);
    formData.append(password, value);
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth", true);
    xhr.send(formData);


});