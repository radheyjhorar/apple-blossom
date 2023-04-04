import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import api from '../../api/API';



const NewCustomerPaymentHistory = () => {

  const navigate = useNavigate();

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

  const [newCustomerPaymentHistory, setNewCustomerPaymentHistory] = useState({
    customer_id: "",
    payment_date: "",
    deposit_amount: "",
    resipte_no: ""
  });


  const handleChange = e => {

    const { name, value } = e.target;
    setNewCustomerPaymentHistory({
      ...newCustomerPaymentHistory,
      [name]: value
    })
  };

  const addNewCustomerPaymentHistory = async () => {

    // notify('Adding New Customer Payment History', 1000);

    const response = await api.post('/customer-payment-history', newCustomerPaymentHistory);
    if (response.statusText === "OK") {
      console.log(response);
      // notify('Added New Customer Payment Sucessfully', 2000);
      //setToken(response.data, response.data.accessToken);
      // setTimeout(function () {
        navigate('/customer-payment-history')
      // }, 2500);
    }


  };



  return (
    <>
      <ToastContainer />
      <div class="col-7 c-7-d mx-auto bg-pic h-30 text-center my-5">
        <h1 class="h4 my-apk-clr mt-5">Add New Customer Payment History</h1>

        <div class="text-center">
          <input type="number" class="col-7 vndr-ipt my-4 d-inline-block" placeholder="Customer ID" name="customer_id" value={newCustomerPaymentHistory.customer_id} onChange={handleChange} />
          <input type="date" class="col-7 vndr-ipt d-inline-block" placeholder="Payment Date" name="payment_date" value={newCustomerPaymentHistory.payment_date} onChange={handleChange} />
          <input type="number" class="col-7 vndr-ipt my-4 d-inline-block" placeholder="Deposit Amount" name="deposit_amount" value={newCustomerPaymentHistory.deposit_amount} onChange={handleChange} />
          <input type="number" class="col-7 vndr-ipt d-inline-block" placeholder="Resipte No" name="resipte_no" value={newCustomerPaymentHistory.resipte_no} onChange={handleChange} />
          <div class="">
            <button type="submit" class="btn sbmt-btn px-4 text-white my-apk-clr-bg text-end mt-5" onClick={addNewCustomerPaymentHistory}>Submit</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default NewCustomerPaymentHistory;  