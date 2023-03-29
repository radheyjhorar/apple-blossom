import React from 'react';
import './header.css';
//import logo from "./logo.svg";

import { Link } from 'react-router-dom';
import api from '../../api/API';
import { Login, AuthUser } from "../../components";

function Header() {




        return (
            <nav className="navbar nav-bg-color align-items-center">
                <div className="container-fluid">
                    <Link to={'/'}>
                        <Logo />
                    </Link>
                    <div className="d-flex">
                        <div className="">
                            <Menu />
                        </div>
                       
          
                        {/* <button className="App-link" onClick={displayRazorpay}>
                    Pay ₹500
                </button> */}

                    </div>
                </div>
            </nav>
        );
    
}
function Logo() {
    return (
        <span className="navbar-text text-white ps-4 fs-4 fw-bold">WayTo. Education</span>
    );
}

function Menu() {
    const {getToken} = AuthUser();
    return (
        <>
            <ul className="list-inline fw-light lir">
                <li className="list-inline-item pe-4 dowapp">
                   <Link to="/" className="text-decoration-none text-white">Download App</Link>
                </li>
                <li className="list-inline-item pe-4">
                    <Link to="/" className="text-decoration-none text-white">News</Link>
                </li>
                <li className="list-inline-item">
                <Link to="/" className="text-decoration-none text-white">List Your School
                    </Link>
                </li>
                <li className="list-inline-item pe-3">
                <Link to="/" className="text-decoration-none bg-red text-uppercase text-white">Free</Link>
                </li>
                <li className="list-inline-item pe-3">
                {(!getToken())?
                <button className='btn pe-3 lgn-btn rounded-pill'>  
                    <Link to="/login" className="text-white fs-10 ms-2" >Login</Link>
                </button>

                :<div className="text-end bg-white rounded-pill" style={{ height: '100%' }}>
                <i className="fa-solid fa-bars text-muted ms-2 mt-1 p-2 pb-0"></i>
                <img src="" alt="user-profile" className="rounded-circle me-2 pb-0" style={{ width: '30px' }} />

                </div>
                }
                </li>
            </ul>
        </>
    );
}



async function displayRazorpay() {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
    }

    // creating a new order
    const result = await api.post("/payment/orders");

    if (!result) {
        alert("Server error. Are you online?");
        return;
    }

    // Getting the order details back
    const { amount, id: order_id, currency } = result.data;

    const options = {
        key: "rzp_test_iPNIOM7jvMUlhz", // Enter the Key ID generated from the Dashboard
        amount: amount.toString(),
        currency: currency,
        name: "WayToEducation",
        description: "Test Transaction",
       // image: { logo },
        order_id: order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            const result = await api.post("/payment/success", data);

            alert(result.data.msg);
        },
        prefill: {
            name: "Soumya Dey",
            email: "SoumyaDey@example.com",
            contact: "9999999999",
        },
        notes: {
            address: "Soumya Dey Corporate Office",
        },
        theme: {
            color: "#61dafb",
        },
    };

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}


export default Header;  