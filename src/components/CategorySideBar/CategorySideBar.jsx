import React from "react";
import { NavLink } from "react-router-dom";
import s from "./CategorySideBar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectAllMenu, selectIsActive } from "../../redux/shop/shopSelectot";
import { changeIsActive } from "../../redux/shop/shopSlice";

function CategorySideBar() {
  const menu = useSelector(selectAllMenu);
  const categories = [...new Set(menu.map((item) => item.store))];
  const isActive = useSelector(selectIsActive);

  const dispatch = useDispatch();

  const toggleIsActive = () => {
    dispatch(changeIsActive(!isActive));
  };

  return (
    <aside className={ isActive ? `${s.sectionSidebar}` : `${s.sectionSidebar} ${s.active}` }
      onClick={() => toggleIsActive()}
    >
      <div className={s.sidebarList}>
        <p className={s.title}>Shops:</p>
        {categories?.map((category, indx) => (
          <div key={indx}>
            <NavLink to={`/shop/${category}`} className={s.link}>
              {category}
            </NavLink>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default CategorySideBar;
