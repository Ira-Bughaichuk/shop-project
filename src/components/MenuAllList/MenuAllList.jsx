import React from "react";
import { useSelector } from "react-redux";
import { selectAllMenu } from "../../redux/shop/shopSelectot";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import s from "./MenuAllList.module.scss";

function MenuAllList() {
  const menu = useSelector(selectAllMenu);

  return (
    <ul className={s.list}>
      {menu.length < 0 ? (
        <Loader />
      ) : (
        menu?.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))
      )}
    </ul>
  );
}

export default MenuAllList;
