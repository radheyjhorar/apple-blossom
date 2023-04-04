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
            <div className='col-2 bg-clr wdt-20'>
                <ul className='navbar-nav'>
                    <Link to="" className='text-white d-flex my-3 first-link align-items-center justify-content-center'>
                        <div className='rotate-n-15'>
                            <FontAwesomeIcon icon="fa-solid fa-face-laugh-wink" className='i-lgh-wnk' />
                        </div>
                        <div className='text-white ms-1 text-uppercase fw-bold'>
                            Apple Blossom
                        </div>
                    </Link>
                    <hr className='text-white my-0' />

                    <div className='py-3'>
                        <Link to="" className='text-white fw-500 fs-small ' >
                            <FontAwesomeIcon icon="fa-solid fa-chart-line" className="techo-m-i me-2" />
                            <span>{currentPage}</span>
                        </Link>
                    </div>
                    <hr className='text-white my-0' />


                    <li className='text-light-white mt-4 fw-500'>
                        <Link to="vendor" className="me-2">
                            <FontAwesomeIcon icon="fas fa-truck" className="me-2" />
                            <span>Vendor</span>
                        </Link>
                    </li>

                    <li className='text-light-white mt-4 fw-500 '>
                        <Link to="vendor-stock" className="me-2">
                            <FontAwesomeIcon icon="fas fa-warehouse" className="me-2"/>
                            <span>Vendor Stock</span>
                        </Link>
                    </li>

                    <li className='text-light-white mt-4 fw-500 '>
                        <Link to="vendor-payment-history" className="me-2">
                            <FontAwesomeIcon icon="fas fa-history" className='me-2' />
                            <span className="overflow-hidden">Vendor Payment History</span>
                        </Link>
                    </li>

                    <li className='text-light-white mt-4 fw-500'>
                        <Link to="customer" className="me-2">
                            <FontAwesomeIcon icon="fa-solid fa-user-plus" className='me-2' />
                            <span>Customer</span>
                        </Link>
                    </li>

                    <li className='text-light-white mt-4 fw-500 '>
                        <Link to="customer-order" className='me-2'>
                            <FontAwesomeIcon icon="fa-solid fa-boxes" className="me-2"/>
                            <span>Customer Order</span>
                        </Link>
                    </li>

                    <li className='text-light-white mt-4 fw-500 '>
                        <Link to="customer-order-item" className='me-2'>
                            <FontAwesomeIcon icon="fa-solid fa-rectangle-list" className="me-2"/>
                            <span>Customer Order Item</span>
                        </Link>
                    </li>

                    <li className="text-light-white mt-4 fw-500">
                        <Link to="customer-payment-history" className='me-2'>
                            <FontAwesomeIcon icon="fas fa-history" className="me-2"/>
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