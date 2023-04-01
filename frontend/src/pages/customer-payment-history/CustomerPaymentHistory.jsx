import React, { useState, useEffect } from 'react';
import './customer-payment-history.css';
import api from '../../api/API';
const CustomerPaymentHistoryList = () => {

  const [custPayHis, setCustPayHis] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/customer-payment-history');
      if (response.statusText === "OK") {
        setCustPayHis(response.data);
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
        <h1 className="offset-2 h3 text-white my-4 txt-shdo fw-bold">Customer Payment History List</h1>

        <div className='text-web-center'>
          <div className="col-8">
            <table className='table tbl-list my-apk-clr-bg'>
              <thead>
                <tr>
                  <th>Customer Id</th>
                  <th>Payment Date</th>
                  <th>Deposit Amount</th>
                  <th>Recipt No.</th>
                </tr>
              </thead>

              <tbody>
              {
                  (custPayHis && custPayHis.length > 0 && custPayHis.map((c) =>{
                    return (
                <tr>
                  <td>{c.customer_id}</td>
                  <td>{c.payment_date}</td>
                  <td>{c.deposit_amount}</td>
                  <td>{c.resipte_no}</td>
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

export default CustomerPaymentHistoryList;  