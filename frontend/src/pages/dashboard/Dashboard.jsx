import React, { Component } from 'react';

import api from '../../api/API';



const Dashboard = () => {


  return (
    <>
      <div>
        <div className='col-2 bg-primary'>
          <div>
            <h2>Admin</h2>
          </div>
          <div>
            <h3><span></span>Dashboard</h3>
          </div>
          <div>
            <h4>INTERFACE</h4>
            <div>
              <p>Components</p>
            </div>
          </div>

        </div>
        <div className='col-10 bg-white'></div>
        <h1 className="offset-2 h4 my-apk-clr mt-5">Dashboard</h1>

      </div>
    </>
  );
}

export default Dashboard;  