import React, { useState } from "react";

import s from "./Form.module.scss";


function Form({onSubmit}) {
  const [date, setDate]=useState({
    name:"",
    email:"",
    phone:"",
    address:""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDate(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(date);
   
  };


  return (
    <div className={s.sectionForm}>
      <form className={s.formList} onSubmit={handleSubmit}>
        <div className={s.overInput}>
        <label  htmlFor="name" className={s.label}> Name: </label>
        <input
        id="name"
          type="text"
          placeholder="Name"
          name="name"
          value={date.name}
          className={s.input}
          onChange={handleChange}
        />
        </div>
        
        <div className={s.overInput}>
          <label htmlFor="email" className={s.label}> Email: </label>
          <input
          id="email"    
           type="email"
            placeholder="Email"
            name="email"
            value={date.email}
            className={s.input}
            onChange={handleChange}
          />
        </div>

        <div className={s.overInput}>
          <label htmlFor="phone" className={s.label}> Phone: </label>
          <input
          id="phone"
            type="tel"
            placeholder="Phone"
            name="phone"
            value={date.phone}
            className={s.input}
            onChange={handleChange}
          />
        </div>

        <div className={s.overInput}>
          <label   htmlFor="address" className={s.label}> Address: </label>
          <input
           id="address"
            type="url"
            placeholder="Address"
            name="address"
            value={date.address}
            className={s.input}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
