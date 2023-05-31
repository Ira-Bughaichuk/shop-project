import React  from 'react'
import s from './MainShop.module.scss';

import { baseUrl } from './../../constants';


function MainShop({selectedArray}) {
  //const [arrShop, setArrShop] = useState([]);
  //const allMenu = useSelector(selectAllMenu);
  //console.log("allMenu", allMenu);

// const arrMCDonal = allMenu?.filter(item=>item.store === "MCDonald's");

 //console.log("selectedArray", selectedArray);
  
  return (
    <div className={s.containerMain}>
            <div className={s.list}>
            {selectedArray && selectedArray.map(({_id,name,price,img}) => (
              <div className={s.item} key={_id}>
                <img src={`${baseUrl}/${img}`} alt="dish" className={s.image} />
                <div className={s.description}>
                  <p className={s.title}>{name}</p>
                  <p className={s.price}>Price: <span>{price}</span></p>
                  <button className={s.btn}> add to Cart</button>
                </div> 
              </div>
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