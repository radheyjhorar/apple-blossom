import React, { Component } from 'react';

import api from '../../api/API';



const NewVendorStock = () => {


  return (
    <>
      <div class="col-7 c-7-d mx-auto bg-pic">
        <h1 class="offset-2 h4 my-apk-clr mt-5">Vendor New Stock</h1>
        <form action="">
          <div class="text-center">
            <input type="number" class="col-4 vndr-ipt d-inline-block" placeholder="Vendor ID" />
            <input type="number" class="col-4 vndr-ipt d-inline-block" placeholder="Rate" />
            <input type="number" class="col-4 vndr-ipt d-inline-block" placeholder="Quantity" />
            <input type="number" class="col-4 my-4 vndr-ipt d-inline-block" placeholder="Amount" />
            <input type="text" class="col-8 vndr-ipt d-inline-block" placeholder="Description" />
            <input type="date" class="col-8 my-4 vndr-ipt d-inline-block" placeholder="Stock Date" />
            <div class="mt-5">
              <button type="submit" class="btn sbmt-btn px-4 mb-5 text-white my-apk-clr-bg text-center">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default NewVendorStock;  