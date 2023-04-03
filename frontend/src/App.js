
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import { Headers, Footer } from './_shared';
import { Dashboard, NoPage, Customer, NewCustomer, Vendor, NewVendor, CustomerOrder, NewCustomerOrder, CustomerOrdeItem, NewCustomerOrderItem, CustomerPaymentHistory, NewCustomerPaymentHistory, VendorStock, NewVendorStock, VendorPaymentHistory, NewVendorPaymentHistory } from './pages';
import api from './api/API';
import { Register, Login, AuthUser } from './components';
import './App.css';
//  import { library } from "@fortawesome/fontawesome-svg-core";
// import { , faCheckCircle, faQuestionCircle, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
// library.add(faTimesCircle, faCheckCircle, faQuestionCircle, faGraduationCap);


//toast.configure();


const App = () => {

   const {getToken} = AuthUser();

   useEffect(() => {





   }, []);





   return (


      <Router>


         {/* <Headers /> */}

         <div className="container-fluid">
            <div className="row">
          
                  <Routes>

                     <Route index element={<Dashboard />} />
                     <Route path="customer" element={<Customer />} />
                     <Route path="new-customer" element={<NewCustomer />} />
                     <Route path="vendor" element={<Vendor />} />
                     <Route path="new-vendor" element={<NewVendor />} />
                     <Route path="customer-order" element={<CustomerOrder />} />
                     <Route path="new-customer-order" element={<NewCustomerOrder />} />
                     <Route path="customer-order-item" element={<CustomerOrdeItem />} />
                     <Route path="new-customer-order-item" element={<NewCustomerOrderItem />} />
                     <Route path="customer-payment-history" element={<CustomerPaymentHistory />} />
                     <Route path="new-customer-payment-history" element={<NewCustomerPaymentHistory />} />
                     <Route path="vendor-stock" element={<VendorStock />} />
                     <Route path="new-vendor-stock" element={<NewVendorStock />} />
                     <Route path="vendor-payment-history" element={<VendorPaymentHistory />} />
                     <Route path="new-vendor-payment-history" element={<NewVendorPaymentHistory />} />
                     <Route path="login" element={<Login />} />
                     
                     {/* <Route path="search/:cityName" element={<Search />} />
                  <Route path="school/:schoolId" element={<Schools />} />
                  <Route path="about-us" element={<Blogs />} />
                  <Route path="contact" element={<Contact />} /> */}

                     {  (!getToken())?(<>
                     <Route path="login" element={<Login />} />
                     <Route path="register" element={<Register />} />
                  </>):null} 

                     <Route path="*" element={<NoPage />} />



                  </Routes>

                  {/* <Footer  /> */}

               </div>
            </div>
      </Router>



   );

}

export default App;  