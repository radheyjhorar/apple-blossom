import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import api from '../../api/API';


const NewCustomerOrder = (props) => {

  const [order_status, setOrder_status] = useState([]);

  const navigate = useNavigate();

  const { customerOrderId } = useParams();

  const notify = (msg, time) => toast.info(msg, {
    position: "top-right",
    autoClose: time,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark"
  });

  const [newCustomerOrder, setNewCustomerOrder] = useState({
    id: customerOrderId || 0,
    customer_id: "",
    order_description: "",
    total_amount: "",
    order_status: ""
  });


  const handleChange = e => {

    const { name, value } = e.target;
    setNewCustomerOrder({
      ...newCustomerOrder,
      [name]: value
    })
  };

  const saveCustomerOrder = () => {
    if (customerOrderId > 0) {
      updateCustomerOrder();
    } else {
      addNewCustomerOrder();
    }
  }

  const addNewCustomerOrder = async () => {
    notify('Adding New Order', 1000);
    const response_customer_order = await api.post('/customer-order', newCustomerOrder);
    if (response_customer_order.statusText === "OK") {
      console.log(response_customer_order);
      notify('Added New Order Sucessfully', 1000);
      //setToken(response.data, response.data.accessToken);
      setTimeout(function () {
        navigate('/customer-order')
      }, 1000);
    }
  };

  const updateCustomerOrder = async () => {
    notify('Updating Customer Order Data', 1000);
    const response_cust_order = await api.put('/customer-order/' + newCustomerOrder.id, newCustomerOrder);
    if (response_cust_order.statusText === "OK") {
      console.log(response_cust_order);
      notify('Updated Customer Order Sucessfully', 1000);
      //setToken(response.data, response.data.accessToken);
      setTimeout(function () {
        navigate('/customer-order')
      }, 1000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response_order_status = await api.get('/order_status');
      if (response_order_status.statusText === "OK") {
        setOrder_status(response_order_status.data);
      }

      if (customerOrderId > 0) {
        const response_customer_order = await api.get('/customer-order/' + customerOrderId);
        if (response_customer_order.statusText === "OK") {
          setNewCustomerOrder(response_customer_order.data);
        }
      }
    };
    fetchData();

  }, [customerOrderId]);


  return (
    <>

      <div class="sticky-container">
        <ul class="sticky">
          <li>
            <FontAwesomeIcon icon="fa-solid fa-check" className='fa-icon-h-w mt-2 ms-2' />
            <p>Submit</p>
          </li>
          <li>
            <FontAwesomeIcon icon="fa-solid fa-plus" className='fa-icon-h-w mt-2 ms-2' />
            <p>New Line</p>
          </li>
        </ul>
      </div>


      {/* <div class="fixed-btn fixed-top text-end">
        
        <button type="submit" class="btn sbmt-btn w-7 px-4 text-white mb-2" onClick={saveCustomerOrder}>Submit</button>
        
        <button type="submit" class="btn sbmt-btn w-7 px-4 text-white" onClick="">New Line</button>
      
      </div> */}


      <div className='col-9 mx-auto'>
        <div class="col-12 c-7-d mx-auto bg-pic bg-clr py-5 my-4">

          <h1 class="offset-2 h4 text-white fw-bold">{customerOrderId > 0 ? 'Update' : 'New'} Customer Order</h1>
          <div class="text-center">
            <input type="number" class="col-8 vndr-ipt my-4 d-inline-block" placeholder="Customer ID" name='customer_id' value={newCustomerOrder.customer_id} onChange={handleChange} />
            <input type="text" class="col-8 vndr-ipt d-inline-block" placeholder="Order Description" name='order_description' value={newCustomerOrder.order_description} onChange={handleChange} />
            {/* <input type="number" class="col-7 my-4 vndr-ipt d-inline-block" placeholder="Total Amount" name='total_amount' value={newCustomerOrder.total_amount} onChange={handleChange} /> */}

            <select className='city-drp-dwn col-8 my-4' name='Order Status'  value={newCustomerOrder.order_status} onChange={handleChange} >
                <option value="0">Order Status</option>
                <option value="1">Deleverd</option>
                <option value="2">Panding</option>
                <option value="3">Cancel</option>
                <option value="4">Return</option>
              </select>

              <select className='city-drp-dwn col-8' name='Order Status' value={newCustomerOrder.order_status} onChange={handleChange} >
                <option value="0">Status</option>
                {
                  (order_status && order_status.length > 0 && order_status.map(
                    (c) => {
                      return (
                        <option value={c.id}>{c.order_status}</option>
                      )
                    }
                  ))
                }
                </select>
          </div>
        </div>

        <div className='col'>
          <div className=''>
            <table className='table'>
              <thead className=''>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Item Rate</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>2</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>3</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>4</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>5</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>6</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>7</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>8</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>9</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>10</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>11</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>12</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>13</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>14</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <th scope='row'>15</th>
                  <td><input type="text" className='col-10' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td><input type="number" className='col-6' disabled/></td>
                  <td><input type="number" className='col-8' disabled/></td>
                  <td className='col-2'>
                  <Link to={""} className='btn btn-info btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-edit" className='text-white'/>
                    </Link>
                    <Link to="" className='btn btn-success btn-sm me-1'>
                      <FontAwesomeIcon icon="fas fa-save"  className='text-white'/>
                    </Link>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

      </div>
      <ToastContainer />
    </>
  );
}

export default NewCustomerOrder;  