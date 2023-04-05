import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import api from '../../api/API';

const NewVendor = (props) => {

  const navigate = useNavigate();

  const [city, setCity] = useState([]);
  // const [state, setState] = useState([])

  const { vendorId } = useParams();

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


  const [newVendor, setNewVendor] = useState({
    id: vendorId || 0,
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

  const saveVendor = () => {
    if (vendorId > 0) {
      updateVendor();
    } else {
      addNewVendor();
    }
  }

  const addNewVendor = async () => {
    notify('Adding New Vendor', 1000);
    const response = await api.post('/vendor', newVendor);
    if (response.statusText === "OK") {
      console.log(response);
      notify('Added New Vendor Sucessfully', 1000);
      //setToken(response.data, response.data.accessToken);
      setTimeout(function () {
        navigate('/vendor')
      }, 1000);
    }
  };

  const updateVendor = async () => {
    notify('Updating Vendor Data', 1000);
    const response = await api.put('/vendor/' + newVendor.id, newVendor);
    if (response.statusText === "OK") {
      console.log(response);
      notify('Updated Vendor Sucessfully', 1000);
      //setToken(response.data, response.data.accessToken);
      setTimeout(function () {
        navigate('/vendor')
      }, 1000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response_city = await api.get('/cities');
      if (response_city.statusText === "OK") {
        setCity(response_city.data);
      }
      if (vendorId > 0) {
        const response_vendor = await api.get('/vendor/' + vendorId);
        if (response_vendor.statusText === "OK") {
          setNewVendor(response_vendor.data);
        }
      }
    };
    fetchData();

  }, [vendorId]);


  return (
    <>
      <div className='col-9 mx-auto'>
        <div class="col-12 c-7-d mx-auto bg-pic h-30 my-5 pt-3 bg-clr">
          <h1 class="offset-2 h4 text-white fw-bold mt-5">New Vendor</h1>
          <div className='text-center text-white'>
            <div className="mt-5">
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
              <button type="submit" class="btn sbmt-btn px-4 text-white text-end mt-5" onClick={saveVendor}>Submit</button>

            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default NewVendor;  