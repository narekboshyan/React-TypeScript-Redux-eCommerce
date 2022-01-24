const cartItems = localStorage.getItem("cartItems");

const cartItemsFromStorage = cartItems ? JSON.parse(cartItems) : [];

const userInfo = localStorage.getItem("userInfo");
const userInfoFromStorage = userInfo ? JSON.parse(userInfo) : null;

interface InitialStateI {
    cart: any;
    userLogin: any;
}

export const initialState: InitialStateI = {
    cart: { cartItems: cartItemsFromStorage },
    userLogin: { userInfo: userInfoFromStorage },
};
