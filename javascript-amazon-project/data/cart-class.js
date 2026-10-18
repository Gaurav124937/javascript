//OOP : organizes are code into object
//CLASSES: helps us to generate these objects
//.> it has more functions in oops
//.> it has consturctor(default/genreated) ehich runs by default as a class sets up and it does not return anything, it can have parameter


class Cart {
    //cartItems = undefined;
    cartItems;
    //public variable
    //localStorageKey;
    //private variable
    #localStorageKey;

    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey;
        this.#loadFromStorage();

    }

    //private method
    #loadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));

        if (!this.cartItems) {
            this.cartItems = [
                {
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 2,
                    deliveryOptionId: "1",
                },
                {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity: 1,
                    deliveryOptionId: "2",
                },
            ];
        }
    }
    saveToStorage() {
        localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
    }
    selector(productId) {
        //makin selector interactive
        const quantitySelector = document.querySelector(
            `.js-quantity-selector-${productId}`,
        );

        if (!quantitySelector) {
            return 0;
        }

        const quantity = Number(quantitySelector.value);
        if (Number.isInteger(quantity) && quantity > 0) {
            return quantity;
        } else {
            return 0;
        }
    }
    addTocart(productId) {
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId === productId) {
                matchingItem = cartItem;
            }
        });

        //calling selector function
        const quantity = this.selector(productId);
        if (quantity > 0) {
            if (matchingItem) {
                matchingItem.quantity += quantity;
            } else {
                this.cartItems.push({
                    productId: productId,
                    quantity: quantity,
                    deliveryOptionId: "1",
                });
            }
        } else {
            if (matchingItem) {
                matchingItem.quantity += 1;
            } else {
                this.cartItems.push({
                    productId: productId,
                    quantity: 1,
                    deliveryOptionId: "1",
                });
            }
        }

        this.saveToStorage();
    }
    removeFromCart(productId) {
        const newCart = [];
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;

        this.saveToStorage();
    }
    updateDeliveryOptions(productId, deliveryOptionId) {
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId === productId) {
                matchingItem = cartItem;
            }
        });
        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }
}

const cart = new Cart('cart-oops');
const businessCart = new Cart('cart-business');


console.log(cart);
console.log(businessCart);

console.log(businessCart instanceof Cart);






