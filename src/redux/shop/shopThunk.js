import { createAsyncThunk } from "@reduxjs/toolkit";

import {  getAllMenu, getProductById } from './../../service/service';

export const getAllMenuThunk = createAsyncThunk(
  "menu/fetchAll",
  async (_, {rejectWithValue}) => {
    try {
        const data = await getAllMenu();
        return data
    } catch {
      return rejectWithValue("Error fetch");
    }
  }
);

//for bascket
  export const getProductByIdThunk = createAsyncThunk(
    "menu/getProductId",
    async (_id, {rejectWithValue}) => {
      try {
          const data = await getProductById(_id);
          return data
      } catch {
        return rejectWithValue();
      }
    }
  );
  
//  //for order
//  export const getOrderByIdThunk = createAsyncThunk(
//   "menu/getOrderId",
//   async (_id, {rejectWithValue}) => {
//     try {
//         const data = await getOrderById(_id);
//         return data
//     } catch {
//       return rejectWithValue();
//     }
//   }
// );
//   ///after submit
// export const addOrderThunk = createAsyncThunk(
//   "menu/postOrder",
//   async (cred, {rejectWithValue}) => {
//     try {
//         const data = await addOrder(cred);
//         console.log("addOrder", data);
//         return data
//     } catch {
//       return rejectWithValue();
//     }
//   }
// );
  
