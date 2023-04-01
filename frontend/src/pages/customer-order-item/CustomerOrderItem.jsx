import React, { useState, useEffect } from 'react';
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
       <h1 className="offset-2 h3 text-white my-4 txt-shdo fw-bold">Customer Order Item List</h1>

       <div className='text-web-center'>
          <div className="col-8">
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
                  (custOrdItem && custOrdItem.length > 0 && custOrdItem.map((c) =>{
                    return (
                <tr>
                  <td>{c.order_id}</td>
                  <td>{c.item_name}</td>
                  <td>{c.item_rate}</td>
                  <td>{c.quantity}</td>
                  <td>{c.amount}</td>
                  <td>{c.item_status}</td>
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

export default CustomerOrderItem;  