import React, { useState } from "react";
import { nanoid } from 'nanoid';
import s from "./Form.module.scss";


function Form({onSubmit}) {
  

  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [phone, setPhone]=useState("")
  const [address, setAddress]=useState("")


  const handleChange = (e) => {
    const {name, value } = e.target;
    console.log("name, value",name, value);

    // setName(value);
    // setEmail(value);
    // setPhone(value);
    // setAddress(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({name, email,phone, address});
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };
  
  const nameInputId = nanoid();
  const emailInputId = nanoid();
  const phoneInputId = nanoid();
  const addressInputId = nanoid();

  return (
    <div className={s.sectionForm}>
      <form className={s.formList} onSubmit={handleSubmit}>
        <div className={s.overInput}>
        <label  htmlFor={nameInputId} className={s.label}> Name: </label>
        <input
        id={nameInputId}
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          className={s.input}
          onChange={handleChange}
        />
        </div>
        
        <div className={s.overInput}>
          <label htmlFor={emailInputId} className={s.label}> Email: </label>
          <input
          id={emailInputId}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
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
            value={phone}
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
            value={address}
            className={s.input}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
