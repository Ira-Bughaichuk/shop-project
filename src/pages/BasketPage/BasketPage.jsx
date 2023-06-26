import React from "react";
import BasketShop from "../../components/BasketShop/BasketShop";

import s from "./BasketPage.module.scss";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectBasketDate } from "../../redux/shop/shopSelectot";
import { addOrderThunk } from "../../redux/shop/shopThunk";

const BasketPage = () => {
  const dispatch = useDispatch();
  const [map, setMap] = useState(null);
  const [prise, setPrise] = useState(null);
  const [date, setDate] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
 
  const basketDate = useSelector(selectBasketDate);

  useEffect(() => {
    if (basketDate) {
      if (basketDate?.total === 0) {
        setPrise(0);
      }
      setPrise(basketDate.total);
    }
  }, [basketDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const allObj = {
      order: [{ ...basketDate.quantity }],
      total: basketDate.total,
      ...date,
      map,
    };
    dispatch(addOrderThunk(allObj));
    reset();
  };
  const reset = () => {
    setDate({
      name: "",
      email: "",
      phone: "",
      address: "",
    });
   
  };
  return (
    <div className={s.containerPage}>
      <div className={s.sectionForm}>
        <form className={s.formList}>
          <div className={s.overInput}>
            <label htmlFor="name" className={s.label}>
              Name:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={date.name}
              className={s.input}
              onChange={handleChange}
            />
          </div>

          <div className={s.overInput}>
            <label htmlFor="email" className={s.label}>
              Email:
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value={date.email}
              className={s.input}
              onChange={handleChange}
            />
          </div>

          <div className={s.overInput}>
            <label htmlFor="phone" className={s.label}>
              Phone:
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Phone"
              name="phone"
              value={date.phone}
              className={s.input}
              onChange={handleChange}
            />
          </div>

          <div className={s.overInput}>
            <label htmlFor="address" className={s.label}>
              Address:
            </label>
            <input
              id="address"
              type="url"
              placeholder="Address"
              name="address"
              value={date.address}
              className={s.input}
              onChange={handleChange}
            />
          </div>
        </form>
      </div>
      <div className={s.sectionBasket}>
      <BasketShop />
      <div className={s.boxTotal}>
          <p className={s.prise}>
            Total price: <span>{prise}</span>
          </p>
          <button className={s.btn} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;
