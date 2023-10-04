import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      // Check if product already in cart
      const existingProduct = state.find((x) => x.id === product.id);

      // if (existingProduct) {
      //   existingProduct.qty += 1;
      // } else {
      //   state.push({ ...product, qty: 1 });
      // }

      existingProduct
        ? existingProduct.qty += 1
        : state.push({ ...product, qty: 1 });
    },
    removeFromCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.find((x) => x.id === product.id);
      existingProduct.qty === 1
        ? state.splice(state.indexOf(existingProduct), 1)
        : (existingProduct.qty -= 1);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
