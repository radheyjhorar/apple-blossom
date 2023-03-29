import React, { useState } from 'react';

import api from '../../api/API';

const NewVendor = () => {


  const [newVendor, setNewVendor] = useState({
    vendor_name: "",
    vendor_address: "",
    city: "",
    state: "",
    mobile1: "",
    mobile2: "",
  });


  const handleChange = e => {

    const { name, value } = e.target;
    setNewVendor({
      ...newVendor,
      [name]: value
    })
  }


  return (
    <>
      <div class="col-7 c-7-d mx-auto bg-pic">
        <h1 class="offset-2 h4 my-apk-clr mt-5">New Vendor</h1>
        <form action="">
          <div class="text-center">
            <input type="text" class="col-4 vndr-ipt my-4 d-inline-block" placeholder="Vendor Name" name="vendor_name" value={newVendor.vendor_name} onChange={handleChange}/>
            <input type="number" minlength="10" maxlength="10" class="col-4 vndr-ipt my-4 d-inline-block" placeholder="Mobile 1" name="mobile1" value={newVendor.mobile1} onChange={handleChange}/>
            <input type="text" class="col-4 vndr-ipt d-inline-block" placeholder="City" name="city" value={newVendor.city} onChange={handleChange}/>
            <input type="number" minlength="10" min="10" max="10" maxlength="10" class="col-4 vndr-ipt d-inline-block" placeholder="Mobile 2" name="mobile2" value={newVendor.mobile2} onChange={handleChange}/>
            <input type="text" class="col-8 my-4 vndr-ipt d-inline-block" placeholder="State" name="state" value={newVendor.state} onChange={handleChange}/>
            <input type="text" class="col-8 mb-4 vndr-ipt d-inline-block" placeholder="Vendor Address" name="vendor_address" value={newVendor.vendor_address} onChange={handleChange}/>

            <div class="">
              <button type="submit" class="btn sbmt-btn px-4 text-white my-apk-clr-bg text-end mt-5">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewVendor;  