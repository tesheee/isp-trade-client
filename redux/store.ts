import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';
import searchReducer from './slices/searchSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
      reducer: {
            cart: cartReducer,
            user: userReducer,
            search: searchReducer
      },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;