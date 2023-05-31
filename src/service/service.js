import axios from 'axios';

export const shopsService = axios.create({
    baseURL: 'https://shop-foods.onrender.com',
  });

export const getAllMenu = async () => {
    const { data } = await shopsService.get('api/foods');
    return data;
  };
  export const addOrder = async (credentials) => {
    const { data } = await shopsService.post('api/orders', credentials); //body register user правильне тіло запиту
    return data;
  };
  export const getOrderById = async id => {
    const { data } = await shopsService.get(`api/orders/${id}`);
    return data;
  };