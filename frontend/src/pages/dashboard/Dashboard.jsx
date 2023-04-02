import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './dasboard.css';
import api from '../../api/API';


const Dashboard = () => {


  return (
    <>
      
        <div className='col-2'>
          <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'>
            <a className='sidebar-brand d-flex align-items-center justify-content-center' href="/">
              <div className='sidebar-brand-icon rotate-n-15'>
                <i className='fas fa-laugh-wink'></i>
              </div>
              <div className='sidebar-brand-text mx-3'>
              SB Admin <sup>2</sup>
              </div>
            </a>
            <hr className='sidebar-divider my-0'/>
            <li className='nav-item active'>
                <a href="/" className='nav-link'>
                  <i className='fas fa-fw fa-tachometer-alt'>

                  </i>
                  <span>Dashboard</span>
                </a>
            </li>
            <hr className='sidebar-divider'/>

            <div className='sidebar-heading'>Interface</div>

            <li className='nav-item'>
              <a href="/" className='nav-link collapsed'>
                <i className='fas fa-fw fa-cog'></i>
                <span>Components</span>
              </a>
            </li>

            <li className='nav-item'>
              <a href="/" className='nav-link collapsed'>
                <i className='fas fa-fw fa-wrench'></i>
                <span>Utilities</span>
              </a>
            </li>
            <hr className='sidebar-divider'/>

            <div className='sidebar-heading'>Addons</div>

            <li className='nav-item'>
              <a href="/" className='nav-link collapsed'>
                <i className='fas fa-fw fa-folder'></i>
                <span>Pages</span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="" className='nav-link'>
                <i className='fas fa-fw fa-chart-area'></i>
                <span>Charts</span>
              </a>
            </li>
            <li className='nav-item'>
              <a href="" className='nav-link'>
                <i className='fas fa-fw fa-table'></i>
                <span>Tables</span>
              </a>
            </li>
            <hr className='sidebar-divider d-none d-md-block'/>
            <div className='text-center d-none d-md-inline'>
              <button className='rounded-circle border-0'>

              </button>
            </div>

          </ul>
        </div>



        <div className='col-10'>
          <div className='d-flex flex-column'>
            <div>
              <nav className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow'>
                <form action="" className='d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search'>
                  <div className='input-group'>
                    <input type="text" className='form-control bg-light border-0 small' placeholder='Search for...'/>
                    <div className='input-group-append'>
                      <button className='btn btn-primary' type='button'>
                        <i className='fas fa-search fa-sm'></i>
                      </button>
                    </div>
                  </div>
                </form>
                <ul className='navbar-nav ml-auto'>
                  <li className='nav-item dropdown no-arrow mx-1'>
                    <a href="/" className='nav-link dropdown-toggle'>
                      <i className='fas fa-bell fa-fw'></i>
                      <span className='badge badge-danger badge-counter'>3+</span>
                    </a>
                  </li>
                  <li className='nav-item dropdown no-arrow mx-1'>
                    <a href="/" className='nav-link dropdown-toggle'>
                      <i className='fas fa-envelope fa-fw'></i>
                      <span className='badge badge-danger badge-counter'>7</span>
                    </a>
                  </li>
                  <div className='topbar-divider d-none d-sm-block'></div>

                  <li className='nav-item dropdown no-arrow'>
                    <a href="/" className='nav-link dropdown-toggle'>
                      <span className='mr-2 d-none d-lg-inline text-gray-600 small'>Douglas McGee</span>
                      <img className='img-profile rounded-circle' src="" alt="" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default Dashboard;  