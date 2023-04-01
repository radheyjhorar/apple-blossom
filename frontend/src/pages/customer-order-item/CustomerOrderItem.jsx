import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './customer-order-item.css';
import api from '../../api/API';
const CustomerOrderItem = () => {

  const [custOrdItem, setCustOrdItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/customer-order-item');
      if (response.statusText === "OK") {
        setCustOrdItem(response.data);
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
            <h1 className="h3 text-white my-4 txt-shdo fw-bold">Customer Order Item List</h1>
            <Link to="/new-customer-order-item">
              <button className='btn ms-auto text-white fw-bold h-3' type='button'>Add New</button>
            </Link>
          </div>
        </div>

        <div className='text-web-center'>
          <div className="col-9">
            <table className='table tbl-list my-apk-clr-bg'>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Item Name</th>
                  <th>Item Rate</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Item Status</th>
                </tr>
              </thead>

              <tbody>
                {
                  (custOrdItem && custOrdItem.length > 0 && custOrdItem.map((c) => {
                    return (
                      <tr>
                        <td>{c.order_id}</td>
                        <td>{c.item_name}</td>
                        <td>{c.item_rate}</td>
                        <td>{c.quantity}</td>
                        <td>{c.amount}</td>
                        <td>{c.item_status}</td>
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

export default CustomerOrderItem;  