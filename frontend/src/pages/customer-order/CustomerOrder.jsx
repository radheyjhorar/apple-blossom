import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
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
      <div className='my-5'>
        <div className='text-web-center'>
          <div className='col-9 d-flex '>
            <h1 className="h3 text-white my-4 txt-shdo fw-bold">Customer Order List</h1>
            <Link to="/new-vendor-stock" >
              <button className='btn ms-auto text-white fw-bold h-3' type='button'>Add New Order</button>
            </Link>
          </div>
        </div>

        <div className='text-web-center'>
          <div className="col-9 ">
            <table className='table tbl-list my-apk-clr-bg '>
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
                  (custOrd && custOrd.length > 0 && custOrd.map((c) => {
                    return (
                      <tr>
                        <td>{c.customer_id}</td>
                        <td>{c.order_description}</td>
                        <td>{c.total_amount}</td>
                        <td>{c.order_status}</td>
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

export default CustomerOrder;  