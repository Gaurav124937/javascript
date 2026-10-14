export let cart;
export function loadFromStorage() {
  cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    cart = [
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

loadFromStorage();
//added since it belongs to cart

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function selector(productId) {
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

export function addTocart(productId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  //calling selector function
  const quantity = selector(productId);
  if (quantity > 0) {
    if (matchingItem) {
      matchingItem.quantity += quantity;
    } else {
      cart.push({
        productId: productId,
        quantity: quantity,
        deliveryOptionId: "1",
      });
    }
  } else {
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: "1",
      });
    }
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

export function updateDeliveryOptions(productId, deliveryOptionId) {
  let matchingItem;
  cart.forEach((cartItem) => {
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}
