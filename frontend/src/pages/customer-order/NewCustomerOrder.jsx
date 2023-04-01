import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import api from '../../api/API';


const NewCustomerOrder = () => {

  const navigate = useNavigate();

  // const notify = (msg, time) => toast.info(msg, {
  //   position: "top-right",
  //   autoClose: time,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "dark"
  // });

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
    // notify('Adding New Order', 500);
    const response = await api.post('/customer-order', newCustomerOrder);
    if (response.statusText === "OK") {
      console.log(response);
      // notify('Added New Order Sucessfully', 1000);
      //setToken(response.data, response.data.accessToken);
      // setTimeout(function () {
        navigate('/customer-order')
      // }, 2500);
    }


  };


  return (
    <>
    <ToastContainer />
      <div class="col-7 c-7-d mx-auto bg-pic my-5">
        <h1 class="offset-2 h4 my-apk-clr mt-5">New Customer Order</h1>
        <div class="text-center">
          <input type="number" class="col-7 vndr-ipt my-4 d-inline-block" placeholder="Customer ID" name='customer_id' value={newCustomerOrder.customer_id} onChange={handleChange} />
          <input type="text" class="col-7 vndr-ipt d-inline-block" placeholder="Order Description" name='order_description' value={newCustomerOrder.order_description} onChange={handleChange} />
          <input type="number" class="col-7 my-4 vndr-ipt d-inline-block" placeholder="Total Amount" name='total_amount' value={newCustomerOrder.total_amount} onChange={handleChange} />
          <input type="text" class="col-7  vndr-ipt d-inline-block" placeholder="Order Status" name='order_status' value={newCustomerOrder.order_status} onChange={handleChange} />
          <div class="mt-5">
            <button type="submit" class="btn sbmt-btn px-4 mb-5 text-white my-apk-clr-bg text-center" onClick={addNewCustomerOrder}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewCustomerOrder;  