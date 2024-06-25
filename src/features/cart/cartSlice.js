import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload is newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload is pizzaId
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incItemQty(state, action) {
      // payload is pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decItemQty(state, action) {
      // payload is pizzaId
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      if (item.quantity > 0) item.totalPrice = item.quantity * item.unitPrice;
      else cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      if (confirm("Are you sure you want to remove everything?"))
        state.cart = [];
    },
    orderPlaced(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  incItemQty,
  decItemQty,
  clearCart,
  orderPlaced,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;
export const getQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const getNumPizzas = (state) =>
  state.cart.cart.reduce((total, pizza) => total + pizza.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((total, pizza) => total + pizza.totalPrice, 0);

// "reselect library"
