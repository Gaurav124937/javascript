//---------<MVC Architecture(Model--View---Controller)>-------------------
//Model: it means files which handle the data/infornation part of project
//View: it means the part of code/file which manages how the data wiil be shown and designed
//Controller: it means the part of code/file which makes the interaction possible(like addEventListener,buttons etc)
import { cart } from "../../data/cart.js";
import { getDeliveryoption, getProduct } from "../../data/products.js";
export function renderPaymentSummary() {
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;

        const deliveryOption = getDeliveryoption(cartItem.deliveryOptionId);
        shippingPriceCents += deliveryOption.priceCents;

    });
    console.log(productPriceCents);
    console.log(shippingPriceCents);
}