import { createSlice } from "@reduxjs/toolkit";
import { getAllMenuThunk, getProductByIdThunk } from './shopThunk';

const initialState = {
    allMenu: [],
    ordersId:[],
    products:[],
    formDate:null,
    basketDate:null,
    // date: null,
    // productsId:[],
    // orders:[],
    isLoading: false,
}

const handlePending = state => {
    state.isLoading = true;
  };
  const handleRejected = state => {
    state.isLoading = false;
  };

 const shopSlice = createSlice({
    name: "shop",
  initialState,
  reducers:{
    orderIdList(state, { payload }) {
      state.ordersId = payload;
    },
    changeForm(state, { payload }) {
      state.formDate = payload;
    },
    changeBasket(state, { payload }) {
      state.basketDate = payload;
    },
  },
    extraReducers: builder =>{
        builder
        .addCase(getAllMenuThunk.pending, handlePending)
        .addCase(getAllMenuThunk.rejected, handleRejected)
        .addCase(getAllMenuThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.allMenu =  payload;
          })
          .addCase(getProductByIdThunk.pending, handlePending)
          .addCase(getProductByIdThunk.rejected, handleRejected)
          .addCase(getProductByIdThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
             if(!(state.products.find(item=> item._id === payload._id))){
              state.products = [...state.products, payload]
            }
           
          })
         
    },
});

export const { orderIdList, changeForm, changeBasket } = shopSlice.actions;
export const shopReducer = shopSlice.reducer;