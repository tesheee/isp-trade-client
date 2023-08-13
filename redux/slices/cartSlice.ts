import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export interface ICartItem {
      _id: number;
      category: string;
      color: string;
      description: string;
      gender: string;
      images: string[];
      material: string;
      name: string;
      price: number;
      size: string;
      quantity: number;
}

// Define a type for the slice state
interface IProducts {
      products: ICartItem[];
      totalPrice: number;
}

// Define the initial state using that type
const initialState: IProducts = {
      products: [],
      totalPrice: 0,
}

export const cartSlice = createSlice({
      name: 'cart',
      initialState,
      reducers: {
            addCartProduct: (state, action) => {
                  const findItem = state.products.find((product) => (product._id && product.size) === (action.payload._id && action.payload.size));

                  if (!findItem) {
                        state.products.push(action.payload);
                  } else {
                        findItem.quantity++;
                  }

                  state.totalPrice = state.products.reduce((acc, product) => {
                        return (product.price * product.quantity) + acc;
                  }, 0);
            },
            removeCartProduct: (state, action) => {
                  const findItem = state.products.find((product) => product._id === action.payload._id);

                  if (findItem) {
                        state.products = state.products.filter((product) => product._id !== findItem._id);
                  }
            }
      },
})

export const { addCartProduct, removeCartProduct } = cartSlice.actions;

export default cartSlice.reducer;