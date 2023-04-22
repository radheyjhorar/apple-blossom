import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import api from '../../api/API';
import { ItemRows } from '../../components';


const NewCustomerOrder = (props) => {

  const [newItem, setNewItem] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);


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
    total_amount: 0,
    order_status: 0
  });



  
  const addItemRow = ()=>{

    const rowsInput={
        id:0,
        item_name: "",
        item_rate: 0,
        quantity: 0,
        amount: 0,
        item_status: 0
    } 
    
    setNewItem([...newItem, rowsInput])

}
const deleteItemRow = (index)=>{
    const items = [...newItem];
    items.splice(index, 1);
    setNewItem(items);
}

const handleChangeItem = (index, evnt)=>{

const { name, value } = evnt.target; 
const items = [...newItem];
items[index][name] = value;

if(name == 'item_rate' || name == 'quantity') {
  items[index]['amount'] = items[index]['item_rate'] * items[index]['quantity'] 
}
setNewItem(items);

}

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

  const validateOrder = () => {
      let isOrderValid = false;
      if(newCustomerOrder.customer_id <= 0) {
        isOrderValid  =  false;
      }
      // if(newCustomerOrder.total_amount <=  0) {
      //   isOrderValid  =  false;
      // }
      if(newCustomerOrder.order_status <=  0) {
        isOrderValid  =  false;
      }

      newItem.forEach((item, index) => {
          let isValid = false;
          if(item['item_name'].length > 0) {
              if(item['item_rate'] > 0) {
                if(item['quantity'] > 0) {
                  isValid = true;
                }
              }
          } 
         
          if(!isValid) {
            deleteItemRow(index);
        
          }

      })
      return isOrderValid;
  };

  const addNewCustomerOrder = async () => {
    notify('Adding New Order', 1000);
    //if(validateOrder() || true) {
      let total_amount = 0;
      newItem.forEach((itm) => {
        total_amount += itm.amount;
      })
      setNewCustomerOrder({
        ...newCustomerOrder,
        ['total_amount']: total_amount
      });
      const response_customer_order = await api.post('/customer-order', [newCustomerOrder, newItem]);
      if (response_customer_order.statusText === "OK") {
        console.log(response_customer_order);
        notify('Added New Order Sucessfully', 1000);
        //setToken(response.data, response.data.accessToken);
        setTimeout(function () {
          navigate('/customer-order')
        }, 1000);
      }
    //}
  };

  const updateCustomerOrder = async () => {
    notify('Updating Customer Order Data', 1000);
    const response_cust_order = await api.put('/customer-order/' + newCustomerOrder.id, [newCustomerOrder, newItem]);
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
      const response_order_status = await api.get('/order-status/');
        if (response_order_status.statusText === "OK") {
          setOrderStatus(response_order_status.data);
        }

        const response = await api.post('/customer/getAll', { is_delete: 0, include: false, attributes: ['id', 'name'] });
        if (response.statusText === "OK") {
          setCustomer(response.data);
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
          <li onClick={saveCustomerOrder}>
            <FontAwesomeIcon icon="fa-solid fa-check" className='fa-icon-h-w mt-2 ms-2' />
            <p>Submit</p>
          </li>
          <li onClick={addItemRow}>
            <FontAwesomeIcon icon="fa-solid fa-plus" className='fa-icon-h-w mt-2 ms-2' />
            <p >New Line</p>
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
          <select id='drp-dwn-bg-clr' className='city-drp-dwn col-4 col-8 vndr-ipt my-4 d-inline-block' name='customer_id' value={newCustomerOrder.customer_id} onChange={handleChange} >
                <option value="0">Select Customer</option>
                {
                  (customer && customer.length > 0 && customer.map(
                    (c) => {
                      return (
                        <option value={c.id}>{c.name}</option>
                      )
                    }
                  ))
                }
              </select>
            <input type="text" class="col-8 vndr-ipt d-inline-block" placeholder="Order Description" name='order_description' value={newCustomerOrder.order_description} onChange={handleChange} />
            {/* <input type="number" class="col-7 my-4 vndr-ipt d-inline-block" placeholder="Total Amount" name='total_amount' value={newCustomerOrder.total_amount} onChange={handleChange} /> */}
            <select id='drp-dwn-bg-clr' className='city-drp-dwn col-4 col-8 vndr-ipt my-4 d-inline-block' name='order_status' value={newCustomerOrder.order_status} onChange={handleChange} >
                <option value="0">Select Order Status</option>
                {
                  (orderStatus && orderStatus.length > 0 && orderStatus.map(
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
                <ItemRows  items={newItem} deleteItemRow={deleteItemRow} handleChangeItem={handleChangeItem} />
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