import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './customer.css';
import api from '../../api/API';
const Customer = () => {

  const [cust, setCust] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/customer');
      if (response.statusText === "OK") {
        setCust(response.data);
      }
      // const response_state = await api.get('/states');
      // if (response_state.statusText === "OK") {
      //   setState(response_state.data);
      // }
    };
    fetchData();

  }, [])

  return (
    <>
      <div className='my-5'>
        <div className='text-web-center'>
          <div className='col-9 d-flex my-4'>
            <h1 className="h2 mb-0 text-white txt-shdo fw-bold">Customer List</h1>
            <Link to="/new-customer" className='ms-auto align-middle mt-auto'>
              <button className='btn btn-sm my-apk-clr-bg my-btn text-white' type='button'>Add New Customer</button>
            </Link>
          </div>
        </div>

        <div className='text-web-center'>
          <div className="col-9">
            <table className='table tbl-list my-apk-clr-bg'>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Ledger No.</th>
                  <th>Mobile 1</th>
                  <th>Mobile 2</th>
                  <th>Customer Address</th>
                  <th>City</th>
                </tr>
              </thead>

              <tbody>
                {
                  (cust && cust.length > 0 && cust.map((c) => {
                    return (


                      <tr>
                        <td>{c.name}</td>
                        <td>{c.ledger_no}</td>
                        <td>{c.mobile1}</td>
                        <td>{c.mobile2}</td>
                        <td>{c.address}</td>
                        <td>{c.city}</td>
                      </tr>
                    )
                  }
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>


      <div className='my-5'>
        <div className='text-web-center'>
          <div className='col-9 d-flex my-4'>
            <h1 className="h2 mb-0 text-white txt-shdo fw-bold">Customer List</h1>
            <Link to="/new-customer" className='ms-auto align-middle mt-auto'>
              <button className='btn btn-sm my-apk-clr-bg my-btn text-white' type='button'>Add New Customer</button>
            </Link>
          </div>
        </div>

        <div className='text-web-center'>
          <div className="col-9">
            <table className='table tbl-list my-apk-clr-bg'>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Ledger No.</th>
                  <th>Mobile 1</th>
                  <th>Mobile 2</th>
                  <th>Customer Address</th>
                  <th>City</th>
                </tr>
              </thead>

              <tbody>
                {
                  (cust && cust.length > 0 && cust.map((c) => {
                    return (


                      <tr>
                        <td>{c.name}</td>
                        <td>{c.ledger_no}</td>
                        <td>{c.mobile1}</td>
                        <td>{c.mobile2}</td>
                        <td>{c.address}</td>
                        <td>{c.city}</td>
                      </tr>
                    )
                  }
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>


    </>
  );
}

export default Customer;  