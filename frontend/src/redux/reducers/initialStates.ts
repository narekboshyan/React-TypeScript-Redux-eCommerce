import { ProductDetailsI, StateI } from "../constants/productConstants";

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
