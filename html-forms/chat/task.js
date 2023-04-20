const robot = document.querySelector(".chat-widget");

robot.onclick = function() {
    robot.classList.add("chat-widget_active");
}

const messages = document.querySelector( '.chat-widget__messages' );
const answerMessages = document.querySelector('.chat-widget__messages');

const arr = ['Это опять Вы', 'А который год', 'Завтра приходите', 'Я занят, позвоните попозже', 'Да сколько можно то', 'Все, я ухожу'];

messages.innerHTML = `
  <div class="message">
    <div class="message__time">${time()}</div>
    <div class="message__text">
      Добрый день, мы ещё не проснулись. Позвоните через 10 лет
    </div>
  </div>
`;

function time() {
    let time = new Date();
    let timeHours = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
    let timeMinutes = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();
    return allTime = `${timeHours}:${timeMinutes}`;
}

const inputUser = document.getElementById('chat-widget__input');
let enter = false;

    let intervalId = () => setTimeout(function(){
        messages.innerHTML += `
        <div class="message">
          <div class="message__time">${time()}</div>
          <div class="message__text">
             Скажи-ка мне на милость, что там за мысль в тебе закопошилась?
          </div>
       </div>
    `;
    }, 5000);

inputUser.addEventListener('keydown', function(e){
   

    if (e.keyCode === 13 && this.value != '') {
        
        enter = true;
        messages.innerHTML += `
        <div class="message message_client">
       <div class="message__time">${time()}</div>
       <div class="message__text">${this.value}</div>
       </div>
       `;
      }
    if (enter === true) {
        this.value = '';
        enter = false;
        setTimeout(function(){
        time();
        messages.innerHTML += `
          <div class="message">
            <div class="message__time">${time()}</div>
            <div class="message__text">
            ${arr[Math.floor(Math.random() * arr.length)]}
            </div>
         </div>
    `;
        }, 1500);
    }
});
