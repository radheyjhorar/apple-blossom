import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './dasboard.css';
import api from '../../api/API';


const Dashboard = () => {


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

          <li className='text-light-white mt-4 fw-500 '>
            <Link to="vendor">
            <FontAwesomeIcon icon="fa-solid fa-industry" className='me-2'/>
              <span>Vendor</span>
            </Link>
          </li>

          <li className='text-light-white mt-4 fw-500 '>
            <Link to="vendor-stock">
            <FontAwesomeIcon icon="fas fa-inventory" />
              <span>Vendor Stock</span>
            </Link>
          </li>

          <li className='text-light-white mt-4 fw-500 '>
            <Link to="vendor-payment-history">
            <FontAwesomeIcon icon="fas fa-history" className='me-2'/>
              <span>Vendor Payment History</span>
            </Link>
          </li>

          <li className='text-light-white mt-4 fw-500 '>
            <Link to="customer">
            <FontAwesomeIcon icon="fa-solid fa-users" className='me-2'/>
              <span>Customer</span>
            </Link>
          </li>

          <li className='text-light-white mt-4 fw-500 '>
            <Link to="customer-order" className=''>
              <FontAwesomeIcon icon="fas fa-inventory" />
              <span>Customer Order</span>
            </Link>
          </li>

          <li className='text-light-white mt-4 fw-500 '>
            <Link to="customer-payment-history" className=''>
              <FontAwesomeIcon icon="fas fa-inventory" />
              <span>Customer Payment History</span>
            </Link>
          </li>

          <hr className='text-white my-3' />

        </ul>
      </div>



      <div className='col px-0'>
        <div className='d-flex flex-column'>
          <div>
            <header>
              <nav className='navbar navbar-expand-lg navbar-light bg-light mb-4 static-top shadow'>
                <div className="input-group ms-3">
                  <div className="form-outline w-18">
                    <input type="search" id="form1" className="form-control" />
                  </div>
                  <button type="button" className="btn btn-primary">
                    <FontAwesomeIcon icon="fas fa-search" />
                  </button>
                </div>
                <ul className='navbar-nav'>
                  <li className='me-4'>
                    <Link to="" className=''>
                      <div className='btn btn btn-primary'>Login</div>
                    </Link>
                  </li>
                </ul>
              </nav>
            </header>

            <div className='container'>
              <div className='d-sm-flex align-items-center justify-content-between mb-4'>
                <h1 className='h3 mb-0 text-gray-800'>Dashboard</h1>
                <Link className='d-none d-sm-inline-block btn btn-sm text-white btn-primary shadow-sm'>
                  <FontAwesomeIcon icon="fa-solid fa-download" className='text-white-50 fw-bold me-1' />
                  Generate Report
                </Link>
              </div>
              <div className='row'>
                <div className='col-xl-3 col-md-6 mb-4'>
                  <div className='card border-left-primary shadow h-100 py-2'>
                    <div className='card-body'>
                      <div className='row no-gutters align-items-center'>
                        <div className='col mr-2'>
                          <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>Earnings (Monthly)</div>
                          <div className='h5 mb-0 font-weight-bold text-gray-800'>$40,000</div>
                        </div>
                        <div className='col-auto'>
                          <FontAwesomeIcon icon="fas fa-calendar" className='fa-2x text-gray-300"' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 mb-4'>
                  <div className='card border-left-success shadow h-100 py-2'>
                    <div className='card-body'>
                      <div className='row no-gutters align-items-center'>
                        <div className='col mr-2'>
                          <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>Earnings (Monthly)</div>
                          <div className='h5 mb-0 font-weight-bold text-gray-800'>$40,000</div>
                        </div>
                        <div className='col-auto'>
                          <FontAwesomeIcon icon="fas fa-calendar" className='fa-2x text-gray-300"' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 mb-4'>
                  <div className='card border-left-primary shadow h-100 py-2'>
                    <div className='card-body'>
                      <div className='row no-gutters align-items-center'>
                        <div className='col mr-2'>
                          <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>Earnings (Monthly)</div>
                          <div className='h5 mb-0 font-weight-bold text-gray-800'>$40,000</div>
                        </div>
                        <div className='col-auto'>
                          <FontAwesomeIcon icon="fas fa-calendar" className='fa-2x text-gray-300"' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 mb-4'>
                  <div className='card border-left-primary shadow h-100 py-2'>
                    <div className='card-body'>
                      <div className='row no-gutters align-items-center'>
                        <div className='col mr-2'>
                          <div className='text-xs font-weight-bold text-primary text-uppercase mb-1'>Earnings (Monthly)</div>
                          <div className='h5 mb-0 font-weight-bold text-gray-800'>$40,000</div>
                        </div>
                        <div className='col-auto'>
                          <FontAwesomeIcon icon="fas fa-calendar" className='fa-2x text-gray-300"' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;  