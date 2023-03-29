import React, { useState } from 'react';

import api from '../../api/API';



const NewVendorStock = () => {


  const [newVendorStock, setNewVendorStock] = useState({
    vendor_id: "",
    description: "",
    rate: "",
    quantity: "",
    amount: "",
    stock_date: ""
  });


  const handleChange = e => {

    const { name, value } = e.target;
    setNewVendorStock({
      ...newVendorStock,
      [name]: value
    })
  }


  return (
    <>
      <div class="col-7 c-7-d mx-auto bg-pic">
        <h1 class="offset-2 h4 my-apk-clr mt-5">Vendor New Stock</h1>
        <form action="">
          <div class="text-center">
            <input type="number" class="col-4 vndr-ipt d-inline-block" placeholder="Vendor ID" name="vendor_id" value={newCustomer.vendor_id} onChange={handleChange} />
            <input type="number" class="col-4 vndr-ipt d-inline-block" placeholder="Rate" name="rate" value={newCustomer.rate} onChange={handleChange} />
            <input type="number" class="col-4 vndr-ipt d-inline-block" placeholder="Quantity" name="quantity" value={newCustomer.quantity} onChange={handleChange} />
            <input type="number" class="col-4 my-4 vndr-ipt d-inline-block" placeholder="Amount" name="amount" value={newCustomer.amount} onChange={handleChange} />
            <input type="text" class="col-8 vndr-ipt d-inline-block" placeholder="Description" name="description" value={newCustomer.description} onChange={handleChange} />
            <input type="date" class="col-8 my-4 vndr-ipt d-inline-block" placeholder="Stock Date" name="stock_date" value={newCustomer.stock_date} onChange={handleChange} />
            <div class="mt-5">
              <button type="submit" class="btn sbmt-btn px-4 mb-5 text-white my-apk-clr-bg text-center">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewVendorStock;  