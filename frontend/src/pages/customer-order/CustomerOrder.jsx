import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './customer-order.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import api from '../../api/API';

const CustomerOrder = () => {

  const [custOrd, setCustOrd] = useState([]);

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
    notify('Loading Orders', 1000);
    const response = await api.post('/customer-order/getAll', { is_delete: 0, include: true, attributes: null});
    if (response.statusText === "OK") {
      setCustOrd(response.data);
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

  const deleteCustOrd = (id) => {
    notify('Deleting Customer Order', 2000);
    const deleteData = async () => {
      const response = await api.delete('/customer-order/' + id);
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
          <div className='col-12 d-flex my-4 '>
            <h1 className="h2 my-apk-clr txt-shdo fw-bold">Customer Order List</h1>
            <Link to="/new-customer-order" className='ms-auto align-middle mt-auto'>
              <button className='btn btn-sm bg-clr my-btn text-white' type='button'>Add New Order</button>
            </Link>
          </div>
        </div>

        <div className='text-web-center'>
          <div className="col-12 ">
            <table className='table tbl-list bg-clr text-white '>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Order Description</th>
                  <th>Total Amount</th>
                  <th>Order Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  (custOrd && custOrd.length > 0 && custOrd.map((c) => {
                    return (
                      <tr key={c.id}>
                        <td>{c.customer_customer_order.name}</td>
                        <td>{c.order_description}</td>
                        <td>{c.total_amount}</td>
                        <td>{c.customer_order_status.order_status}</td>
                        <td>
                          <Link to="" className='btn btn-info btn-sm me-1'>
                            <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                          </Link>
                          <Link to={"/new-customer-order/" + c.id} className='btn btn-warning btn-sm me-1'>
                            <FontAwesomeIcon icon="fas fa-edit" />
                          </Link>
                          <Link to={() =>deleteCustOrd(c.id)} className='btn btn-danger btn-sm'>
                            <FontAwesomeIcon icon="fa-solid fa-trash-can" onClick={() =>deleteCustOrd(c.id)} />
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

export default CustomerOrder;  