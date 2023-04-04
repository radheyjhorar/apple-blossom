import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './vendor-stock.css';
import api from '../../api/API';
const VendorStock = () => {

  const [vendStk, setVendStk] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/vendor-stock');
      if (response.statusText === "OK") {
        setVendStk(response.data);
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
        <div className='text-web-center'>
          <div className='col-9 d-flex my-4'>
            <h1 className="h3 my-apk-clr txt-shdo fw-bold">Vendor Stock List</h1>
            <Link to="/new-vendor-stock" className='ms-auto align-middle mt-auto' >
              <button className='btn btn-sm my-apk-clr-bg my-btn text-white' type='button'>Add New Stock</button>
            </Link>
          </div>
        </div>
        <div className='text-web-center'>
          <div className="col-9">
            <table className='table tbl-list my-apk-clr-bg'>
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
                            <FontAwesomeIcon icon="fa-solid fa-trash-can" />
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
    </>
  );
}

export default VendorStock;  