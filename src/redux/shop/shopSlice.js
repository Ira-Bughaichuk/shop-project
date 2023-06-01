import { createSlice } from "@reduxjs/toolkit";
import { getAllMenuThunk, getProductByIdThunk } from './shopThunk';

const initialState = {
    allMenu: [],
    date: null,
    productsId:[],
    orders:[],
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
            //console.log("getProductByIdThunk", payload); 
            //зробитит масив обєктів через фільтер
            state.productsId=  [...state.productsId,payload]
           
         
          })
         
    },
});


export const shopReducer = shopSlice.reducer;