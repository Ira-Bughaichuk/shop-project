import React  from 'react'
import s from './MainShop.module.scss';

import { baseUrl } from './../../constants';
import {  useDispatch } from 'react-redux';
import { getProductByIdThunk } from '../../redux/shop/shopThunk';



function MainShop({selectedArray}) {
  const dispatch =useDispatch();
//   const allMenu = useSelector(selectAllMenu);
// const arrMCDonal = allMenu?.filter(item=>item.store === "MCDonald's");
 //console.log("selectedArray", selectedArray);
 



 const handleAddToOrder=(_id)=>{
  dispatch(getProductByIdThunk(_id));
 }
  
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
              

            
            {/* <div className={s.item}>
                <img src={minImg} alt="dish" className={s.image} />
                <div className={s.description}>
                <p className={s.title}>name</p>
                <p className={s.price}>Price: <span>120</span></p>
                <button className={s.btn}> add to Cart</button>
                </div>
            </div> */}
           
            </div>
       
    </div>
  )
}

export default MainShop