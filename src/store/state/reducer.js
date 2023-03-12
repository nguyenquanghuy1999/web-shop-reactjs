import { ADD_PRODUCT, REMOVE_PRODUCT, INCREASE, DECREASE, RENDER_CART_LIST } from "./constants";

export const initState = {
    cartItems: [],
    totalPrice: 0,
    cartLength: 0,
    totalPriceItem: 0,
};

const handlePriceStringToNumber = (value) => {
    const priceString = value;
    const removeLastCharInPrice = priceString.slice(0, priceString.length - 1);
    const removeDotsInPrice = removeLastCharInPrice.replace('.', '');
    const newPrice = parseFloat(removeDotsInPrice);
    return newPrice;
}

const handleFormatPrice = (value) => {
    let price = new Intl.NumberFormat().format(value);
    price += '.000đ';
    return price.replace(',', '.');
}

function reducer(state, action) {

    let newCartItems;
    let newCartLength;
    let newTotalPrice;

    switch (action.type) {
        case ADD_PRODUCT:
            newCartItems = [...state.cartItems, action.payload];
            newCartLength = newCartItems.reduce((total, item) => total += item.quantity, 0);
            newTotalPrice = newCartItems.reduce((total, item) => {
                const priceItems = handlePriceStringToNumber(item.totalPrice);
                return total += priceItems;
            }, 0)
            state = {
                ...state,
                cartItems: newCartItems,
                cartLength: newCartLength,
                totalPrice: handleFormatPrice(newTotalPrice),
                totalPriceItem: handlePriceStringToNumber(action.payload.totalPrice)
            }
            localStorage.setItem('cart-items', JSON.stringify(state.cartItems));
            localStorage.setItem('cart-length', JSON.stringify(state.cartLength));
            localStorage.setItem('total-price', JSON.stringify(state.totalPrice));
            localStorage.setItem('total-price-item', JSON.stringify(state.totalPriceItem));
            return state;
        case REMOVE_PRODUCT:
            newCartItems = [...state.cartItems];
            newCartItems.splice(action.payload, 1);
            newCartLength = newCartItems.reduce((total, item) => total += item.quantity, 0)
            newTotalPrice = newCartItems.reduce((total, item) => {
                const priceItems = handlePriceStringToNumber(item.totalPrice);
                return total += priceItems;
            }, 0)
            state = {
                ...state,
                cartItems: [...newCartItems],
                cartLength: newCartLength,
                totalPrice: handleFormatPrice(newTotalPrice)
            }
            localStorage.setItem('cart-items', JSON.stringify(newCartItems));
            localStorage.setItem('cart-length', JSON.stringify(state.cartLength));
            localStorage.setItem('total-price', JSON.stringify(state.totalPrice));
            return state;
        case INCREASE:
            newCartLength = state.cartItems.reduce((total, item, index) => {
                if (index === action.payload) {
                    total += item.quantity;
                    item.quantity = total;
                    // handle quantity increse price increse
                    const price = handlePriceStringToNumber(item.price);
                    state.totalPriceItem += price;
                    item.totalPrice = handleFormatPrice(state.totalPriceItem);
                    localStorage.setItem('total-price-item', JSON.stringify(state.totalPriceItem))
                }
                return total;
            }, 1)

            newTotalPrice = state.cartItems.reduce((total, item) => {
                const priceItems = handlePriceStringToNumber(item.totalPrice);
                total += priceItems;
                return total;
            }, 0)
            state = {
                ...state,
                cartLength: newCartLength,
                totalPrice: handleFormatPrice(newTotalPrice),
            }
            localStorage.setItem('cart-items', JSON.stringify(state.cartItems));
            localStorage.setItem('cart-length', JSON.stringify(state.cartLength));
            localStorage.setItem('total-price', JSON.stringify(state.totalPrice));
            return state;
        case DECREASE:

            break;
        case RENDER_CART_LIST:
            const getCartItems = localStorage.getItem('cart-items');
            const parseCartItems = JSON.parse(getCartItems) || [];
            const getCartLength = localStorage.getItem('cart-length');
            const parseCartLength = JSON.parse(getCartLength);
            const getTotalPrice = localStorage.getItem('total-price');
            const parseTotalPrice = JSON.parse(getTotalPrice);
            const getTotalPriceItem = localStorage.getItem('total-price-item');
            const parseTotalPriceItem = JSON.parse(getTotalPriceItem);
            return {
                ...state,
                cartItems: parseCartItems,
                cartLength: parseCartLength,
                totalPrice: parseTotalPrice,
                totalPriceItem: parseTotalPriceItem
            }
        default:
            return state;
    }
}
export default reducer;