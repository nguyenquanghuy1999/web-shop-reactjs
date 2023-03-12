import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE, DECREASE, RENDER_CART_LIST } from "./constants";

const addProductToCart = payload => ({
    type: ADD_PRODUCT,
    payload
});

const removeProduct = payload => ({
    type: REMOVE_PRODUCT,
    payload
});

const renderCartList = () => ({ type: RENDER_CART_LIST });

const increase = payload => ({ type: INCREASE, payload });

const decrease = () => ({ type: DECREASE });


export { addProductToCart, removeProduct, increase, decrease, renderCartList };

