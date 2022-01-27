import { ProductDetailsI, StateI } from "../constants/productConstants";
import {  UserDetailsI, UserLoginI, UserRegisterI } from "../constants/userConstants";

export const initialProductListState: StateI = {
    products: [],
    loading: false,
    error: null,
};

export const initialProductDetailsState: ProductDetailsI = {
    product: {
        _id: "",
        name: "",
        image: "",
        description: "",
        brand: "",
        category: "",
        price: 0,
        countInStock: 0,
        rating: 0,
        numReviews: 0,
    },
    loading: false,
    error: null,
};

// !  CartReducer
export const initialCartState = {
    cartItems: [],
};

// ! userLoginReducer
export const initialLoginState: UserLoginI = {
    loading: false,
    userInfo: null,
    error: null,
};

// ! userRegisterReducer
export const initialRegisterState: UserRegisterI = {
    loading: false,
    userInfo: null,
    error: null,
};

// ! userDEtailsReducer
export const initialUserDetailsState: UserDetailsI = {
    loading: false,
    user: null,
    error: null,
};
