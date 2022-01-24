import { combineReducers } from "redux";
import { productDetailsReducer, productListReducer } from "./productReducers";
import { cartReducer } from "./cardReducers";
import { userLoginReducer } from "./userReducers";

export const rootReducer = combineReducers({
    productListState: productListReducer,
    productDetailsState: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
});
