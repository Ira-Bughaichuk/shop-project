import { createSlice } from "@reduxjs/toolkit";
import { getAllMenuThunk, getProductByIdThunk } from "./shopThunk";

const initialState = {
  allMenu: [],
  ordersId: [],
  products: [],
  basketDate: null,
  selectedCategory:[],
  isLoading: false,
  isActive: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state) => {
  state.isLoading = false;
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    setCategory(state, {payload}){
      state.selectedCategory = payload;
    },
    orderIdList(state, { payload }) {
      state.ordersId = [...state.ordersId, payload];
    },
    changeBasket(state, { payload }) {
      state.basketDate = payload;
    },
    delateProduct(state, {payload}){
      state.products = payload
    },
    changeIsActive(state, {payload}){
      state.isActive = payload 
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMenuThunk.pending, handlePending)
      .addCase(getAllMenuThunk.rejected, handleRejected)
      .addCase(getAllMenuThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.allMenu = payload;
      })
      .addCase(getProductByIdThunk.pending, handlePending)
      .addCase(getProductByIdThunk.rejected, handleRejected)
      .addCase(getProductByIdThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        if (!state.products.find((item) => item._id === payload._id)) {
          state.products = [...state.products, payload];
        }
      })
    }
});

export const { orderIdList, changeBasket, delateProduct, changeIsActive } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;
