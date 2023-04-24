const survey = document.getElementById('poll__title');
const answer = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        let obj = JSON.parse(xhr.response);
        survey.innerHTML = `
    <div class="poll__title" id="poll__title">
        ${obj.data.title}
    </div>
    `;

    for(let i = 0; i < obj.data.answers.length; i++) {
        answer.innerHTML += `
        <div class="poll__answers" id="poll__answers">
           <button class="poll__answer">
             ${obj.data.answers[i]}
           </button>
        </div>
  `;
    }
    const answerClick = document.querySelectorAll('.poll__answer');
    Array.from(answerClick).forEach(item => 
        item.onclick = function() {
        alert('Спасибо, ваш голос засчитан!');
        });
    }
});
