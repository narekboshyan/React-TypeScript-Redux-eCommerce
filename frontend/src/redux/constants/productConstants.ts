// ! ProductList
export enum ProductListTypes {
    PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST",
    PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS",
    PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL",
}

export const { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } =
    ProductListTypes;

// ^ Getting products and there types
export interface ProductsI {
    _id: string;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
}

interface ProductListA {
    type: typeof PRODUCT_LIST_REQUEST;
}

interface ProductListB {
    type: typeof PRODUCT_LIST_SUCCESS;
    payload: ProductsI[];
}

interface ProductListC {
    type: typeof PRODUCT_LIST_FAIL;
    payload: string;
}

export interface StateI {
    products: ProductsI[];
    loading: boolean;
    error: null | string;
}

export type ProductListAction = ProductListA | ProductListB | ProductListC;

// ! ProductDetails

enum ProductDetailsTypes {
    PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST",
    PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS",
    PRODUCT_DETAILS_FAIL = "PRODUCT_DETAILS_FAIL",
}
export const {
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
} = ProductDetailsTypes;
// export type ProductDetailsAction

export interface ProductDetailsI {
    product: ProductsI;
}

interface ProductDetailsA {
    type: typeof PRODUCT_DETAILS_REQUEST;
}

interface ProductDetailsB {
    type: typeof PRODUCT_DETAILS_SUCCESS;
    payload: ProductsI;
}

interface ProductDetailsC {
    type: typeof PRODUCT_DETAILS_FAIL;
    payload: string;
}
export interface ProductDetailsI {
    product: ProductsI;
    loading: boolean;
    error: null | string;
}

export type ProductDetailsAction =
    | ProductDetailsA
    | ProductDetailsB
    | ProductDetailsC;
