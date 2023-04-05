import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './vendor.css';
import api from '../../api/API';


const Vendor = () => {

  const [vend, setVend] = useState([]);

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
      notify('Loading Vendor', 2000);
      const response = await api.get('/vendor');
      if (response.statusText === "OK") {
        setVend(response.data);
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

  const deleteVendor = (id) => {
    notify('Deleting Vendor', 2000);
    const deleteData = async () => {
      const response = await api.delete('/vendor/' + id);
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
          <div className='col d-flex my-4'>
            <h1 className="h3 my-apk-clr txt-shdo fw-bold">Vendor List</h1>
            <Link to="/new-vendor" className='ms-auto align-middle mt-auto' >
              <button className='btn btn-sm bg-clr my-btn text-white' type='button'>Add New Vendor</button>
            </Link>
          </div>
        </div>

        <div className='text-web-center'>
          <div className="col">
            <table className='table tbl-list bg-clr text-white'>
              <thead>
                <tr>
                  <th>Vendor Name</th>
                  {/* <th>Vendor Address</th> */}
                  <th>City</th>
                  <th>Mobile 1</th>
                  <th>Mobile 2</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {
                  (vend && vend.length > 0 && vend.map((c) => {
                    return (
                      <tr key={c.id}>
                        <td>{c.vendor_name}</td>
                        {/* <td>{c.vendor_address}</td> */}
                        <td>{c.city}</td>
                        <td>{c.mobile1}</td>
                        <td>{c.mobile2}</td>
                        <td>
                          <Link to="" className='btn btn-info btn-sm me-1'>
                          <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                          </Link>
                          <Link to={"/new-vendor/" + c.id} className='btn btn-warning btn-sm me-1'>
                          <FontAwesomeIcon icon="fas fa-edit" />
                          </Link>
                          <Link to={() => deleteVendor (c.id)} className='btn btn-danger btn-sm'>
                          <FontAwesomeIcon icon="fa-solid fa-trash-can" onClick={() => deleteVendor (c.id)}/>
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

export default Vendor;  