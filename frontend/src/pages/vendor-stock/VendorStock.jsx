import React, { useState, useEffect } from 'react';
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
    <div>
       <h1 className="offset-2 h4 my-apk-clr mt-5">Vendor Stock List</h1>

       <div className='text-center'>
          <div className="col-8">
            <table className='table'>
              <thead>
                <tr>
                  <th>Vendor Id</th>
                  <th>Vendor Description</th>
                  <th>Rate</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Stock Date</th>
                </tr>
              </thead>

              <tbody>
              {
                  (vendStk && vendStk.length > 0 && vendStk.map((c) =>{
                    return (
                <tr>
                  <td>{c.vendor_id}</td>
                  <td>{c.description}</td>
                  <td>{c.rate}</td>
                  <td>{c.quantity}</td>
                  <td>{c.amount}</td>
                  <td>{c.stock_date}</td>
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

export default VendorStock;  