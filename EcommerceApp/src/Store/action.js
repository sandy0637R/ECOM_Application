// Define and export action type constants
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

// Action to trigger the saga
export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

// Action to set products in the store (this will be dispatched by the saga)
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

// Action to add a product to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Action to add a product to the wishlist
export const addToWishlist = (product) => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});

// Action to remove a product from the cart
export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});

// Action to remove a product from the wishlist
export const removeFromWishlist = (product) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: product,
});
