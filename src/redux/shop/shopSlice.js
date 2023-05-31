import { createSlice } from "@reduxjs/toolkit";
import { addOrderThunk, getAllMenuThunk, getOrderByIdThunk } from './shopThunk';

const initialState = {
    allMenu: [],
    date: null,
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
          .addCase(addOrderThunk.pending, handlePending)
          .addCase(addOrderThunk.rejected, handleRejected)
          .addCase(addOrderThunk.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.date =  payload;
          })
          .addCase(getOrderByIdThunk.pending, handlePending)
          .addCase(getOrderByIdThunk.rejected, handleRejected)
          .addCase(getOrderByIdThunk.fulfilled, (state, { payload }) => {
            console.log(payload);
            state.isLoading = false;
            //state.orders =  payload;
          })
    },
});


export const shopReducer = shopSlice.reducer;