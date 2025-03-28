import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './customer-order-item.css';
import api from '../../api/API';


const CustomerOrderItem = () => {

  const [custOrdItem, setCustOrdItem] = useState([]);

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
      notify('Loading Customer Order Item', 2000);
      const response = await api.get('/customer-order-item');
      if (response.statusText === "OK") {
        setCustOrdItem(response.data);
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

  const deleteCustOrdItem = (id) => {
    notify('Deleting Customer Order Item', 2000);
    const deleteData = async () => {
      const response = await api.delete('/customer-order-item/' + id);
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
            <h1 className="h3 my-apk-clr txt-shdo fw-bold">Customer Order Item List</h1>
            {/* <Link to="/new-customer-order-item" className='ms-auto align-middle mt-auto'>
              <button className='btn btn-sm bg-clr my-btn text-white' type='button'>Add New</button>
            </Link> */}
          </div>
        </div>

        <div className='text-web-center'>
          <div className="col-12">
            <table className='table tbl-list bg-clr text-white'>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Item Name</th>
                  <th>Item Rate</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Item Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  (custOrdItem && custOrdItem.length > 0 && custOrdItem.map((c) => {
                    return (
                      <tr key={c.id}>
                        <td>{c.order_id}</td>
                        <td>{c.item_name}</td>
                        <td>{c.item_rate}</td>
                        <td>{c.quantity}</td>
                        <td>{c.amount}</td>
                        <td>{c.item_status}</td>
                        <td>
                          <Link to="" className='btn btn-info btn-sm me-1'>
                          <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                          </Link>
                          <Link to="" className='btn btn-warning btn-sm me-1'>
                          <FontAwesomeIcon icon="fas fa-edit" />
                          </Link>
                          <Link to="" className='btn btn-danger btn-sm'>
                          <FontAwesomeIcon icon="fa-solid fa-trash-can" onClick={() =>deleteCustOrdItem(c.id)}/>
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

export default CustomerOrderItem;  