
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import { Headers, SideBar, Footer } from './_shared';
import { Dashboard, NoPage, Customer, NewCustomer, Vendor, NewVendor, CustomerOrder, NewCustomerOrder, CustomerOrdeItem, NewCustomerOrderItem, CustomerPaymentHistory, NewCustomerPaymentHistory, VendorStock, NewVendorStock, VendorPaymentHistory, NewVendorPaymentHistory } from './pages';
import api from './api/API';
import { Register, Login, AuthUser, getPageName } from './components';
import './App.css';
//  import { library } from "@fortawesome/fontawesome-svg-core";
// import { , faCheckCircle, faQuestionCircle, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
// library.add(faTimesCircle, faCheckCircle, faQuestionCircle, faGraduationCap);


//toast.configure();


const App = (props) => {

   const {getToken} = AuthUser();
   const [pageName, setPageName] = useState();
   const location = useLocation();

  

    return (

      <>
         {/* <Headers /> */}
        

         <div className="container-fluid">
            <div className="row">
            <SideBar pageName={getPageName(location.pathname)}/>
                  <Routes>
                    ((!getToken())?(<>
                     <Route path="login" element={<Login />} />
                     <Route path="register" element={<Register />} />
                  </>):(<>
                     <Route index element={<Dashboard />} />
                     <Route path="customer" element={<Customer />} />
                     <Route path="new-customer/:customerId?" element={<NewCustomer />} />                     
                     <Route path="vendor" element={<Vendor />} />
                     <Route path="new-vendor/:vendorId?" element={<NewVendor />} />
                     <Route path="customer-order" element={<CustomerOrder />} />
                     <Route path="new-customer-order/:customerOrderId?" element={<NewCustomerOrder />} />
                     <Route path="customer-order-item" element={<CustomerOrdeItem />} />
                     <Route path="new-customer-order-item" element={<NewCustomerOrderItem />} />
                     <Route path="customer-payment-history" element={<CustomerPaymentHistory />} />
                     <Route path="new-customer-payment-history/:customerPaymentHistoryId?" element={<NewCustomerPaymentHistory />} />
                     <Route path="vendor-stock" element={<VendorStock />} />
                     <Route path="new-vendor-stock/:vendorStockId?" element={<NewVendorStock />} />
                     <Route path="vendor-payment-history" element={<VendorPaymentHistory />} />
                     <Route path="new-vendor-payment-history/:vendorPaymentHistoryId?" element={<NewVendorPaymentHistory />} />
                     {/* <Route path="login" element={<Login />} /> */}
                     
                     {/* <Route path="search/:cityName" element={<Search />} />
                  <Route path="school/:schoolId" element={<Schools />} />
                  <Route path="about-us" element={<Blogs />} />
                  <Route path="contact" element={<Contact />} /> */}
                     </>
                    )

                     <Route path="*" element={<NoPage />} />



                  </Routes>

                  {/* <Footer  /> */}

               </div>
            </div>
   
            </>


   );

}

export default App;  