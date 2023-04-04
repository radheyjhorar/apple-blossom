import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './dasboard.css';
import api from '../../api/API';


const Dashboard = () => {


  return (
    <>

   



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