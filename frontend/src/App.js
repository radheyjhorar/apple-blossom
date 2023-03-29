import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import { Headers, SearchBox, Footer } from './_shared';
import { Home, Blogs, Contact, NoPage, Search, Schools } from './pages';

import api from './api/API';
import { Register, Login, AuthUser } from './components';
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faTimesCircle, faCheckCircle, faQuestionCircle, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

// library.add(faTimesCircle, faCheckCircle, faQuestionCircle, faGraduationCap);


//toast.configure();


const App = () => {



   useEffect(() => {





   }, []);





   return (


      <Router>


         {/* <Headers /> */}

         <div class="container-fluid m-a-c">
            <div class="row pt-5 pb-5 ">
               <div class="col-7 c-7-d mx-auto bg-pic">

                  <Routes>

                     <Route index element={<Dashboard />} />
                     <Route path="customer" element={<Customer />} />
                     
                     {/* <Route path="search/:cityName" element={<Search />} />
                  <Route path="school/:schoolId" element={<Schools />} />
                  <Route path="about-us" element={<Blogs />} />
                  <Route path="contact" element={<Contact />} /> */}

                     {/* { (!getToken())?(<>
                     <Route path="login" element={<Login />} />
                     <Route path="register" element={<Register />} />
                  </>):null} */}

                     <Route path="*" element={<NoPage />} />



                  </Routes>

                  {/* <Footer  /> */}

               </div>
            </div>
         </div>
      </Router>



   );

}

export default App;  