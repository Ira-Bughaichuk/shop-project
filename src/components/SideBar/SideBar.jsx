import React, { useState } from 'react'
import { NavLink} from 'react-router-dom';
import s from './SideBar.module.scss';
import { useSelector } from 'react-redux';
import { selectAllMenu } from './../../redux/shop/shopSelectot';

function SideBar({setSelectedArray}) {
  const allMenu = useSelector(selectAllMenu);

  // const uniqueArray = allMenu?.reduce((acc, value) => {
  //   if (!acc.includes(value.store)) {
  //     acc.push(value.store);
  //   }
  //   return acc;
  // }, []);

  //console.log(uniqueArray);
  //console.log("allMenu", allMenu);
// const allStore = allMenu?.filter(({store})=> store ===)

const arrMCDonal = allMenu?.filter(item=>item.store === "MCDonald's");
const arrCFS = allMenu?.filter(item=>item.store === "CFS");
const arrBigBurger = allMenu?.filter(item=>item.store === "Big Burger")
const arrBurgerPizza = allMenu?.filter(item=>item.store === "Burger Pizza Loft")

// console.log("arrMCDonal", arrMCDonal);
// console.log("arrCFS ", arrCFS );
// console.log("arrBigBurger", arrBigBurger);
// console.log("arrBurgerPizza ", arrBurgerPizza);

const handleLinkArr = (array) => {
  setSelectedArray(array);
};

  return (
    <aside className={s.sectionSidebar}>
      <div className={s.sidebarList}>
      <p className={s.title}>Shops:</p>

      {/* {uniqueArray && uniqueArray.map((store, indx) => 
        <NavLink  to={`${store}`} key={indx} className={s.link}>{store}</NavLink>)} */}
      
        <NavLink to="/" onClick={() => handleLinkArr(arrMCDonal)} className={s.link}>MCDonald's</NavLink>
        <NavLink to="/"  onClick={() => handleLinkArr(arrCFS)} className={s.link}>CFS</NavLink>
        <NavLink to="/"  onClick={() => handleLinkArr(arrBigBurger)} className={s.link}>Big Burger</NavLink>
        <NavLink to="/"  onClick={() => handleLinkArr(arrBurgerPizza )} className={s.link}>Burger Pizza Loft</NavLink>
        </div>
    </aside>
  )
}

export default SideBar;
