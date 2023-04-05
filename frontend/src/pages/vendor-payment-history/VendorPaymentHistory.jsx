import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './vendor-payment-history.css';
import api from '../../api/API';


const VendorPaymentHistoryList = () => {

  const [vendPayHis, setVendPayHis] = useState([]);

  const notify = (msg, time) => toast.info(msg, {
    position: "top-right",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const fetchData = async () => {
    notify('Loading Vendor Payment History', 2000);
    const response = await api.get('/vendor-payment-history');
    if (response.statusText === "OK") {
      setVendPayHis(response.data);
    }
    toast.dismiss();
    // const response_state = await api.get('/states');
    // if (response_state.statusText === "OK") {
    //   setState(response_state.data);
    // }
  };

  useEffect(() => {
    fetchData();

  }, [])

  const deleteVendorPayHis = (id) => {
    notify('Deleting Vendor Payment History', 1000);
    const deleteData = async () => {
      const response = await api.delete('/vendor-payment-history/' + id);
      if (response.statusText === "OK") {
          fetchData();
      }
    }
    deleteData();
  }

  return (
    <>
      <div className='col-9 mx-auto'>
        <div className='text-web-center'>
          <div className='col-12 d-flex my-4'>
            <h1 className="h3 my-apk-clr  txt-shdo fw-bold">Vendor Payment History</h1>
            <Link to="/new-vendor-payment-history" className='ms-auto align-middle mt-auto' >
              <button className='btn btn-sm bg-clr my-btn text-white' type='button'>Add New</button>
            </Link>
          </div>
        </div>
        <div className='text-web-center'>
          <div className="col-12">
            <table className='table tbl-list bg-clr text-white'>
              <thead>
                <tr>
                  <th>Vendor Id</th>
                  <th>Payment Date.</th>
                  <th>Deposit Amount</th>
                  <th>Recipt No.</th>
                  <th>Action</th>
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
                        <td>
                          <Link to="" className='btn btn-info btn-sm me-1'>
                            <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                          </Link>
                          <Link to={"/new-vendor-payment-history/" + c.id} className='btn btn-warning btn-sm me-1'>
                            <FontAwesomeIcon icon="fas fa-edit" />
                          </Link>
                          <Link to="" className='btn btn-danger btn-sm'>
                            <FontAwesomeIcon icon="fa-solid fa-trash-can"  onClick={() =>deleteVendorPayHis(c.id)}/>
                          </Link>
                        </td>
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
      <ToastContainer />
    </>
  );
}

export default VendorPaymentHistoryList;  