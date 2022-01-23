const cartItems = localStorage.getItem("cartItems");

const cartItemsFromStorage = cartItems ? JSON.parse(cartItems) : [];

export const initialState = {
    cart: { cartItems: cartItemsFromStorage },
};
