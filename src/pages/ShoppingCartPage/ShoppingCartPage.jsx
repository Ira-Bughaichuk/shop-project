import React from 'react'
import BasketShop from './../../components/BasketShop/BasketShop';
import Form from './../../components/Form/Form';
import s from './ShoppingCartPage.module.scss';
import { useState } from 'react';

const ShoppingCartPage = () => {
  const [date, setDate] =useState(null);
const[prise, setPrise] =useState(null);

  const formSubmit = dateForm => {
    console.log("dateForm",dateForm);
    // setDate(dateForm);
  }
  return (
    <div className={s.containerPage}>
      <Form onSubmit={formSubmit}/>
      <BasketShop/>
      <div className={s.boxOverlay}>
      <div className={s.boxTotal}>
              <p className={s.price}>Total price: <span>2500</span></p>
              <button className={s.btn}>Submit</button>
            </div>
      </div>
      
    </div>
  )
}

export default ShoppingCartPage
