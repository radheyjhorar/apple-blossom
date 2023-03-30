import React, { useState, useEffect } from 'react';
import './customer-order.css';
import api from '../../api/API';
const CustomerOrder = () => {


  const [custOrd, setCustOrd] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/customer-order');
      if (response.statusText === "OK") {
        setCustOrd(response.data);
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
        <h1 className="offset-2 h4 my-apk-clr mt-5">Customer Order List</h1>

        <div className=''>
          <div className="col-8 ">
            <table className='table table-danger text-center'>
              <thead>
                <tr>
                  <th>Customer Id</th>
                  <th>Order Description</th>
                  <th>Total Amount</th>
                  <th>Order Status</th>
                </tr>
              </thead>

              <tbody>
              {
                  (custOrd && custOrd.length > 0 && custOrd.map((c) =>{
                    return (
                <tr>
                  <td>{c.customer_id}</td>
                  <td>{c.order_description}</td>
                  <td>{c.total_amount}</td>
                  <td>{c.order_status}</td>
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

export default CustomerOrder;  