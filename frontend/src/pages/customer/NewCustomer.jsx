import React, { Component } from 'react';
import Services from './Services';
import AdmissionOpen from './AdmissionOpen';
import { Jobs } from '../../components';
import FeaturedSchools from './FeaturedSchools';
import TopSchools from './TopSchools';
import SchoolSupplies from './SchoolSupplies';
import NewsArticle from '../../components/NewsArticle';
import './home.css';
import InSpotLight from './InSpotlight';
import api from '../../api/API';
import { Seo } from '../../_shared';


const NewCustomer = () => {


  return (
    <>
       <h1 className="offset-2 h4 my-apk-clr mt-5">New Customer</h1>
                <form action="">
                    <div className="text-center">
                        <input type="text" className="col-4 vndr-ipt my-4 d-inline-block" placeholder="Customer Name" />
                        <input type="number" minlength="10" maxlength="10" className="col-4 vndr-ipt my-4 d-inline-block" placeholder="Mobile 1" />
                        <input type="text" className="col-4 vndr-ipt d-inline-block" placeholder="City" />
                        <input type="number" minlength="10" min="10" max="10" maxlength="10" className="col-4 vndr-ipt d-inline-block" placeholder="Mobile 2"/>
                        <input type="text" className="col-8 my-4 vndr-ipt d-inline-block" placeholder="State"/>
                        <input type="text" className="col-8 mb-4 vndr-ipt d-inline-block" placeholder="Customer Address" />
                        <input type="number" minlength="10" maxlength="10" className="col-8 vndr-ipt mb-5 d-inline-block" placeholder="Ledger No." />
                        
                        <div className="">
                            <button type="submit" className="btn sbmt-btn px-4 mb-5 text-white my-apk-clr-bg text-center">Submit</button>
                        </div>
                    </div>
                    
                </form>
    </>
  );
}

export default NewCustomer;  