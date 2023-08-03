import React, { useState } from "react";

const Hooks = () => {
  const [contact, setContact] = useState({
    fname: "",
    lname: "",
    mail: "",
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
  if(value.trim()){
    setContact((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }
    
  };

  return (
    <div className=" container text-center p-0 ">
      <div className="row d-flex flex-column vh-100 align-items-center justify-content-center ">
        <h1>
          Hello{contact.fname} {contact.lname}
        </h1>
        <p>{contact.mail}</p>
        <div className=" col-lg-3 col-8 px-3  border border-muted rounded-3 py-3">
          <input
            className="form-control mb-3"
            type="text"
            name="fname"
            placeholder="Fname"
            value={contact.fname}
            onChange={handleChange}
          />
          <input
            className="form-control mb-3"
            type="text"
            name="lname"
            placeholder="Lname"
            value={contact.lname}
            onChange={handleChange}
          />
          <input
            className="form-control mb-3"
            type="email"
            name="mail"
            placeholder="Email"
            value={contact.mail}
            onChange={handleChange}
            required
          />

          <button className="btn btn-success form-control">ADD</button>
        </div>
      </div>
    </div>
  );
};

export default Hooks;
