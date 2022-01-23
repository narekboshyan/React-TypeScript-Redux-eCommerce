import { ProductsI } from "../constants/productConstants";
import {
    ProductListAction,
    ProductDetailsAction,
    ProductDetailsI,
    ProductListTypes,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    StateI,
} from "../constants/productConstants";
import {
    initialProductDetailsState,
    initialProductListState,
} from "./initialStates";

const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } =
    ProductListTypes;

export const productListReducer = (
    state: StateI = initialProductListState,
    action: ProductListAction
): StateI => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true, products: [] };
        case PRODUCT_LIST_SUCCESS:
            return { ...state, loading: false, products: action.payload };
        case PRODUCT_LIST_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

// !  ProductDetailsREducer

export const productDetailsReducer = (
    state: ProductDetailsI = initialProductDetailsState,
    action: ProductDetailsAction
): ProductDetailsI => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { ...state, loading: false, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
