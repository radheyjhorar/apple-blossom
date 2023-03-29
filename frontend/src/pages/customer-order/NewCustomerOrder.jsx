import React, { useState } from 'react';

import api from '../../api/API';


const NewCustomerOrder = () => {


  const [newCustomerOrder, setNewCustomerOrder] = useState({
    customer_id: "",
    order_description: "",
    total_amount: "",
    order_status: ""
  });


  const handleChange = e => {

    const { name, value } = e.target;
    setNewCustomerOrder({
      ...newCustomerOrder,
      [name]: value
    })
  };

  const addNewCustomerOrder = async () => {

    const response = await api.post('/customer-order', newCustomerOrder);
    if (response.statusText === "OK") {
      console.log(response);
      //setToken(response.data, response.data.accessToken);
      //navigate('/')

    }


  };


  return (
    <>
      <div class="col-7 c-7-d mx-auto bg-pic">
        <h1 class="offset-2 h4 my-apk-clr mt-5">New Customer Order</h1>
        <form action="">
          <div class="text-center">
            <input type="number" class="col-7 vndr-ipt my-4 d-inline-block" placeholder="Customer ID" name='customer_id' value={newCustomerOrder.customer_id} onChange={handleChange} />
            <input type="text" class="col-7 vndr-ipt d-inline-block" placeholder="Order Description" name='order_description' value={newCustomerOrder.order_description} onChange={handleChange}/>
            <input type="number" class="col-7 my-4 vndr-ipt d-inline-block" placeholder="Total Amount" name='total_amountr' value={newCustomerOrder.total_amount} onChange={handleChange}/>
            <input type="text" class="col-7  vndr-ipt d-inline-block" placeholder="Order Status" name='order_status' value={newCustomerOrder.order_status} onChange={handleChange}/>
            <div class="mt-5">
              <button type="submit" class="btn sbmt-btn px-4 mb-5 text-white my-apk-clr-bg text-center" onClick={ addNewCustomerOrder }>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewCustomerOrder;  