import React, { Component } from 'react';

import api from '../../api/API';



const NewVendorPaymentHistory = () => {


  return (
    <>
      <div class="col-7 c-7-d mx-auto bg-pic">
        <h1 class="offset-2 h4 my-apk-clr mt-5">Vendor Payment History</h1>
        <form action="">
          <div class="text-center">
            <input type="number" class="col-7 vndr-ipt my-4 d-inline-block" placeholder="Vendor ID" />
            <input type="date" class="col-7 vndr-ipt d-inline-block" placeholder="Payment Date" />
            <input type="number" class="col-7 vndr-ipt my-4 d-inline-block" placeholder="Deposit Amount" />
            <input type="number" class="col-7 vndr-ipt d-inline-block" placeholder="Resipte No" />
            <div class="">
              <button type="submit" class="btn sbmt-btn px-4 text-white my-apk-clr-bg text-end mt-5">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewVendorPaymentHistory;  