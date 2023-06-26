import React, { useState, useEffect } from "react";
import s from "./BasketShop.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPoductsId,
  selectProducts,
} from "../../redux/shop/shopSelectot";
import { baseUrl } from "./../../constants";
import { getProductByIdThunk } from "../../redux/shop/shopThunk";
import { changeBasket, delateProduct } from "../../redux/shop/shopSlice";
import ClearIcon from "@mui/icons-material/Clear";

function BasketShop() {
  const [quantity, setQuantyity] = useState({});
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
    setQuantyity((prevQuantyity) => ({
      ...prevQuantyity,
      [name]: value,
    }));
  };

  useEffect(() => {
    let sum = 0;
    products.forEach((product) => {
      const count = Number(quantity[product._id]) || 1;
      sum += product.price * count;
      setTotal(sum);
    });
    dispatch(changeBasket({ quantity, total }));
  }, [dispatch, products, quantity, total]);

  useEffect(() => {
    products.forEach((product) => {
      setQuantyity((prevQuantyity) => ({
        ...prevQuantyity,
        [product._id]: 1,
      }));
    });
  }, [products]);

  const handleDelate = (id) => {
    const newArray = products.filter((item) => item._id !== id);
    dispatch(delateProduct(newArray))
  };

  return (
    <div className={s.basket}>
      <div className={s.basketList}>
        {products?.length === 0 ? (
          <p className={s.text}>Your shopping cart is empty</p>
        ) : (
          products?.map(({ _id, img, name, price }) => (
            <div className={s.item} key={_id}>
              <button
                className={s.buttonClear}
                onClick={() => handleDelate(_id)}
              >
                <ClearIcon className={s.icon} />
              </button>
              <img src={`${baseUrl}/${img}`} alt="dish" className={s.image} />
              <div className={s.description}>
                <p className={s.title}>{name}</p>
                <p className={s.price}>
                  Price: <span>{price}</span>
                </p>
                <input
                  min={0}
                  type="number"
                  placeholder="Quantyity"
                  name={_id}
                  value={quantity[_id] || ""}
                  onChange={handleChange}
                  className={s.input}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BasketShop;
