import React, { useState } from 'react';

import api from '../../api/API';

const NewVendorPaymentHistory = () => {


  const [newVendorPaymentHistory, setNewVendorPaymentHistory] = useState({
    vendor_id: "",
    payment_date: "",
    deposit_amount: "",
    resipte_no: ""
  });


  const handleChange = e => {

    const { name, value } = e.target;
    setNewVendorPaymentHistory({
      ...newVendorPaymentHistory,
      [name]: value
    })
  };

  const addNewVendorPaymentHistory = async () => {

    const response = await api.post('/vendor-payment-history', newVendorPaymentHistory);
    if (response.statusText === "OK") {
      console.log(response);
      //setToken(response.data, response.data.accessToken);
      //navigate('/')

    }

  };


  return (
    <>
      <div class="col-7 c-7-d mx-auto bg-pic h-30 text-center">
        <h1 class="h4 my-apk-clr my-5">Vendor Payment History</h1>
 
          <div class="text-center">
            <input type="number" class="col-7 vndr-ipt mb-4 d-inline-block" placeholder="Vendor ID" name="vendor_id" value={newVendorPaymentHistory.vendor_id} onChange={handleChange} />
            <input type="date" class="col-7 vndr-ipt d-inline-block" placeholder="Payment Date" name="payment_date" value={newVendorPaymentHistory.payment_date} onChange={handleChange} />
            <input type="number" class="col-7 vndr-ipt my-4 d-inline-block" placeholder="Deposit Amount" name="deposit_amount" value={newVendorPaymentHistory.deposit_amount} onChange={handleChange} />
            <input type="number" class="col-7 vndr-ipt d-inline-block" placeholder="Resipte No" name="resipte_no" value={newVendorPaymentHistory.resipte_no} onChange={handleChange} />
            <div class="">
              <button type="submit" class="btn sbmt-btn px-4 text-white my-apk-clr-bg text-end mt-5" onClick={ addNewVendorPaymentHistory }>Submit</button>
            </div>
          </div>
  
      </div>
    </>
  );
}

export default NewVendorPaymentHistory;  