import React, { Component } from 'react';
import { school3 } from '../../assets';

class SchoolSupplies extends Component {

  render() {

    const image = {
      backgroundImage: "url(" + school3 + ")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '340px',
      borderRadius: '1%',
      boxShadow: '0 4px 8px 0 rgb(0 0 0 / 20%)'
    };

    return (
      <div className="bg-light p-4">
        <div className='px-sm-4'>
          <h3 className=" mb-4 cursive" >School <span className="fs-4 fw-bold">Supplies</span></h3>
          <div className="mb-4" style={image}>
            <h1 className="fw-bold text-center text-primary mb-4 pt-4 display-3 cursive">
              School supplies</h1>
            <h3 className="text-center text-dark cursive">For your everyday needs</h3>
          </div>
        </div>
      </div>
    );
  }
}
export default SchoolSupplies;  