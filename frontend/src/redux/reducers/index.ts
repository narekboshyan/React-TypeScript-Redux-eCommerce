import { combineReducers } from "redux";
import { productDetailsReducer, productListReducer } from "./productReducers";
import { cartReducer } from "./cardReducers";

export const rootReducer = combineReducers({
    productListState: productListReducer,
    productDetailsState: productDetailsReducer,
    cart: cartReducer,
});
