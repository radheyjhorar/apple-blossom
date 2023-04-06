import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import api from '../../api/API';


const NewCustomerOrder = (props) => {

  const navigate = useNavigate();

  const { customerOrderId } = useParams();

  const notify = (msg, time) => toast.info(msg, {
    position: "top-right",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
  });

  const [newCustomerOrder, setNewCustomerOrder] = useState({
    id: customerOrderId || 0,
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

  const saveCustomerOrder = () => {
    if (customerOrderId > 0) {
      updateCustomerOrder();
    } else {
      addNewCustomerOrder();
    }
  }

  const addNewCustomerOrder = async () => {
    notify('Adding New Order', 1000);
    const response_customer_order = await api.post('/customer-order', newCustomerOrder);
    if (response_customer_order.statusText === "OK") {
      console.log(response_customer_order);
      notify('Added New Order Sucessfully', 1000);
      //setToken(response.data, response.data.accessToken);
      setTimeout(function () {
      navigate('/customer-order')
      }, 1000);
    }
  };

  const updateCustomerOrder = async () => {
    notify('Updating Customer Order Data', 1000);
    const response_cust_order = await api.put('/customer-order/' + newCustomerOrder.id, newCustomerOrder);
    if (response_cust_order.statusText === "OK") {
      console.log(response_cust_order);
      notify('Updated Customer Order Sucessfully', 1000);
      //setToken(response.data, response.data.accessToken);
      setTimeout(function () {
        navigate('/customer-order')
      }, 1000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (customerOrderId > 0) {
        const response_customer_order = await api.get('/customer-order/' + customerOrderId);
        if (response_customer_order.statusText === "OK") {
          setNewCustomerOrder(response_customer_order.data);
        }
      }
    };
    fetchData();

  }, [customerOrderId]);


  return (
    <>
      <div className='col-9 mx-auto'>
        <div class="col-12 c-7-d mx-auto bg-pic bg-clr py-5 my-4">
          <h1 class="offset-2 h4 text-white fw-bold">{ customerOrderId > 0?'Update':'New'} Customer Order</h1>
          <div class="text-center">
            <input type="number" class="col-8 vndr-ipt my-4 d-inline-block" placeholder="Customer ID" name='customer_id' value={newCustomerOrder.customer_id} onChange={handleChange} />
            <input type="text" class="col-8 vndr-ipt d-inline-block" placeholder="Order Description" name='order_description' value={newCustomerOrder.order_description} onChange={handleChange} />
            {/* <input type="number" class="col-7 my-4 vndr-ipt d-inline-block" placeholder="Total Amount" name='total_amount' value={newCustomerOrder.total_amount} onChange={handleChange} /> */}
            <input type="text" class="col-8 my-4  vndr-ipt d-inline-block" placeholder="Order Status" name='order_status' value={newCustomerOrder.order_status} onChange={handleChange} />
            <div class="mt-4 mx-auto">
              <button type="submit" class="btn sbmt-btn px-4 text-white" onClick={saveCustomerOrder}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default NewCustomerOrder;  