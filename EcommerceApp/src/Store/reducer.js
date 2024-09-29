import { SET_PRODUCTS, ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST } from './action';

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

    case ADD_TO_CART: {
      const existingCartItem = state.cart.find(item => item.title === action.payload.title);
      if (existingCartItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.title === action.payload.title
              ? { ...item, quantity: item.quantity + 1 } // Increment quantity
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }], // Add new item with quantity
      };
    }

    case ADD_TO_WISHLIST: {
      const existingWishlistItem = state.wishlist.find(item => item.title === action.payload.title);
      if (!existingWishlistItem) {
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
        };
      }
      return state; // Do nothing if item already exists in wishlist
    }

    case REMOVE_FROM_CART: {
      const existingCartItem = state.cart.find(item => item.title === action.payload.title);
      if (existingCartItem) {
        if (existingCartItem.quantity > 1) {
          return {
            ...state,
            cart: state.cart.map(item =>
              item.title === action.payload.title
                ? { ...item, quantity: item.quantity - 1 } // Decrement quantity
                : item
            ),
          };
        }
      }
      // If quantity is 1, remove item completely
      return {
        ...state,
        cart: state.cart.filter(item => item.title !== action.payload.title),
      };
    }

    case REMOVE_FROM_WISHLIST: {
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.title !== action.payload.title),
      };
    }

    default:
      return state;
  }
};

export default reducer;
