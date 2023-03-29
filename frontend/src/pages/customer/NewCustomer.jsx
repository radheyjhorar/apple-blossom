import React, { Component } from 'react';

import api from '../../api/API';


const NewCustomer = () => {


  return (
    <>
     <div class="col-7 c-7-d mx-auto bg-pic">
                <h1 class="offset-2 h4 my-apk-clr mt-5">New Customer</h1>

                    <div class="text-center">
                      <div>
                        <input type="text" class="col-4 vndr-ipt my-4 d-inline-block" placeholder="Customer Name" />
                        <input type="number" minlength="10" maxlength="10" class="col-4 vndr-ipt my-4 d-inline-block" placeholder="Mobile 1" />
                        </div>
                        <input type="text" class="col-4 vndr-ipt d-inline-block" placeholder="City" />
                        <input type="number" minlength="10" min="10" max="10" maxlength="10" class="col-4 vndr-ipt d-inline-block" placeholder="Mobile 2" />
                        <input type="text" class="col-8 my-4 vndr-ipt d-inline-block" placeholder="State" />
                        <input type="text" class="col-8 mb-4 vndr-ipt d-inline-block" placeholder="Customer Address" />
                        <input type="number" minlength="10" maxlength="10" class="col-8 vndr-ipt mb-5 d-inline-block" placeholder="Ledger No." />
                        
                        <div class="">
                            <button type="submit" class="btn sbmt-btn px-4 mb-5 text-white my-apk-clr-bg text-center">Submit</button>
                        </div>
                    </div>
                   
           
            </div>
    </>
  );
}

export default NewCustomer;  