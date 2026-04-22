export const cart=[];
//import {selector} from '../js/amazon.js';


//added since it belongs to cart
export function addTocart(productId){
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

  function selector(productId) {      
      //makin selector interactive
      const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
      console.log(quantitySelector);

      const quantity = Number(quantitySelector.value);
      return quantity;
      }