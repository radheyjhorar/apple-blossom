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
                    <input type="search" id="search" className="form-control" />
                  </div>
                  <button onClick="" type="button" className="btn btn-primary">
                    <FontAwesomeIcon icon="fas fa-search" />
                  </button>
                </div>
                <ul className='navbar-nav'>
                  <li className='me-4'>
                    <Link to="login" className=''>
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
                  <div className='card border-left-primary shadow py-3'>
                    <div className='card-body'>
                      <div className='row no-gutters align-items-center'>
                        <div className='col mr-2'>
                          <div className='fs-0-7 fw-bold text-primary text-uppercase mb-1'>Earnings (Monthly)</div>
                          <div className='h5 mb-0 fw-bold text-gray-800'>$40,000</div>
                        </div>
                        <div className='col-auto'>
                          <FontAwesomeIcon icon="fas fa-calendar" className='fa-2x text-gray-300' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 mb-4'>
                  <div className='card border-left-success shadow py-3'>
                    <div className='card-body'>
                      <div className='row no-gutters align-items-center'>
                        <div className='col mr-2'>
                          <div className='fs-0-7 fw-bold text-success text-uppercase mb-1'>Earnings (ANNUAL)</div>
                          <div className='h5 mb-0 fw-bold text-gray-800'>$215,000</div>
                        </div>
                        <div className='col-auto'>
                          <FontAwesomeIcon icon="fa-solid fa-indian-rupee-sign" className='fa-2x text-gray-300' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 mb-4'>
                  <div className='card border-left-info shadow py-3'>
                    <div className='card-body'>
                      <div className='row no-gutters align-items-center'>
                        <div className='col mr-2'>
                          <div className='fs-0-7 fw-bold text-info text-uppercase mb-1'>Tasks</div>
                          <div className='row no-gutters align-items-center'>
                            <div className='col-auto'>
                              <div className='h5 mb-0 mr-3 fw-bold text-gray-800'>50%</div>
                            </div>
                            <div className='col'>
                              <div className='progress progress-sm mr-2'>
                                <div className='progress-bar w-50 bg-info' role='progressbar' aria-aria-valuenow={50} aria-aria-valuemin={0} aria-valuemax={100}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-auto'>
                          <FontAwesomeIcon icon="fas fa-clipboard-list " className='fa-2x text-gray-300' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-xl-3 col-md-6 mb-4'>
                  <div className='card border-left-warning shadow py-3'>
                    <div className='card-body'>
                      <div className='row no-gutters align-items-center'>
                        <div className='col mr-2'>
                          <div className='fs-0-7 fw-bold text-warning text-uppercase mb-1'>PENDING REQUESTS</div>
                          <div className='h5 mb-0 fw-bold text-gray-800'>18</div>
                        </div>
                        <div className='col-auto'>
                          <FontAwesomeIcon icon="fas fa-comments" className='fa-2x text-gray-300' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-xl-8 col-lg-7'>
                  <div className='card shadow mb-4'>
                    <div className='card-header py-3 d-flex flex-row align-items-center justify-content-between'>
                      <h6 className='m-0 font-weight-bold text-primary'>Earnings Overview</h6>
                      <div className='dropdown no-arrow'>
                        <Link to="" className='dropdown-toggle' role='button' id='dropdownMenuLink' aria-haspopup="true" aria-expanded="false" >
                          <FontAwesomeIcon icon="fas fa-ellipsis-v" className='fa-sm fa-fw text-gray-400' />
                        </Link>
                        <div className='dropdown-menu dropdown-menu-right shadow animated--fade-in' aria-labelledby='dropdownMenuLink'>
                            <div className='dropdown-header'>Dropdown Header:</div>
                            <Link to="" className='dropdown-item'>Action</Link>
                            <Link to="" className='dropdown-item'>Another action</Link>
                            <div className='dropdown-divider'></div>
                            <Link to="" className='dropdown-item'>Something else here</Link>
                        </div>
                      </div>
                    </div>
                    <div className='card-body'>
                      <div className='chart-area'>
                        <div className='chartjs-size-monitor'>
                          <div className='chartjs-size-monitor-expand'>
                            <div className=''></div>
                          </div>
                          <div className='chartjs-size-monitor-shrink'>
                            <div className=''></div>
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
      </div>
    </>
  );
}

export default Dashboard;  