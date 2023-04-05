import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import api from '../../api/API';



const NewVendorStock = (props) => {

  const navigate = useNavigate();

  const { vendorStockId } = useParams();

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

  const [newVendorStock, setNewVendorStock] = useState({
    id: vendorStockId || 0,
    vendor_id: "",
    description: "",
    rate: "",
    quantity: "",
    amount: "",
    stock_date: ""
  });


  const handleChange = e => {

    const { name, value } = e.target;
    setNewVendorStock({
      ...newVendorStock,
      [name]: value
    })
  };

  const saveVendorStock = () => {
    if (vendorStockId > 0) {
      updateVendorStock();
    } else {
      addNewvendorStock();
    }
  }

  const addNewvendorStock = async () => {
    notify('Adding New Vendor Stock', 1000);
    const response = await api.post('/vendor-stock', newVendorStock);
    if (response.statusText === "OK") {
      console.log(response);
      notify('Added New Vendor Stock Sucessfully', 1000);
      //setToken(response.data, response.data.accessToken);
      setTimeout(function () {
        navigate('/vendor-stock')
      }, 1000);
    }
  };

  const updateVendorStock = async () => {
    notify('Updating Vendor Stock Data', 1000);
    const response = await api.put('/vendor-stock/' + newVendorStock.id, newVendorStock);
    if (response.statusText === "OK") {
      console.log(response);
      notify('Updated Vendor stock Sucessfully', 1000);
      //setToken(response.data, response.data.accessToken);
      setTimeout(function () {
        navigate('/vendor-stock')
      }, 1000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (vendorStockId > 0) {
        const response_vendor_stock = await api.get('/vendor-stock/' + vendorStockId);
        if (response_vendor_stock.statusText === "OK") {
          setNewVendorStock(response_vendor_stock.data);
        }
      }
    };
    fetchData();

  }, [vendorStockId]);



  return (
    <>
      <div className='col-9 mx-auto'>
        <div class="col-12 c-7-d mx-auto bg-pic my-5 pt-2 bg-clr">
          <h1 class="offset-2 h4 fw-bold text-white mt-5">Vendor New Stock</h1>

          <div class="text-center">
            <div className='mt-5'>
              <input type="number" class="col-4 vndr-ipt me-1 d-inline-block" placeholder="Vendor ID" name="vendor_id" value={newVendorStock.vendor_id} onChange={handleChange} />
              <input type="number" class="col-4 vndr-ipt d-inline-block" placeholder="Rate" name="rate" value={newVendorStock.rate} onChange={handleChange} />
            </div>
            <div className='my-4'>
              <input type="number" class="col-4 vndr-ipt me-1 d-inline-block" placeholder="Quantity" name="quantity" value={newVendorStock.quantity} onChange={handleChange} />
              <input type="date" class="col-4 vndr-ipt d-inline-block" placeholder="Stock Date" name="stock_date" value={newVendorStock.stock_date} onChange={handleChange} />
            </div>
            <input type="number" class="col-8 mb-4 vndr-ipt d-inline-block" placeholder="Amount" name="amount" value={newVendorStock.quantity * newVendorStock.rate} onChange={handleChange} />
            <input type="text" class="col-8 vndr-ipt d-inline-block" placeholder="Description" name="description" value={newVendorStock.description} onChange={handleChange} />
            <div class="mt-5">
              <button type="submit" class="btn sbmt-btn px-4 mb-5 text-white text-center" onClick={addNewvendorStock}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default NewVendorStock;  