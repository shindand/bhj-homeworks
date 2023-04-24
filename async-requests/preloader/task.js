const money = document.getElementById('items');
const imgLoader = document.getElementById('loader');
const courseValute = document.querySelector('.item');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        let obj = JSON.parse(xhr.response);
        for (let elem in obj.response.Valute) {
          money.innerHTML += `
          <div class="item__code">
            ${obj.response.Valute[elem].CharCode}
          </div>
          <div class="item__value">
            ${obj.response.Valute[elem].Value}
          </div>
          <div class="item__currency">
            руб.
          </div>
         `;
        }
      
        imgLoader.classList.remove("loader_active");
    }
    });
