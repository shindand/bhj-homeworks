const product = document.querySelectorAll('.product');
const productAdd = document.querySelectorAll('.product__add');
const cartProducts = document.querySelector('.cart__products');
const productImage = document.querySelectorAll('img.product__image');
const plus = document.querySelectorAll('.product__quantity-control.product__quantity-control_inc');
const dec = document.querySelectorAll('.product__quantity-control.product__quantity-control_dec');
const productQuantity = document.querySelectorAll('.product__quantity-value');

const products = document.querySelector('.products');

Array.from(product).forEach((item, index) => 
{
   plus[index].addEventListener('click', function() {
    productQuantity[index].innerHTML = `
      <div class="product__quantity-value">
      ${++productQuantity[index].textContent}
      </div> 
   `;
});

   dec[index].addEventListener('click', function() {
    productQuantity[index].innerHTML = `
      <div class="product__quantity-value">
      ${productQuantity[index].textContent = productQuantity[index].textContent > 1 ? --productQuantity[index].textContent : 1}
      </div>
   `;
});

   productAdd[index].addEventListener('click', function() {

     const card = document.querySelectorAll('.cart__product');
     const productCount = document.querySelectorAll('.cart__product-count');

     const prodId = Array.from(card).findIndex(item => item.dataset.id == product[index].dataset.id);

 if (prodId == -1) {
      cartProducts.innerHTML += `
          <div class="cart__product" data-id="${product[index].dataset.id}">
            <img class="cart__product-image" src="${productImage[index].src}">
            <div class="cart__product-count"> ${productQuantity[index].textContent}</div>
         </div>
       `
    } 
    else {
     productCount[prodId].textContent = Number(productCount[prodId].textContent) + Number(productQuantity[index].textContent); 
     }
});

})