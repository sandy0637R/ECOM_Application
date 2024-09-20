
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const addToWishlist = (product) => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});

export const removeFromCart = (product) => ({
    type: REMOVE_FROM_CART,
    payload: product,
  });
  
export const removeFromWishlist = (product) => ({
    type: REMOVE_FROM_WISHLIST,
    payload: product,
  });
