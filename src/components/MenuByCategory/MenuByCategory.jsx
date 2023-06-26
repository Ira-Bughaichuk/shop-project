import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectAllMenu } from "../../redux/shop/shopSelectot";
import Card from "../Card/Card";
import s from "./MenuByCategory.module.scss";

function MenuByCategory() {
  const { category } = useParams();
  const menu = useSelector(selectAllMenu);
  const menuCategory = menu?.filter((item) => item.store === category);

  return (
    <ul className={s.list}>
      {menuCategory?.length === 0 ? (
        <p className={s.text}>Select one of the categories</p>
      ) : (
        menuCategory?.map((item) => (
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

export default MenuByCategory;
