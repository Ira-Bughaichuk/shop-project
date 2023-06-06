import React from "react";
import BasketShop from "./../../components/BasketShop/BasketShop";
import Form from "./../../components/Form/Form";
import s from "./ShoppingCartPage.module.scss";
import { useState } from "react";
import { useSelector } from 'react-redux';
import { selectFormDate } from "../../redux/shop/shopSelectot";
import { selectBasketDate } from './../../redux/shop/shopSelectot';

const ShoppingCartPage = () => {
  const [date, setDate] = useState(null);
  const [prise, setPrise] = useState(null);
 
 const formDate = useSelector(selectFormDate);
 const basketDate = useSelector(selectBasketDate)
console.log("formDate", formDate);
console.log("basketDate", basketDate);


  return (
    <div className={s.containerPage}>
      <Form />
      <BasketShop />
      <div className={s.boxOverlay}>
        <div className={s.boxTotal}>
          <p className={s.price}>
            Total price: <span>{prise}</span>
          </p>
          <button className={s.btn}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
