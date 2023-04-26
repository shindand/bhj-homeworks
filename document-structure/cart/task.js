const product = document.querySelectorAll('.product');
const productAdd = document.querySelectorAll('.product__add');
//const productControls = document.querySelectorAll('.product__controls');
const cartProducts = document.querySelector('.cart__products');
const productImage = document.querySelectorAll('img.product__image');
const plus = document.querySelectorAll('.product__quantity-control.product__quantity-control_inc');
const dec = document.querySelectorAll('.product__quantity-control.product__quantity-control_dec');
const productQuantity = document.querySelectorAll('.product__quantity-value');

const products = document.querySelector('.products');
let count = [];
for (let i = 0; i < products.children.length; i ++) {
  count[i] = 1;
}

let noDouble = [];

Array.from(product).forEach((item, index) => 
{

   plus[index].addEventListener('click', function() {
    productQuantity[index].innerHTML = `
      <div class="product__quantity-value">
        ${count[index] += 1}
      </div>
   `;
});

   dec[index].addEventListener('click', function() {
    productQuantity[index].innerHTML = `
      <div class="product__quantity-value">
        ${count[index] = count[index] > 1 ? count[index] - 1 : 1}
      </div>
   `;
});

   productAdd[index].addEventListener('click', function() {
    if (noDouble[index] != true) {
      noDouble[index] = true;
      cartProducts.innerHTML += `
        <div class="cart__product" data-id="${product[index].dataset.id}">
          <img class="cart__product-image" src="${productImage[index].src}">
          <div class="cart__product-count"> ${count[index]}</div>
        </div>
      `
    }
    });
    
});