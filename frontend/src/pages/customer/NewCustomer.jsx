import React, { Component } from 'react';

import api from '../../api/API';


const NewCustomer = () => {


  return (
    <>
      <div class="col-7 c-7-d mx-auto bg-pic">
        <h1 className="offset-2 h4 my-apk-clr mt-5">New Customer</h1>
        <form action="">
          <div className="text-center">
            <input type="text" className="col-4 vndr-ipt my-4 d-inline" placeholder="Customer Name" />
            <input type="number" minlength="10" maxlength="10" className="col-4 vndr-ipt my-4 d-inline" placeholder="Mobile 1" />
            <input type="text" className="col-4 vndr-ipt d-block" placeholder="City" />
            <input type="number" minlength="10" min="10" max="10" maxlength="10" className="col-4 vndr-ipt d-block" placeholder="Mobile 2" />
            <input type="text" className="col-8 my-4 vndr-ipt d-block" placeholder="State" />
            <input type="text" className="col-8 mb-4 vndr-ipt d-block" placeholder="Customer Address" />
            <input type="number" minlength="10" maxlength="10" className="col-8 vndr-ipt mb-5 d-block" placeholder="Ledger No." />

            <div className="">
              <button type="submit" className="btn sbmt-btn px-4 mb-5 text-white my-apk-clr-bg text-center">Submit</button>
            </div>
          </div>

        </form>
      </div>
    </>
  );
}

export default NewCustomer;  