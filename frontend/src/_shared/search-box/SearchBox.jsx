import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './search-box.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas);


function SearchBox(props) {
    const [city, setCity] = useState([]);
    const [selectedCity, setSelectedCity] = useState("");
    const [selectSpan, setSelectSpan] = useState(4);
    let { cityName } = useParams();


    const changeCity = (event) => {
        setSelectedCity(event.target.innerHTML);
    }

    useEffect(() => {
        // setIsLoading(true);
        console.log(cityName);
        if (props.city && props.city.length > 0) {

            setCity(props.city);
            console.log(cityName);
            if (cityName && cityName.length > 0) {
                console.log(selectedCity);
            }

        }


        // setIsLoading(false);

    }, [props, cityName])

    const CityList = (city.length > 0 && city.map((c, i) => {
        return (<li key={i}>{c.name}</li>);
    }));


    return (

        <div className="img-banner mb-5">
            <div className="bg-img text-center ">
                <div className="centered">
                    <h4 className="text-white fs-4 fw-bold mb-3">
                        Day Boarding Schools in Bengaluru
                    </h4>
                    <div className="bg-black justify-content-between p-2 px-4 rounded position-relative">
                        <ul className="list-unstyled d-flex">
                            <li><span className={selectSpan === 1 ? "text-white px-3 py-1 fw-bold bg-grey rounded-pill" : "text-white px-3 fw-bold"} style={{ fontSize: '13px' }} onClick={() => setSelectSpan(1)}>
                                Day Boarding Schools
                            </span>
                            </li>
                            <li><span className={selectSpan === 2 ? "text-white px-3 py-1 bg-grey rounded-pill" : "text-white px-3"} style={{ fontSize: '13px' }} onClick={() => setSelectSpan(2)}>
                                Play schools
                            </span>
                            </li>
                            <li><span className={selectSpan === 3 ? "text-white px-3 py-1 bg-grey rounded-pill" : "text-white px-3"} style={{ fontSize: '13px' }} onClick={() => setSelectSpan(3)}>
                                Boarding &amp; Hostals
                            </span>
                            </li>
                            <li><span className={selectSpan === 4 ? "text-white bg-grey px-3 py-1 rounded-pill" : "text-white px-3 py-1"} style={{ fontSize: '13px' }} onClick={() => setSelectSpan(4)}>
                                Jobs in Schools
                            </span>
                            </li>

                        </ul>
                    </div>
                    <div className="search-box d-flex bg-white overlap h-50 rounded-pill">

                        <div className="dropdown" >
                            <div className="default_option p-3 position-relative h-100 w-100">{selectedCity}
                                <i className="fa-solid fa-chevron-down text-muted"></i>
                                <FontAwesomeIcon className="drop-down-arrow end-0 me-2 position-absolute" icon='fa-solid fa-chevron-down' />
                            </div>
                            <div className="list-unstyled dropdown-content scrollbar scrollbar-primary" onClick={changeCity}>
                                {CityList
                                }
                            </div>

                        </div>
                        <div className="input-group">
                            <input type="search" className="form-control border-0 ps-2 srch-input" placeholder="Search your locality, school name or school board" aria-label="Search" aria-describedby="search-addon" />
                            <Link to={'/search/' + selectedCity}><button className="btn scrch-btn rounded-pill px-4 text-white fw-bold mx-1 my-1 sb-1">
                                SEARCH</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );



}



export default SearchBox;  