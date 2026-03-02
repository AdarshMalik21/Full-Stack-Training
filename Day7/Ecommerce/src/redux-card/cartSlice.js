import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.products.find(
        (item) => item.id === product.id,
      );

      if (existingItem) {
        existingItem.quantity += 1;
        return;
      }
      console.log(product);
      state.products.push({ ...product, quantity: 1 });
      console.log("line 24", product);
    },
    increase: (state, action) => {
      const item = state.products.find(
        (product) => product.id === action.payload,
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrease: (state, action) => {
      const item = state.products.find(
        (product) => product.id === action.payload,
      );
      if (item) {
        item.quantity -= 1;
      }
    },
    remove: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { addToCart, increase, decrease, remove } = cartSlice.actions;
export default cartSlice.reducer;
