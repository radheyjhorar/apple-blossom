import React, { useState } from 'react';

import api from '../../api/API';


const NewCustomer = () => {


  const [newCustomer, setNewCustomer] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    mobile1: "",
    mobile2: "",
    ledger_no: ""
  });


  const handleChange = e => {

    const { name, value } = e.target;
    setNewCustomer({
      ...newCustomer,
      [name]: value
    })
  }

  return (
    <>
      <div class="col-7 c-7-d mx-auto bg-pic">
        <h1 class="offset-2 h4 my-apk-clr mt-5">New Customer</h1>

        <div class="text-center">
          <div>
            <input type="text" class="col-4 vndr-ipt my-4 d-inline-block" placeholder="Customer Name" name="name" value={newCustomer.name} onChange={handleChange} />
            <input type="number" class="col-4 vndr-ipt my-4 d-inline-block" name='mobile1' placeholder="Mobile 1" value={newCustomer.mobile1} onChange={handleChange} />
          </div>
          <input type="text" class="col-4 vndr-ipt d-inline-block" name='city' placeholder="City" value={newCustomer.city} onChange={handleChange} />
          <input type="number" minlength="10" min="10" max="10" maxlength="10" class="col-4 vndr-ipt d-inline-block" name='mobile2' placeholder="Mobile 2" value={newCustomer.mobile2} onChange={handleChange}/>
          <input type="text" class="col-8 my-4 vndr-ipt d-inline-block" name='state' placeholder="State" value={newCustomer.state} onChange={handleChange}/>
          <input type="text" class="col-8 mb-4 vndr-ipt d-inline-block" placeholder="Customer Address" name='address' value={newCustomer.address} onChange={handleChange}/>
          <input type="number" minlength="10" maxlength="10" class="col-8 vndr-ipt mb-5 d-inline-block" name='ledger_no' placeholder="Ledger No." value={newCustomer.ledger_no} onChange={handleChange}/>

          <div class="">
            <button type="submit" class="btn sbmt-btn px-4 mb-5 text-white my-apk-clr-bg text-center">Submit</button>
          </div>
        </div>


      </div>
    </>
  );
}

export default NewCustomer;  