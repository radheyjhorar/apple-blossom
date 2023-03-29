import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";


import './footer.css';


function Footer(props) {

    const [city, setCity] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        setIsLoading(true);
        console.log(props.city);
        if (props.city && props.city.length > 0) {
            setCity(props.city);

        }
        setIsLoading(false);

    }, [props.city])



    const CityList = (data) => {

        var size = 21; let arrayOfArrays = [];
        for (let i = 0; i <= 83 && i < data.length; i += size) {
            arrayOfArrays.push(data.slice(i, i + size));
        }

        const result = (arrayOfArrays && arrayOfArrays.length > 0 && arrayOfArrays.map((cities, index) => {
            return (
                <ul className="col-3 d-inline-block list-unstyled" key={index}>
                    {cities.length > 0 && cities.map((c) => {
                        return (<li key={c.id}>Schools in <Link to={'/search/' + c.name}>{c.name}</Link></li>)
                    })}
                </ul>
            )
        }));

        return (
            <>
                {result}
            </>
        )
    };



    return (
        <footer style={{ backgroundColor: 'black' }}>
            <div className="container-fluid text-center bg-1f">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-9 px-5'>
                            <div className='offset-3 col-3'>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bb-1px mb-4">
                <div className="container">
                    <div className="row justify-content-center fs-xxsmall mb-1 text-gray mt-8px">
                        <div className='col-9 px-5'>
                            {CityList(city)}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className=" row">
                    <div className="col-3 ms-3 text-light-gray d-flex">
                        <h3 className='fw-bolder fs-1-6'><Link to={'/'}>WayTo.Education</Link></h3>
                    </div>
                    <div className="col-2 mt-3 text-light-gray">
                        <div className="fs-sml mb-3">COMPANY</div>
                        <ul className="list-unstyled text-gray fs-sml">
                            <li>
                                <Link to={'/about-us/'}>About us</Link>
                            </li>
                            <li><Link to={'/careers/'}>careers</Link></li>
                            <li><Link to={'/terms-and-conditions/'}>Terms</Link></li>
                            <li><Link to={'/privacy-policy/'}>Privacy policy</Link></li>
                            <li><Link to={'/contact-us/'}>Contact us</Link></li>
                            <li>Resistor for schools</li>
                            <li>Resistor for supplies</li>
                            <li>Resistor for jobs</li>
                            <li>Post school jobs</li>
                        </ul>
                    </div>
                    <div className="col-2 mt-3 d-flex text-light-gray">
                        <p className='fs-sml'>EXPLORE</p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
export default Footer;  