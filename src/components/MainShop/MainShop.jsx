import React, { useState, useEffect }  from 'react'
import s from './MainShop.module.scss';

import { baseUrl } from './../../constants';
import {  useDispatch } from 'react-redux';
import { orderIdList } from '../../redux/shop/shopSlice';




function MainShop({selectedArray}) {
  const [orderList, setOrderList] = useState([]) //arr unic id
  const dispatch = useDispatch();
//   const allMenu = useSelector(selectAllMenu);
// const arrMCDonal = allMenu?.filter(item=>item.store === "MCDonald's");
 //console.log("selectedArray", selectedArray);
 
useEffect(() => {
  if(orderList?.length > 0){
     dispatch(orderIdList(orderList))
  }  
}, [dispatch, orderList])


 const handleAddToOrder=(id)=>{
  if(!orderList?.includes(id)){
    setOrderList(prevState => [...prevState, id])
  }
 }
 console.log("orderList", orderList);

 
  
  return (
    <div className={s.containerMain}>
            <div className={s.list}>
            {selectedArray?.length === 0 ? (<p className={s.text}>Select one of the categories</p>) : (selectedArray?.map(item => (
              <div className={s.item} key={item._id}>
                <img src={`${baseUrl}/${item.img}`} alt="dish" className={s.image} />
                <div className={s.description}>
                  <p className={s.title}>{item.name}</p>
                  <p className={s.price}>Price: <span>{item.price}</span></p>
                  <button className={s.btn} onClick={()=>handleAddToOrder(item._id)}> add to Cart</button>
                </div> 
              </div>) 
            ))}  
           
            </div>
       
    </div>
  )
}

export default MainShop