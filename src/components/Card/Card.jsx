import React from "react";
import s from "./Card.module.scss";

import { baseUrl } from "./../../constants";
import { useDispatch,useSelector } from "react-redux";
import { orderIdList } from "../../redux/shop/shopSlice";
import { useEffect } from "react";
import { useState } from "react";
import { selectAllPoductsId } from "../../redux/shop/shopSelectot";

const Card = ({ id, img, name, price }) => {
const dispatch = useDispatch();
const listId = useSelector(selectAllPoductsId)

  const handleAddToOrder = (id) => {
    if (!listId?.includes(id)) {
      dispatch(orderIdList(id)) 
    }
  };

  return (
    <li className={s.item}>
      <img src={`${baseUrl}/${img}`} alt="dish" className={s.image} />
      <div className={s.description}>
        <p className={s.title}>{name}</p>
        <p className={s.price}>
          Price: <span>{price}</span>
        </p>
        <button className={s.btn} onClick={() => handleAddToOrder(id)}>
          add to Cart
        </button>
      </div>
    </li>
  );
};

export default Card;
