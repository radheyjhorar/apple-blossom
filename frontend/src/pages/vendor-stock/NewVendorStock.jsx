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
  };

  const addNewvendorStock = async () => {

    const response = await api.post('/vendor-stock', newVendorStock);
    if (response.statusText === "OK") {
      console.log(response);
      //setToken(response.data, response.data.accessToken);
      //navigate('/')

    }


  };


  return (
    <>
      <div class="col-7 c-7-d mx-auto bg-pic my-5">
        <h1 class="offset-2 h4 my-apk-clr mt-5">Vendor New Stock</h1>
        
          <div class="text-center">
            <div className='mt-5'>
            <input type="number" class="col-4 vndr-ipt me-1 d-inline-block" placeholder="Vendor ID" name="vendor_id" value={newVendorStock.vendor_id} onChange={handleChange} />
            <input type="number" class="col-4 vndr-ipt d-inline-block" placeholder="Rate" name="rate" value={newVendorStock.rate} onChange={handleChange} />
            </div>
            <div className='my-4'>
            <input type="number" class="col-4 vndr-ipt me-1 d-inline-block" placeholder="Quantity" name="quantity" value={newVendorStock.quantity} onChange={handleChange} />
            <input type="date" class="col-4 vndr-ipt d-inline-block" placeholder="Stock Date" name="stock_date" value={newVendorStock.stock_date} onChange={handleChange} />
            </div>
            <input type="number" class="col-8 mb-4 vndr-ipt d-inline-block" placeholder="Amount" name="amount" value={newVendorStock.amount} onChange={handleChange} />
            <input type="text" class="col-8 vndr-ipt d-inline-block" placeholder="Description" name="description" value={newVendorStock.description} onChange={handleChange} />
            <div class="mt-5">
              <button type="submit" class="btn sbmt-btn px-4 mb-5 text-white my-apk-clr-bg text-center" onClick={ addNewvendorStock }>Submit</button>
            </div>
          </div>
       
      </div>
    </>
  );
}

export default NewVendorStock;  