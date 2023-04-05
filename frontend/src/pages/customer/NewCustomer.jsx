import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import api from '../../api/API';


const NewCustomer = () => {

  const navigate = useNavigate();

  const [city, setCity] = useState([]);
  // const [state, setState] = useState([])

  const { customerId } = useParams();

  const notify = (msg, time) => toast.info(msg, {
    position: "top-right",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored"
  });

  const [newCustomer, setNewCustomer] = useState({
    id: customerId || 0,
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

  const savecustomer = () => {
    if (customerId > 0) {
      updateCustomer();
    } else {
      addNewCustomer();
    }
  }

  const addNewCustomer = async () => {
    notify('Adding New Customer', 1000);
    const response_customer = await api.post('/customer', newCustomer);
    if (response_customer.statusText === "OK") {
      console.log(response_customer);
      toast.dismiss();
      notify('Added New Customer Sucessfully', 1000);
      //setToken(response.data, response.data.accessToken);
      setTimeout(function () {
        navigate('/customer')
      }, 1000);
    }
  };

  const updateCustomer = async () => {
    notify('Updating Customer Data', 1000);
    const response_customer = await api.put('/customer/' + newCustomer.id, newCustomer);
    if (response_customer.statusText === "OK") {
      console.log(response_customer);
      notify('Updated Customer Sucessfully', 1000);
      //setToken(response.data, response.data.accessToken);
      setTimeout(function () {
        navigate('/customer')
      }, 1000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response_city = await api.get('/cities');
      if (response_city.statusText === "OK") {
        setCity(response_city.data);
      }
      if (customerId > 0) {
        const response_customer = await api.get('/customer/' + customerId);
        if (response_customer.statusText === "OK") {
          setNewCustomer(response_customer.data);
        }
      }
    };
    fetchData();
  }, [customerId]);

  return (
    <>
      <div className='col-9 mx-auto'>
        <div class="col-12 c-7-d mx-auto bg-pic bg-clr py-5 my-4">
          <h1 class="offset-2 h4 fw-bold text-white ">New Customer</h1>

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
            <div class="mx-auto">
              <button type="submit" class="btn sbmt-btn px-4 text-white" onClick={savecustomer}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default NewCustomer;  