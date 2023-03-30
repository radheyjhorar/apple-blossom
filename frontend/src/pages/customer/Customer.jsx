import React, { useState, useEffect } from 'react';
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
      <div>
        <h1 className="offset-2 h4 text-white mt-5">Customer List</h1>

        <div className='text-center'>
          <div className="col-8">
            <table className='table'>
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
                  (cust && cust.length > 0 && cust.map((c) =>{
                    return (
        
                 
                <tr>
                  <td>{c.name}</td>
                  <td>{c.ledger_no}</td>
                  <td>{c.mobile1}</td>
                  <td>{c.mobile2}</td>
                  <td>{c.address}</td>
                  <td>{c.city}</td>
                </tr>
                 )}
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