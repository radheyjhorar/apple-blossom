import React, { useState, useEffect } from 'react';
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
    <div>
       <h1 className="offset-2 h4 my-apk-clr mt-5">Vendor List</h1>

       <div className='text-center'>
          <div className="col-8">
            <table className='table'>
              <thead>
                <tr>
                  <th>Vendor Name</th>
                  <th>Vendor Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Mobile 1</th>
                  <th>Mobile 2</th>
                </tr>
              </thead>

              <tbody>
              {
                  (vend && vend.length > 0 && vend.map((c) =>{
                    return (
                <tr>
                  <td>{c.vendor_name}</td>
                  <td>{c.vendor_address}</td>
                  <td>{c.city}</td>
                  <td>{c.state}</td>
                  <td>{c.mobile1}</td>
                  <td>{c.mobile2}</td>
                </tr>
                 )}
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