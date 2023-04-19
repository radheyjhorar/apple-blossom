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

  const [vendor, setVendor] = useState([]);


  const handleChange = e => {
    console.log(e.target);
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
      const response = await api.post('/vendor/getAll', { is_delete: 0, include: false, attributes: ['id', 'vendor_name'] });
      if (response.statusText === "OK") {
        setVendor(response.data);
      }
    };
    fetchData();

  }, [vendorStockId]);



  return (
    <>
      <div className='col-9 mx-auto'>
        <div className="col-12 c-7-d mx-auto bg-pic my-5 pt-2 bg-clr">
          <h1 className="offset-2 h4 fw-bold text-white mt-5">{ vendorStockId > 0?'Update':'New'} Vendor Stock</h1>

          <div className="text-center">
            <div className='mt-5'>
              <select className='city-drp-dwn col-4 col-8 vndr-ipt my-4 d-inline-block' name="vendor_id" value={newVendorStock.vendor_id} onChange={handleChange}  >
                <option value="0">Select Vendor</option>
                {
                  (vendor && vendor.length > 0 && vendor.map(
                    (c) => {
                      return (
                        <option value={c.id} key={c.id}>{c.vendor_name}</option>
                      )
                    }
                  ))
                }
              </select>
              <input type="number" className="col-4 vndr-ipt d-inline-block" placeholder="Rate" name="rate" value={newVendorStock.rate} onChange={handleChange} />
            </div>
            <div className='my-4'>
              <input type="number" className="col-4 vndr-ipt me-1 d-inline-block" placeholder="Quantity" name="quantity" value={newVendorStock.quantity} onChange={handleChange} />
              <input type="date" className="col-4 vndr-ipt d-inline-block" placeholder="Stock Date" name="stock_date" value={newVendorStock.stock_date} onChange={handleChange} />
            </div>
            <input type="number" className="col-8 mb-4 vndr-ipt d-inline-block" placeholder="Amount" name="amount" value={newVendorStock.quantity * newVendorStock.rate} onChange={handleChange} />
            <input type="text" className="col-8 vndr-ipt d-inline-block" placeholder="Description" name="description" value={newVendorStock.description} onChange={handleChange} />
            <div className="mt-5">
              <button type="submit" className="btn sbmt-btn px-4 mb-5 text-white text-center" onClick={saveVendorStock}>Submit</button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </>
  );
}

export default NewVendorStock;  