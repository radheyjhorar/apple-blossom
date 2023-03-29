import React, { Component } from 'react';

import api from '../../api/API';



const NewCustomerOrderItem = () => {


  return (
    <>
      <div class="col-7 c-7-d mx-auto bg-pic">
        <h1 class="offset-2 h4 my-apk-clr mt-5">New Customer Order Item</h1>
        <form action="">
          <div class="text-center">
            <input type="number" class="col-4 vndr-ipt my-4 d-inline-block" placeholder="Order ID" />
            <input type="text" class="col-4 vndr-ipt my-4 d-inline-block" placeholder="Item Name" />
            <input type="number" class="col-4 vndr-ipt d-inline-block" placeholder="Item Rate" />
            <input type="number" class="col-4 vndr-ipt d-inline-block" placeholder="Quantity" />
            <input type="number" class="col-8 my-4 vndr-ipt d-inline-block" placeholder="Amount" />
            <input type="text" class="col-8 mb-4 vndr-ipt d-inline-block" placeholder="item_status" />

            <div class="">
              <button type="submit" class="btn sbmt-btn px-4 text-white my-apk-clr-bg text-end mt-5">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewCustomerOrderItem;  