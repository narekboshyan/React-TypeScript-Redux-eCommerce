import axios from "axios";
import { Dispatch } from "redux";
import {
    ProductDetailsAction,
    ProductListAction,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProducts =
    () => async (dispatch: Dispatch<ProductListAction>) => {
        try {
            dispatch({ type: PRODUCT_LIST_REQUEST });

            const { data } = await axios.get("/api/products");

            dispatch({
                type: PRODUCT_LIST_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: PRODUCT_LIST_FAIL,
                payload:
                    error?.response && error?.response.data.message
                        ? error?.response.data.message
                        : error?.message,
            });
        }
    };

export const listProductDetails =
    (id: string | any) => async (dispatch: Dispatch<ProductDetailsAction>) => {
        try {
            dispatch({ type: PRODUCT_DETAILS_REQUEST });

            const { data } = await axios.get(`/api/products/${id}`);
            console.log(data, "SINGLE PRODUCT");

            dispatch({
                type: PRODUCT_DETAILS_SUCCESS,
                payload: data,
            });
        } catch (error: any) {
            dispatch({
                type: PRODUCT_DETAILS_FAIL,
                payload:
                    error?.response && error?.response.data.message
                        ? error?.response.data.message
                        : error?.message,
            });
        }
    };
