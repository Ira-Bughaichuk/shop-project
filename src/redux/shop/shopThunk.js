import { createAsyncThunk } from "@reduxjs/toolkit";

import { addOrder, getAllMenu, getOrderById } from './../../service/service';

export const getAllMenuThunk = createAsyncThunk(
  "menu/fetchAll",
  async (_, {rejectWithValue}) => {
    try {
        const data = await getAllMenu();
        //console.log("getAllMenu",data);
        return data
    } catch {
      return rejectWithValue("Error fetch");
    }
  }
);

export const addOrderThunk = createAsyncThunk(
    "menu/postOrder",
    async (cred, {rejectWithValue}) => {
      try {
          const data = await addOrder(cred);
          console.log("addOrder", data);
          return data
      } catch {
        return rejectWithValue();
      }
    }
  );

  export const getOrderByIdThunk = createAsyncThunk(
    "menu/getOrderId",
    async (id, {rejectWithValue}) => {
      try {
          const data = await getOrderById(id);
          console.log("getOrderById",data);
          return data
      } catch {
        return rejectWithValue();
      }
    }
  );
  
