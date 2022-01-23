export enum CardTypes {
    CART_ADD_ITEM = "CART_ADD_ITEM",
    CART_REMOVE_ITEM = "CART_REMOVE_ITEM",
}

export const { CART_REMOVE_ITEM, CART_ADD_ITEM } = CardTypes;

interface CartA {
    type: typeof CART_ADD_ITEM;
    payload: {
        product: string;
        name: string;
        image: string;
        price: number;
        countInStock: number;
        qty: number;
    };
}

interface CartB {
    type: typeof CART_REMOVE_ITEM;
    payload: string;
}

export type CartAction = CartA | CartB;

export interface CartI {
    cartItems: {
        product: string;
        name: string;
        image: string;
        price: number;
        countInStock: number;
        qty: number;
    }[];
}
