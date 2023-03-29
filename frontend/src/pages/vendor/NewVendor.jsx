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


const NewVendor = () => {


  return (
    <>
       <h1 class="offset-2 h4 my-apk-clr mt-5">New Vendor</h1>
                <form action="">
                    <div class="text-center">
                        <input type="text" class="col-4 vndr-ipt my-4 d-inline-block" placeholder="Vendor Name"/>
                        <input type="number" minlength="10" maxlength="10" class="col-4 vndr-ipt my-4 d-inline-block" placeholder="Mobile 1"/>
                        <input type="text" class="col-4 vndr-ipt d-inline-block" placeholder="City"/>
                        <input type="number" minlength="10" min="10" max="10" maxlength="10" class="col-4 vndr-ipt d-inline-block" placeholder="Mobile 2"/>
                        <input type="text" class="col-8 my-4 vndr-ipt d-inline-block" placeholder="State"/>
                        <input type="text" class="col-8 mb-4 vndr-ipt d-inline-block" placeholder="Vendor Address"/>
                        
                        <div class="">
                            <button type="submit" class="btn sbmt-btn px-4 text-white my-apk-clr-bg text-end mt-5">Submit</button>
                        </div>
                    </div>
                </form>
    </>
  );
}

export default NewVendor;  