import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import api from '../../api/API';

const NewCustomerPaymentHistory = () => {

  const navigate = useNavigate();

  const { customerPaymentHistoryId } = useParams();

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

  const [newCustomerPaymentHistory, setNewCustomerPaymentHistory] = useState({
    id: customerPaymentHistoryId || 0,
    customer_id: "",
    payment_date: "",
    deposit_amount: "",
    resipte_no: ""
  });

  const [customer, setCustomer] = useState([]);


  const handleChange = e => {

    const { name, value } = e.target;
    setNewCustomerPaymentHistory({
      ...newCustomerPaymentHistory,
      [name]: value
    })
  };

  const saveCustomerPaymentHistory = () => {
    if (customerPaymentHistoryId > 0) {
      updateCustomerPaymentHistory();
    } else {
      addNewCustomerPaymentHistory();
    }
  }

  const addNewCustomerPaymentHistory = async () => {
    notify('Adding New Customer Payment History', 1000);
    const response = await api.post('/customer-payment-history', newCustomerPaymentHistory);
    if (response.statusText === "OK") {
      console.log(response);
      notify('Added New Customer Payment Sucessfully', 1000);
      //setToken(response.data, response.data.accessToken);
      setTimeout(function () {
      navigate('/customer-payment-history')
      }, 1000);
    }
  };

  const updateCustomerPaymentHistory = async () => {
    notify('Updating Customer Payment History Data', 1000);
    const response = await api.put('/customer-payment-history/' + newCustomerPaymentHistory.id, newCustomerPaymentHistory);
    if (response.statusText === "OK") {
      console.log(response);
      notify('Updated customer payment history Sucessfully', 1000);
      //setToken(response.data, response.data.accessToken);
      setTimeout(function () {
        navigate('/customer-payment-history')
      }, 1000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (customerPaymentHistoryId > 0) {
        const response_customer_payment_history = await api.get('/customer-payment-history/' + customerPaymentHistoryId);
        if (response_customer_payment_history.statusText === "OK") {
          setNewCustomerPaymentHistory(response_customer_payment_history.data);
        }
      }
      const response = await api.post('/customer/getAll', { is_delete: 0, include: false, attributes: ['id', 'name'] });
      if (response.statusText === "OK") {
        setCustomer(response.data);
      }
    };
    fetchData();

  }, [customerPaymentHistoryId]);



  return (
    <>
      <div className='col-9 mx-auto'>
        <div class="col-12 c-7-d mx-auto bg-pic h-30 text-center my-5 pt-2 bg-clr">
          <h1 class="h4 fw-bold text-white mt-5 mb-4">{ customerPaymentHistoryId > 0?'Update':'New'} Customer Payment History</h1>

          <div class="text-center">
            {/* <input type="number" class="col-7 vndr-ipt my-4 d-inline-block" placeholder="Customer ID" name="customer_id" value={newCustomerPaymentHistory.customer_id} onChange={handleChange} /> */}
            <select className='city-drp-dwn col-4 col-8 vndr-ipt my-4 d-inline-block' name='customer_id' value={newCustomerPaymentHistory.customer_id} onChange={handleChange} >
                <option value="0">Select Customer</option>
                {
                  (customer && customer.length > 0 && customer.map(
                    (c) => {
                      return (
                        <option value={c.id}>{c.name}</option>
                      )
                    }
                  ))
                }
              </select>
            <input type="date" class="col-7 vndr-ipt d-inline-block" placeholder="Payment Date" name="payment_date" value={newCustomerPaymentHistory.payment_date} onChange={handleChange} />
            <input type="number" class="col-7 vndr-ipt my-4 d-inline-block" placeholder="Deposit Amount" name="deposit_amount" value={newCustomerPaymentHistory.deposit_amount} onChange={handleChange} />
            <input type="number" class="col-7 vndr-ipt d-inline-block" placeholder="Resipte No" name="resipte_no" value={newCustomerPaymentHistory.resipte_no} onChange={handleChange} />
            <div class="">
              <button type="submit" class="btn sbmt-btn px-4 text-white text-end mt-5" onClick={saveCustomerPaymentHistory}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default NewCustomerPaymentHistory;  