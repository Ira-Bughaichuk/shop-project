import React, {useState} from 'react'
import s from './BasketShop.module.scss'
import { useSelector } from 'react-redux';
import { selectAllPoductsId } from '../../redux/shop/shopSelectot';
import { baseUrl } from './../../constants';

function BasketShop() {
const [quentyity, setQuentyity] = useState("")

  const products = useSelector(selectAllPoductsId);
 console.log("products", products);

//  const array = products?.reduce((acc, product) => {
//     if (!acc.includes(product.name)) {
//       acc.push(product);
//     }
//     console.log("acc", acc);
//     return acc;
//   }, []);

//   console.log("arrrrrrrrrrrrr",array);


//  const arr = products.reduce((newArr,product)=>{
 
//   if(!product._id === newArr._id)
//   newArr.push(product)
//   //console.log("newArr", newArr);

//   return newArr
//  },[])
//  console.log("arr", arr);
const handleChange = e=>{
  const {name, value} = e.target;
  setQuentyity({[name]:value})
}

const handleTotal = ()=>{

}
  return (

    <div className={s.sectionBasket}>
      <div className={s.boxes}>
        <div className={s.basketList}>
        {products?.length === 0 ? (<p className={s.text}>Your shopping cart is empty</p>) : (products?.map(({_id, img,name, price}) =>(
        <div className={s.item} key={_id}>
                <img  src={`${baseUrl}/${img}`} alt="dish" className={s.image} />
                <div className={s.description}>
                <p className={s.title}>{name}</p>
                <p className={s.price}>Price: <span>{price}</span></p>
                <input min={0} type="number" placeholder="Quantity"  name="quentyity" value={quentyity} onChange={handleChange} className={s.input} />
                </div>
            </div>
            )))}
        </div>
       
            </div>
    </div>
  )
}

export default BasketShop