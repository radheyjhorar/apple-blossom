import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './side-bar.css';


const SideBar = () => {

    return (
        <>
            <div className='col-2 bg-clr wdt-17-75 h-100vw'>
                <ul className='navbar-nav'>
                    <Link to="" className='text-white d-flex my-3 first-link align-items-center justify-content-center'>
                        <div className='rotate-n-15'>
                            <FontAwesomeIcon icon="fa-solid fa-face-laugh-wink" className='i-lgh-wnk' />
                        </div>
                        <div className='text-white mx-3 text-uppercase fw-bold'>
                            SB Admin <sup>2</sup>
                        </div>
                    </Link>
                    <hr className='text-white my-0' />

                    <div className='py-3'>
                        <Link to="" className='text-white fw-500 fs-small ' >
                            <FontAwesomeIcon icon="fas fa-tachometer-alt" className='techo-m-i' />
                            <span>Dashboard</span>
                        </Link>
                    </div>
                    <hr className='text-white my-0' />

                    <div className='text-white text-center bg-secondary text-uppercase fs-0-66 fw-bold my-2'>All Pages</div>

                    <li className='text-light-white mt-2 fw-500 '>
                        <Link to="vendor" className=''>
                            <FontAwesomeIcon icon="fas fa-hand-receiving" />
                            <span>Vendor</span>
                        </Link>
                    </li>

                    <li className='text-light-white mt-2 fw-500 '>
                        <Link to="vendor-stock" className=''>
                            <FontAwesomeIcon icon="fas fa-inventory" />
                            <span>Vendor Stock</span>
                        </Link>
                    </li>

                    <li className='text-light-white  mt-2 fw-500 '>
                        <Link to="vendor-payment-history" className=''>
                            <FontAwesomeIcon icon="fas fa-inventory" />
                            <span>Vendor Payment History</span>
                        </Link>
                    </li>

                    <li className='text-light-white  mt-2 fw-500 '>
                        <Link to="customer" className=''>
                            <FontAwesomeIcon icon="fas fa-inventory" />
                            <span>Customer</span>
                        </Link>
                    </li>

                    <li className='text-light-white  mt-2 fw-500 '>
                        <Link to="customer-order" className=''>
                            <FontAwesomeIcon icon="fas fa-inventory" />
                            <span>Customer Order</span>
                        </Link>
                    </li>

                    <li className='text-light-white  mt-2 fw-500 '>
                        <Link to="customer-payment-history" className=''>
                            <FontAwesomeIcon icon="fas fa-inventory" />
                            <span>Customer Payment History</span>
                        </Link>
                    </li>

                    <hr className='text-white my-3' />

                </ul>
            </div>
        </>
    );
}

export default SideBar; 