import axios from "axios";

export const shopsService = axios.create({
  baseURL: "https://shop-foods.onrender.com",
});

export const getAllMenu = async () => {
  const { data } = await shopsService.get("api/foods");
  return data;
};

export const getProductById = async (id) => {
  const { data } = await shopsService.get(`api/foods/${id}`);
  return data;
};

//for submit
export const addOrder = async (credentials) => {
  const { data } = await shopsService.post("api/orders", credentials);
  return data;
};

//for order
export const getOrderById = async (id) => {
  const { data } = await shopsService.get(`api/orders/${id}`);
  return data;
};
