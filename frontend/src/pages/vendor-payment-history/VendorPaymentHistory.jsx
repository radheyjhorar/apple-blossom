import React, { useState, useEffect } from 'react';
import './vendor-payment-history.css';
import api from '../../api/API';
const VendorPaymentHistoryList = () => {


  const [vendPayHis, setVendPayHis] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/vendor-payment-history');
      if (response.statusText === "OK") {
        setVendPayHis(response.data);
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
       <h1 className="offset-2 h3 text-white my-4 txt-shdo fw-bold">Vendor Payment History</h1>

       <div className='text-web-center'>
          <div className="col-8">
            <table className='table tbl-list my-apk-clr-bg'>
              <thead>
                <tr>
                  <th>Vendor Id</th>
                  <th>Payment Date.</th>
                  <th>Deposit Amount</th>
                  <th>Recipt No.</th>
                </tr>
              </thead>

              <tbody>
              {
                  (vendPayHis && vendPayHis.length > 0 && vendPayHis.map((c) =>{
                    return (
                <tr>
                  <td>{c.vendor_id}</td>
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

export default VendorPaymentHistoryList;  