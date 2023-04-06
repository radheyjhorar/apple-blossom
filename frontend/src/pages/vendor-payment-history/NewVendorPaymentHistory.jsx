import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import api from '../../api/API';

const NewVendorPaymentHistory = (props) => {

  const navigate = useNavigate();

  const { vendorPaymentHistoryId } = useParams();

  const notify = (msg, time) => toast.info(msg, {
    position: "top-right",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
  });

  const [newVendorPaymentHistory, setNewVendorPaymentHistory] = useState({
    id: vendorPaymentHistoryId || 0,
    vendor_id: "",
    payment_date: "",
    deposit_amount: "",
    resipte_no: ""
  });


  const handleChange = e => {

    const { name, value } = e.target;
    setNewVendorPaymentHistory({
      ...newVendorPaymentHistory,
      [name]: value
    })
  };

  const saveVendorPaymentHistory = () => {
    if (vendorPaymentHistoryId > 0) {
      updateVendorPaymentHistory();
    } else {
      addNewVendorPaymentHistory();
    }
  }

  const addNewVendorPaymentHistory = async () => {

    notify('Adding New Vendor Payment History', 1000);
    const response = await api.post('/vendor-payment-history', newVendorPaymentHistory);
    if (response.statusText === "OK") {
      console.log(response);
      notify('Added New Vendor Payment Sucessfully', 2000);
      //setToken(response.data, response.data.accessToken);
      setTimeout(function () {
        navigate('/vendor-payment-history')
      }, 2500);
    }
  };

  const updateVendorPaymentHistory = async () => {
    notify('Updating Vendor Payment History Data', 1000);
    const response = await api.put('/vendor-payment-history/' + newVendorPaymentHistory.id, newVendorPaymentHistory);
    if (response.statusText === "OK") {
      console.log(response);
      notify('Updated Vendor Payment History Sucessfully', 1000);
      //setToken(response.data, response.data.accessToken);
      setTimeout(function () {
        navigate('/vendor')
      }, 1000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (vendorPaymentHistoryId > 0) {
        const response_vendor_payment_history = await api.get('/vendor-payment-history/' + vendorPaymentHistoryId);
        if (response_vendor_payment_history.statusText === "OK") {
          setNewVendorPaymentHistory(response_vendor_payment_history.data);
        }
      }
    };
    fetchData();

  }, [vendorPaymentHistoryId]);


  return (
    <>
      <div className='col-9 mx-auto'>
        <div className="col-12 c-7-d mx-auto bg-pic h-30 text-center my-5 bg-clr pt-2">
          <h1 className="h4 text-white fw-bold my-5">{ vendorPaymentHistoryId > 0?'Update':'New'} Vendor Payment History</h1>

          <div className="text-center">
            <input type="number" className="col-7 vndr-ipt mb-4 d-inline-block" placeholder="Vendor ID" name="vendor_id" value={newVendorPaymentHistory.vendor_id} onChange={handleChange} />
            <input type="date" className="col-7 vndr-ipt d-inline-block" placeholder="Payment Date" name="payment_date" value={newVendorPaymentHistory.payment_date} onChange={handleChange} />
            <input type="number" className="col-7 vndr-ipt my-4 d-inline-block" placeholder="Deposit Amount" name="deposit_amount" value={newVendorPaymentHistory.deposit_amount} onChange={handleChange} />
            <input type="number" className="col-7 vndr-ipt d-inline-block" placeholder="Resipte No" name="resipte_no" value={newVendorPaymentHistory.resipte_no} onChange={handleChange} />
            <div className="">
              <button type="submit" className="btn sbmt-btn px-4 text-white text-end mt-5" onClick={saveVendorPaymentHistory}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default NewVendorPaymentHistory;  