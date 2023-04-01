import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import './vendor-payment-history.css';
import api from '../../api/API';


const VendorPaymentHistoryList = () => {

  const [vendPayHis, setVendPayHis] = useState([]);

  // const notify = (msg, time) => toast.info(msg, {
  //   position: "top-right",
  //   autoClose: time,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "dark",
  //   });

  useEffect(() => {

    //notify('Loading Vendor Payment History', 2000);

    const fetchData = async () => {
      const response = await api.get('/vendor-payment-history');
      if (response.statusText === "OK") {
        setVendPayHis(response.data);
      }
     // toast.dismiss();
      // const response_state = await api.get('/states');
      // if (response_state.statusText === "OK") {
      //   setState(response_state.data);
      // }
    };
    fetchData();

  }, [])

  return (
    <>
    <ToastContainer />
      <div className='my-5'>
        <div className='text-web-center'>
          <div className='col-9 d-flex my-4'>
            <h1 className="h3 text-white  txt-shdo fw-bold">Vendor Payment History</h1>
            <Link to="/new-vendor-payment-history"  className='ms-auto align-middle mt-auto' >
              <button className='btn btn-sm my-apk-clr-bg my-btn text-white' type='button'>Add New</button>
            </Link>
          </div>
        </div>
        <div className='text-web-center'>
          <div className="col-9">
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
                  (vendPayHis && vendPayHis.length > 0 && vendPayHis.map((c) => {
                    return (
                      <tr key={c.id}>
                        <td>{c.vendor_id}</td>
                        <td>{c.payment_date}</td>
                        <td>{c.deposit_amount}</td>
                        <td>{c.resipte_no}</td>
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

export default VendorPaymentHistoryList;  