import React, { useState } from 'react';
import { useEffect } from 'react';

import api from '../../api/API';

const NewVendor = () => {

  const [city, setCity] = useState([]);
  // const [state, setState] = useState([])


  const [newVendor, setNewVendor] = useState({
    vendor_name: "",
    vendor_address: "",
    city: "",
    state: "",
    mobile1: "",
    mobile2: "",
  });


  const handleChange = e => {

    const { name, value } = e.target;
    setNewVendor({
      ...newVendor,
      [name]: value
    })
  };

  const addNewVendor = async () => {

    const response = await api.post('/vendor', newVendor);
    if (response.statusText === "OK") {
      console.log(response);
      //setToken(response.data, response.data.accessToken);
      //navigate('/')

    }


  };

  useEffect(() => {
    const fetchData = async () => {
      const response_city = await api.get('/cities');
      if (response_city.statusText === "OK") {
        setCity(response_city.data);
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
      <div class="col-7 c-7-d mx-auto bg-pic h-30 my-5">
        <h1 class="offset-2 h4 my-apk-clr mt-5">New Vendor</h1>
        <div className='text-center'>
          <div class="mt-5">
            <input type="text" class="col-4 vndr-ipt me-1 d-inline-block" placeholder="Vendor Name" name="vendor_name" value={newVendor.vendor_name} onChange={handleChange} />
            <select className='city-drp-dwn col-4' name='city' value={newVendor.city} onChange={handleChange} >
              <option value="0">Select City</option>
              {
                (city && city.length > 0 && city.map(
                  (c) => {
                    return (
                      <option value={c.id}>{c.city_name}</option>
                    )
                  }
                ))
              }
            </select>
          </div>
          <div className='my-4'>
            <input type="number" class="col-4 me-1 vndr-ipt d-inline-block" placeholder="Mobile 1" name="mobile1" value={newVendor.mobile1} onChange={handleChange} />

            <input type="number" class="col-4 vndr-ipt d-inline-block" placeholder="Mobile 2" name="mobile2" value={newVendor.mobile2} onChange={handleChange} />
          </div>
    
          <input type="text" class="col-8 mb-4 vndr-ipt d-inline-block" placeholder="Vendor Address" name="vendor_address" value={newVendor.vendor_address} onChange={handleChange} />

          <div class="">
            <button type="submit" class="btn sbmt-btn px-4 text-white my-apk-clr-bg text-end mt-5" onClick={addNewVendor}>Submit</button>

          </div>
        </div>
      </div>
    </>
  );
}

export default NewVendor;  