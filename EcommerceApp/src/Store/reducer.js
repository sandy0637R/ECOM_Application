// reducer.js
import { SET_PRODUCTS, ADD_TO_CART, ADD_TO_WISHLIST,REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from './action';

const initialState = {
  products: [],
  cart: [],
  wishlist: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.title !== action.payload.title),
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.title !== action.payload.title),
      };
    default:
      return state;
  }
};

export default reducer;
