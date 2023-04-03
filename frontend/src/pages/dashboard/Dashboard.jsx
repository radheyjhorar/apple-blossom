import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './dasboard.css';
import api from '../../api/API';


const Dashboard = () => {


  return (
    <>
      
        <div className='col-2 bg-clr wdt-17-75'>
          <ul className='navbar-nav sidebar-brand'>
            <Link to="" className='text-white d-flex my-3 txt-d-n align-items-center justify-content-center'>
              <div className='rotate-n-15'>
              <FontAwesomeIcon icon="fa-solid fa-face-laugh-wink" className='i-lgh-wnk' />
              </div>
              <div className='text-white mx-3 text-uppercase fw-bold'>
              SB Admin <sup>2</sup>
              </div>
            </Link>
            <hr className='text-white my-0'/>

            <li className='py-3'>
                <Link to="" className='text-white fw-500 fs-small ' >
                <FontAwesomeIcon icon="fas fa-tachometer-alt" className='techo-m-i'/>
                  <span>Dashboard</span>
                </Link>
            </li>
            <hr className='text-white my-0'/>

            <div className='text-light-gray text-uppercase fs-0-66 fw-bold my-2'>Interface</div>

            <li className='ms-2'>
              <Link to="" className='nav-link collapsed'>
                <i className='fas fa-fw fa-cog'></i>
                <span>Components</span>
              </Link>
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



        <div className='col px-0'>
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