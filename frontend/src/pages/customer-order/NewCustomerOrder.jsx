import React, { Component } from 'react';

import api from '../../api/API';


const NewCustomerOrder = () => {


  return (
    <>
      <div class="col-7 c-7-d mx-auto bg-pic">
        <h1 class="offset-2 h4 my-apk-clr mt-5">New Customer Order</h1>
        <form action="">
          <div class="text-center">
            <input type="number" class="col-7 vndr-ipt my-4 d-inline-block" placeholder="Customer ID" />
            <input type="text" class="col-7 vndr-ipt d-inline-block" placeholder="Order Description" />
            <input type="number" class="col-7 my-4 vndr-ipt d-inline-block" placeholder="Total Amount" />
            <input type="text" class="col-7  vndr-ipt d-inline-block" placeholder="Order Status" />
            <div class="mt-5">
              <button type="submit" class="btn sbmt-btn px-4 mb-5 text-white my-apk-clr-bg text-center">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewCustomerOrder;  