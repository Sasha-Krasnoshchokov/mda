import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IShopCategory {
  id: string;
}

const initialState: IShopCategory = {
  id: 'drugs',
};

export const shopCategorySlice = createSlice({
  name: 'shopCategory',
  initialState,
  reducers: {
    setShopCategory: (state, action: PayloadAction<IShopCategory>) => {
      state.id = action.payload.id;
    },
    resetShopCategory: (state) => {
      state.id = initialState.id;
    },
  },
});

export const { setShopCategory, resetShopCategory } = shopCategorySlice.actions;

export default shopCategorySlice.reducer;
