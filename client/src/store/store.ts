import { configureStore } from '@reduxjs/toolkit';

import shopCategoryReducer from './actions/shopCategorySlicer';
import sortedBySlice from './actions/sortedBySlicer';
import orderSlice from './actions/orderSlicer';

export const store = configureStore({
  reducer: {
    activeShopCategory: shopCategoryReducer,
    sortedBy: sortedBySlice,
    order: orderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
