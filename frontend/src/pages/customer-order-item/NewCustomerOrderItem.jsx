import React, { useState } from 'react';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import api from '../../api/API';

const NewCustomerOrderItem = () => {

  const navigate = useNavigate();

  // const { customerOrderItemId } = useParams();

  // const notify = (msg, time) => toast.info(msg, {
  //   position: "top-right",
  //   autoClose: time,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "colored"
  // });

  const [newCustomerOrderItem, setNewCustomerOrderItem] = useState({
    order_id: "",
    item_name: "",
    item_rate: "",
    quantity: "",
    amount: 0,
    item_status: ""
  });


  const handleChange = e => {

    const { name, value } = e.target;
    setNewCustomerOrderItem({
      ...newCustomerOrderItem,
      [name]: value
    })
  };

  const addNewCustomerOrderItem = async () => {
    //notify('Adding New Customer Order Item', 1000);
    const response = await api.post('/customer-order-item', newCustomerOrderItem);
    if (response.statusText === "OK") {
      console.log(response);
      //notify('Added New Item Sucessfully', 2000);
      //setToken(response.data, response.data.accessToken);
      //setTimeout(function () {
        navigate('/customer-order-item')
      //}, 2500);
    }


  };

  return (
    <>
      <div className='col-9 mx-auto'>
      <div class="col-12 c-7-d mx-auto bg-pic h-30 my-5 pt-1 bg-clr ">
        <h1 class="offset-2 h4 text-white fw-bold mt-5 mb-4">New Customer Order Item</h1>
        <div class="text-center">
          <div>
            <input type="number" class="col-4 me-1 vndr-ipt my-4 d-inline-block" placeholder="Order ID" name="order_id" value={newCustomerOrderItem.order_id} onChange={handleChange} />
            <input type="text" class="col-4 vndr-ipt my-4 d-inline-block" placeholder="Item Name" name="item_name" value={newCustomerOrderItem.item_name} onChange={handleChange} />
          </div>
          <div>
            <input type="number" class="col-4 me-1 vndr-ipt d-inline-block" placeholder="Item Rate" name="item_rate" value={newCustomerOrderItem.item_rate} onChange={handleChange} />
            <input type="number" class="col-4 vndr-ipt d-inline-block" placeholder="Quantity" name="quantity" value={newCustomerOrderItem.quantity} onChange={handleChange} />
          </div>
          <input type="number" class="col-8 my-4 vndr-ipt d-inline-block" placeholder="Amount" name="amount" value={newCustomerOrderItem.amount} onChange={handleChange} />
          <input type="text" class="col-8 mb-4 vndr-ipt d-inline-block" placeholder="Item status" name="item_status" value={newCustomerOrderItem.item_status} onChange={handleChange} />

          <div class="">
            <button type="submit" class="btn sbmt-btn px-4 text-white text-end mt-4" onClick={addNewCustomerOrderItem}>Submit</button>
          </div>
        </div>
      </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default NewCustomerOrderItem;  