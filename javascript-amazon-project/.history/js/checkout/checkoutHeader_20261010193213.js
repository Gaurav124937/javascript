import {cart} from "../../data/cart.js";
export function renderCheckoutHeader(){
    let totalProduct=0;
    cart.forEach((cartItem) => {
        totalProduct+= cartItem.quantity;
    });
    const checkoutHeaderHtml = `
    Checkout (<a class="return-to-home-link" href="../html/amazon.html"
            >${totalProduct} items</a
          >)`;
    document.querySelector(".js-checkout-header-middle-section").innerHTML = checkoutHeaderHtml;
}