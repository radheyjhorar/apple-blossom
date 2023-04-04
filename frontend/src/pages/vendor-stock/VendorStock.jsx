import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './vendor-stock.css';
import api from '../../api/API';


const VendorStock = () => {

  const [vendStk, setVendStk] = useState([]);

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
      const response = await api.get('/vendor-stock');
      if (response.statusText === "OK") {
        setVendStk(response.data);
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

  const deleteVendorStock = (id) => {
    notify('Deleting Vendor Stock', 2000);
    const deleteData = async () => {
      const response = await api.delete('/vendor-stock/' + id);
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
            <h1 className="h3 my-apk-clr txt-shdo fw-bold">Vendor Stock List</h1>
            <Link to="/new-vendor-stock" className='ms-auto align-middle mt-auto' >
              <button className='btn btn-sm bg-clr my-btn text-white' type='button'>Add New Stock</button>
            </Link>
          </div>
        </div>
        <div className='text-web-center'>
          <div className="col-12">
            <table className='table tbl-list bg-clr text-white'>
              <thead>
                <tr>
                  <th>Vendor Id</th>
                  {/* <th>Vendor Description</th> */}
                  <th>Rate</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Stock Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  (vendStk && vendStk.length > 0 && vendStk.map((c) => {
                    return (
                      <tr key={c.id}>
                        <td>{c.vendor_id}</td>
                        {/* <td>{c.description}</td> */}
                        <td>{c.rate}</td>
                        <td>{c.quantity}</td>
                        <td>{c.amount}</td>
                        <td>{c.stock_date}</td>
                        <td>
                          <Link to="" className='btn btn-info btn-sm me-1'>
                            <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                          </Link>
                          <Link to="" className='btn btn-warning btn-sm me-1'>
                            <FontAwesomeIcon icon="fas fa-edit" />
                          </Link>
                          <Link to="" className='btn btn-danger btn-sm'>
                            <FontAwesomeIcon icon="fa-solid fa-trash-can"  onClick={() =>deleteVendorStock(c.id)}/>
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

export default VendorStock;  