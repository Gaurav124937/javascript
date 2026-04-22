import {cart} from '../data/cart.js';
//<--feature of module-->
//to avoid naming conflict cart can be import as any other name
//import {cart as mycart} from '../data/cart.js';
import {products} from '../data/products.js';

let productsHTML = '';
products.forEach((product) => {
  productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="../images/ratings/rating-${Math.round(product.rating.stars * 10)}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select class = "js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart added-symbol-${product.id}">
            <img src="../images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary     js-add-to-cart" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;

  document.querySelector('.js-products-grid').innerHTML = productsHTML;

  
  

  function selector(productId) {      
      //makin selector interactive
      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
      console.log(quantitySelector);

      const quantity = Number(quantitySelector.value);
      return quantity;
      }

  function addTocart(productId){
      let matchingItem;
      cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
          matchingItem = cartItem;
        }
      });
      
      //calling selector function
      const quantity = selector(productId); 
      
      
      if (matchingItem) {
        matchingItem.quantity += quantity;
      } else {
        cart.push({
          productId: productId,
          quantity: quantity
        });
      }
  }










  document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
      //const productId = button.getAttribute('data-product-id');
      const productId = button.dataset.productId;
      
      addTocart(productId);

      const addMessage = document.querySelector(`.added-symbol-${productId}`);
      console.log(addMessage);
      addMessage.classList.add('added-to-cart-visible');


      function addedMessage(){
        // Check if there's a previous timeout for this
        // product. If there is, we should stop it.
        const previousTimeoutId = addMessageTimeouts[productId];
        if (previousTimeoutId) {
          clearTimeout(previousTimeoutId);
        }

        const timeoutId = setTimeout(() => {
          addMessage.classList.remove('added-to-cart-visible');
        }, 2000);

        // Save the timeoutId for this product
        // so we can stop it later if we need to.
        addMessageTimeouts[productId] = timeoutId;
        };
       


      ///makin card quantity visible on page  
      let cartQuantity = 0;
      cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
      });
      document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    });


  });
});

