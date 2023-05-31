import React, { useState } from "react";
import { nanoid } from 'nanoid';
import s from "./Form.module.scss";
import { addOrderThunk } from "../../redux/shop/shopThunk";
import { useDispatch } from 'react-redux';


function Form() {
  const [date, setDate]=useState({
    name: '',
  email: '',
  phone: '',
  address: '',
  })


  const dispatch =useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDate((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addOrderThunk(date));
    setDate({
      name: '',
      email: '',
      password: ''
    });
  };
  
  const nameInputId = nanoid();
  const numberInputId = nanoid();
  const phoneInputId = nanoid();
  const addressInputId = nanoid();

  return (
    <div className={s.sectionForm}>
      <form className={s.formList}>
        <div className={s.overInput}>
        <label  htmlFor={nameInputId} className={s.label}> Name: </label>
        <input
        id={nameInputId}
          type="text"
          placeholder="Name"
          name="name"
          value="name"
          className={s.input}
          onChange={handleChange}
        />
        </div>
        
        <div className={s.overInput}>
          <label htmlFor={numberInputId} className={s.label}> Email: </label>
          <input
          id={numberInputId}
            type="email"
            placeholder="Email"
            name="email"
            value="email"
            className={s.input}
            onChange={handleChange}
          />
        </div>

        <div className={s.overInput}>
          <label htmlFor={phoneInputId} className={s.label}> Phone: </label>
          <input
          id={phoneInputId}
            type="tel"
            placeholder="Phone"
            name="phone"
            value="phone"
            className={s.input}
            onChange={handleChange}
          />
        </div>

        <div className={s.overInput}>
          <label   htmlFor={addressInputId} className={s.label}> Address: </label>
          <input
           id={addressInputId}
            type="url"
            placeholder="Address"
            name="address"
            value="address"
            className={s.input}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
