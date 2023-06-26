import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsActive } from "../../redux/shop/shopSelectot";
import { changeIsActive } from "../../redux/shop/shopSlice";
import s from "./Header.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const isActive = useSelector(selectIsActive);
  const dispatch = useDispatch();

  const toggleIsActive = () => {
    dispatch(changeIsActive(!isActive));
    console.log("toggleIsActive", isActive);
  };
  
  return (
    <div className={s.headerContainer}>
      <nav>
        <NavLink to="/shop" className={s.link}>
          Shop
        </NavLink>
        <NavLink to="/shoppingCart" className={s.link}>
          Shopping Cart
        </NavLink>
      </nav>
      <button className={s.headerbtn} onClick={() => toggleIsActive()}>
        {isActive ? (
          <MenuIcon  className={s.icon} />
        ) : (
          <CloseIcon className={s.icon} />
        )}
      </button>
    </div>
  );
}

export default Header;
