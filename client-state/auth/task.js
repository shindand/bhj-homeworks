const signinBtn = document.getElementById('signin__btn');
const form = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const signinDie = document.getElementById('signin');
const userId = document.getElementById('user_id');

if (!localStorage.lastname) {

  signinBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    let response = await fetch('https://students.netoservices.ru/nestjs-backend/auth', {
      method: 'POST',
      body: new FormData(signin__form)
    });

    let result = await response.json();

    if (result.success == false) {
        alert('Неверный пароль/логин');
    }
    else {
        localStorage.lastname = result.user_id;
        hello(result.user_id);
    }

  });

}

else {
    hello(localStorage.lastname);
}

function hello(resultUserId){
    signinDie.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = `${resultUserId}`;
  }