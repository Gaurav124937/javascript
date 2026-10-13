export function renderCheckoutHeader(totalProduct){
    const checkoutHeaderHtml = `
    Checkout (<a class="return-to-home-link" href="../html/amazon.html"
            >${totalProduct} items</a
          >)`;
    document.querySelector(".js-checkout-header-middle-section").innerHTML = checkoutHeaderHtml;
}