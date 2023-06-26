import { createAsyncThunk } from "@reduxjs/toolkit";
import Notiflix from 'notiflix';

import {
  addOrder,
  getAllMenu,
  getProductById,
  getOrderById,
} from "./../../service/service";

export const getAllMenuThunk = createAsyncThunk(
  "menu/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getAllMenu();
      return data;
    } catch {
      Notiflix.Notify.failure("Server error")
      return rejectWithValue("Error fetch");
    }
  }
);

//for bascket
export const getProductByIdThunk = createAsyncThunk(
  "menu/getProductId",
  async (_id, { rejectWithValue }) => {
    try {
      const data = await getProductById(_id);
      return data;
    } catch {
      Notiflix.Notify.failure("Not have products")
      return rejectWithValue();
    }
  }
);

///after submit
export const addOrderThunk = createAsyncThunk(
  "menu/postOrder",
  async (cred, { rejectWithValue }) => {
    try {
      const data = await addOrder(cred);
      return data;
    } catch {
      Notiflix.Notify.failure("Incorrectly entered data into the form")
      return rejectWithValue();
    }
  }
);

//for order
export const getOrderByIdThunk = createAsyncThunk(
  "menu/getOrderId",
  async (_id, { rejectWithValue }) => {
    try {
      const data = await getOrderById(_id);
      return data;
    } catch {
      return rejectWithValue();
    }
  }
);
