import React, { useState, useEffect } from "react";
import s from "./BasketShop.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPoductsId, selectProducts } from "../../redux/shop/shopSelectot";
import { baseUrl } from "./../../constants";
import { getProductByIdThunk } from "../../redux/shop/shopThunk";
import { changeBasket } from "../../redux/shop/shopSlice";

function BasketShop() {
  const [quentyity, setQuentyity] = useState({});
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();
  const productsId = useSelector(selectAllPoductsId);
  const products = useSelector(selectProducts);

  useEffect(() => {
    if (productsId?.length > 0) {
      productsId.map((item) => dispatch(getProductByIdThunk(item)));
    }
  }, [dispatch, productsId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuentyity((prevQuentyity) => ({
      ...prevQuentyity,
      [name]: value,
    }));
  };
  useEffect(() => {
    let sum = 0;
    products.forEach((product) => {
      const quantity = Number(quentyity[product._id]) || 1;
      sum += product.price * quantity;
    });
    setTotal(sum);
    
    //dispatch(changeBasket({quentyity, sum}))
//dispatch,
  }, [ products, quentyity]);

  console.log("total", total);
//
  // const objBasket ={
  //   quentyity,
  //   total
  // }
 

  return (
    <div className={s.sectionBasket}>
      <div className={s.boxes}>
        <div className={s.basketList}>
          {products?.length === 0 ? (
            <p className={s.text}>Your shopping cart is empty</p>
          ) : (
            products?.map(({ _id, img, name, price }) => (
              <form className={s.item} key={_id}>
                <img src={`${baseUrl}/${img}`} alt="dish" className={s.image} />
                <div className={s.description}>
                  <p className={s.title}>{name}</p>
                  <p className={s.price}>
                    Price: <span>{price}</span>
                  </p>
                  <input
                    min={0}
                    type="number"
                    placeholder="Quantity"
                    name={_id}
                    value={quentyity[_id] || ""}
                    onChange={handleChange}
                    className={s.input}
                  />
                </div>
              </form>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default BasketShop;
