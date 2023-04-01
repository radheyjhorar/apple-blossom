import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './vendor.css';
import api from '../../api/API';
const Vendor = () => {


  const [vend, setVend] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/vendor');
      if (response.statusText === "OK") {
        setVend(response.data);
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
          <div className='col-9 d-flex '>
            <h1 className="h3 text-white my-4 txt-shdo fw-bold">Vendor List</h1>
            <Link to="/new-vendor" >
              <button className='btn ms-auto text-white fw-bold h-3' type='button'>Add New Vendor</button>
            </Link>
          </div>
        </div>

        <div className='text-web-center'>
          <div className="col-9">
            <table className='table tbl-list my-apk-clr-bg text-truncate'>
              <thead>
                <tr>
                  <th>Vendor Name</th>
                  <th>Vendor Address</th>
                  <th>City</th>
                  <th>Mobile 1</th>
                  <th>Mobile 2</th>
                </tr>
              </thead>

              <tbody>
                {
                  (vend && vend.length > 0 && vend.map((c) => {
                    return (
                      <tr>
                        <td>{c.vendor_name}</td>
                        <td>{c.vendor_address}</td>
                        <td>{c.city}</td>
                        <td>{c.mobile1}</td>
                        <td>{c.mobile2}</td>
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

export default Vendor;  