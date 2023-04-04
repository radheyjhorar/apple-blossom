import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './sidebar.css';



const SideBar = (props) => {
    const [currentPage, setCurrentPage] = useState('Dashboard');

    useEffect(() => {
        setCurrentPage(props.pageName);

    }, [props])

    return (
        <>
            <div className='col-2 bg-clr wdt-17-75 h-100vw'>
                <ul className='navbar-nav'>
                    <Link to="" className='text-white d-flex my-3 first-link align-items-center justify-content-center'>
                        <div className='rotate-n-15'>
                            <FontAwesomeIcon icon="fa-solid fa-face-laugh-wink" className='i-lgh-wnk' />
                        </div>
                        <div className='text-white mx-3 text-uppercase fw-bold'>
                            Apple Blossom<sup>2</sup>
                        </div>
                    </Link>
                    <hr className='text-white my-0' />

                    <div className='py-3'>
                        <Link to="" className='text-white fw-500 fs-small ' >
                            <FontAwesomeIcon icon="fas fa-tachometer-alt" className="techo-m-i" />
                            <span>{currentPage}</span>
                        </Link>
                    </div>
                    <hr className='text-white my-0' />


                    <li className='text-light-white mt-4 fw-500'>
                        <Link to="vendor">
                            <FontAwesomeIcon icon="fa-solid fa-industry" className="me-2" />
                            <span>Vendor</span>
                        </Link>
                    </li>

                    <li className='text-light-white mt-4 fw-500 '>
                        <Link to="vendor-stock">
                            <FontAwesomeIcon icon="fa-solid fa-industry" />
                            <span>Vendor Stock</span>
                        </Link>
                    </li>

                    <li className='text-light-white mt-4 fw-500 '>
                        <Link to="vendor-payment-history">
                            <FontAwesomeIcon icon="fas fa-history" className='me-2' />
                            <span>Vendor Payment History</span>
                        </Link>
                    </li>

                    <li className='text-light-white mt-4 fw-500 '>
                        <Link to="customer">
                            <FontAwesomeIcon icon="fa-solid fa-users" className='me-2' />
                            <span>Customer</span>
                        </Link>
                    </li>

                    <li className='text-light-white mt-4 fw-500 '>
                        <Link to="customer-order" className='me-2'>
                            <FontAwesomeIcon icon="fa-solid fa-users" />
                            <span>Customer Order</span>
                        </Link>
                    </li>

                    <li className="text-light-white mt-4 fw-500">
                        <Link to="customer-payment-history" className=''>
                            <FontAwesomeIcon icon="fa-solid fa-users" />
                            <span>Customer Payment History</span>
                        </Link>
                    </li>

                    <hr className="text-white my-3" />

                </ul>
            </div>

        </>
    );
}

export default SideBar; 