import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ID, IOrderProduct, IUserOrder } from '../../types/types';

export const defaultOrderUser: IUserOrder = {
  userName: '',
  userEmail: '',
  userPhone: '',
  userAddress: '',
};
export interface IOrder {
  id: ID;
  user: IUserOrder;
  products: IOrderProduct[];
  totalPrice: number;
}
export type UserParam = { key: string; value: string };
const initialState: IOrder = {
  id: 'order_id',
  user: { ...defaultOrderUser },
  products: [],
  totalPrice: 0,
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setOrder: (state, action: PayloadAction<IOrder>) => {
      state.id = action.payload.id;
      state.user = action.payload.user;
      state.products = [...action.payload.products];
    },
    setProduct: (state, action: PayloadAction<IOrderProduct>) => {
      const isExist = !!state.products.find((item) => item.productId === action.payload.productId);
      if (isExist) return;
      state.products.push(action.payload);
      state.totalPrice += action.payload.product.price;
    },
    resetProducts: (state, action: PayloadAction<IOrderProduct[]>) => {
      state.products = [...action.payload];
      let sum = 0;
      action.payload.forEach((item) => (sum += item.totalSum));
      state.totalPrice = sum;
    },
    setOrderProductCount: (state, action: PayloadAction<{ id: ID; value: number }>) => {
      const orderProduct = state.products.find(
        (item: IOrderProduct) => item.productId === action.payload.id
      );

      if (!orderProduct) return;
      const newProductTotalPrice = action.payload.value * orderProduct.product.price;
      state.totalPrice -= orderProduct.totalSum - newProductTotalPrice;
      orderProduct.countOfProduct = action.payload.value;
      orderProduct.totalSum = newProductTotalPrice;
    },
    removeProduct: (state, action: PayloadAction<ID>) => {
      const currentProduct = state.products.find((item) => item.productId === action.payload);
      state.products = [
        ...state.products.filter((product) => product.productId !== action.payload),
      ];
      if (currentProduct) {
        state.totalPrice -= currentProduct.totalSum;
      }
    },
    setUser: (state, action: PayloadAction<UserParam>) => {
      state.user = {
        ...state.user,
        [action.payload.key]: action.payload.value,
      };
    },
    resetOrder: (state) => {
      state.id = initialState.id;
      state.user = { ...initialState.user };
      state.products = [...initialState.products];
      state.totalPrice = 0;
    },
  },
});

export const {
  setOrder,
  setUser,
  resetOrder,
  setProduct,
  removeProduct,
  setOrderProductCount,
  resetProducts,
} = orderSlice.actions;

export default orderSlice.reducer;
