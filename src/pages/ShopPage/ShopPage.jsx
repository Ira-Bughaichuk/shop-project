import React, { useState } from 'react'
import MainShop from '../../components/MainShop/MainShop'
import SideBar from '../../components/SideBar/SideBar'
import s from './ShopPage.module.css';
function ShopPage() {
  const [selectedArray, setSelectedArray] = useState([]);

  return (
    <div className={s.containerPage}>
      <SideBar setSelectedArray={setSelectedArray}/>
      <MainShop selectedArray={selectedArray}/>
    </div>
  )
}

export default ShopPage