import React, { useState } from 'react';
import { useEffect } from 'react';

import api from '../../api/API';


const NewCustomer = () => {

  const [city, setCity] = useState([]);
  // const [state, setState] = useState([])

  const [newCustomer, setNewCustomer] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    mobile1: "",
    mobile2: "",
    ledger_no: ""
  });


  const handleChange = e => {

    const { name, value } = e.target;
    setNewCustomer({
      ...newCustomer,
      [name]: value
    })
  };

  const addNewCustomer = async () => {

    const response = await api.post('/customer', newCustomer);
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
      <div class="col-7 c-7-d mx-auto bg-pic my-5">
        <h1 class="offset-2 h4 my-apk-clr mt-5">New Customer</h1>

        <div class="text-center">
          <div className='mt-5'>
            <input type="text" class="col-4 vndr-ipt me-1 d-inline-block" placeholder="Customer Name" name="name" value={newCustomer.name} onChange={handleChange} />

            <select className='city-drp-dwn col-4' name='city' value={newCustomer.city} onChange={handleChange} >
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
            <input type="number" class="col-4 me-1 vndr-ipt d-inline-block" name='mobile1' placeholder="Mobile 1" value={newCustomer.mobile1} onChange={handleChange} />
            <input type="number" class="col-4 vndr-ipt d-inline-block" name='mobile2' placeholder="Mobile 2" value={newCustomer.mobile2} onChange={handleChange} />
          </div>
          {/*           
          <select name='state' value={newCustomer.state} onChange={handleChange} >
              {
                 (state && state.length > 0 && state.map(
                  (s) => {
                    return(
                      <option value={s.id}>{s.state_name}</option>
                    )
                  }
                ))
              }
          </select> */}

          <input type="text" class="col-8 mb-4 vndr-ipt d-inline-block" placeholder="Customer Address" name='address' value={newCustomer.address} onChange={handleChange} />
          <input type="number" minlength="10" maxlength="10" class="col-8 vndr-ipt mb-5 d-inline-block" name='ledger_no' placeholder="Ledger No." value={newCustomer.ledger_no} onChange={handleChange} />

          <div class="">
            <button type="submit" class="btn sbmt-btn px-4 mb-5 text-white my-apk-clr-bg text-center" onClick={addNewCustomer}>Submit</button>
          </div>
        </div>


      </div>
    </>
  );
}

export default NewCustomer;  