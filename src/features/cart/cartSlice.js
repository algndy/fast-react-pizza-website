import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.unitPrice * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.unitPrice * item.quantity;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});
export default cartSlice.reducer;
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

// export const getTotalCartQuantity = (state) =>
//   state.cart.cart
// export const getTotalCartPrice = (state) =>
//   state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getCart = (state) => state.cart.cart;
export const getTotalCartQuantity = createSelector(getCart, (cart) =>
  cart.reduce((sum, item) => sum + item.quantity, 0),
);
export const getTotalCartPrice = createSelector(getCart, (cart) =>
  cart.reduce((sum, item) => sum + item.totalPrice, 0),
);
export const getItemExistence = (id) =>
  createSelector(getCart, (cart) => cart.some((item) => item.pizzaId === id));
export const getItemQuantity = (id) =>
  createSelector(
    getCart,
    (cart) => cart.find((item) => item.pizzaId === id).quantity,
  );
