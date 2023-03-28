import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Boards, Mediums } from '../../components';
import api from '../../api/API';
import { Building1, Building2, ViewSchlImg, SchlPageAd2, SchlPageAdX, TopSchoolImg } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './schools.css';


function Schools(props) {
    const [data, setData] = useState([]);
    const [boards, setBoards] = useState([]);
    const [mediums, setMediums] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    let { schoolId } = useParams();

    useEffect(() => {
        setIsLoading(true);


        const fetchData = async (schoolId) => {
            const response = await api.post('/institution/', { schoolId: schoolId });
            if (response.statusText === "OK") {
                setData(response.data[0]);

                document.title = data.name;
                document.head.innerHTML += `
      <meta name='description' content='My description value!!!'/>
      <meta name='keywords' content='My keywords!!!'/>`

            }
            setIsLoading(false);
        }
        fetchData(schoolId);

    }, [schoolId]);

    console.log((isLoading == false && Object.keys(data).length > 0));

    return (

        <>
            {(isLoading == false && Object.keys(data).length > 0) ? <LoadSchool data={data[0]} boards={boards} mediums={mediums} /> : 'Loading...'}

        </>


    );

}

function LoadSchool(props) {
    const { data, boards, mediums } = props;
    console.log(data);
    return (
        <>
            <div className="img-banner mb-5 position-relative">
                <img className='view-schl-banner' src={ViewSchlImg} alt="banner_img_" />
                <div>
                    <div className="schoolname shadow d-flex py-4 rounded">
                        <i className="fa-solid fa-school fs-1 px-3 py-1 "></i>
                        <h2 className="fw-bold fs-5 mt-auto mb-auto" id="schoolname">{data.name}</h2>
                    </div>
                    <button className="btn btn-green brochbtn px-3 rounded text-white">
                        Brochure</button>
                </div>
            </div>
            <div className="container pt-5 mb-5" style={{ maxWidth: '1200px' }}>
                <div className="row">
                    <div className="col-3 mb-3 mt-5">
                        <div className="border rounded p-4 ms-80px w-13">
                            <h6 className='fs-small mt-1'>Founder in {data.est_year}</h6>
                            <h6 className="fw-600 fs-small">
                                <Boards boards={data.inst_board} />
                            </h6>
                            <h6 className="fw-600 fs-small">
                                <Mediums mediums={data.inst_medium} />

                            </h6>
                            {/* <h6 className="fw-bold">Website: 
                    <Link to={{ pathname: data.website }} target="_blank" /> {data.website}
                    </h6> */}
                            <h6 className="fw-600 fs-small">Co-ed School</h6>
                            <h6 className="fw-600 fs-small">Nursery to className 9</h6>
                            <h6 className="fw-600 fs-small pb-4">Approx Fee: {data.approx_fees}</h6>
                            <h6 className="fw-600 fs-small">Address:</h6>
                            <p className='fs-0-7 fw-500 fc-light'>
                                {data.name}, {data.address1} {data.address2} {data.address3} Karnataka {data.pincode} {data.email}
                                <Link to={{ pathname: data.website }} target="_blank" /> {data.website}
                            </p>
                            <button className="btn btn-green rounded fw-500 fs-0-8 text-white" style={{ fontSize: '12px' }}>
                                Enquire Now
                            </button>
                        </div>
                        <div className='ms-80px w-13 mt-5'>
                            <div className="fw-bold float-start px-2 ad-logo">AD</div>
                            <div className='p-0'>
                                <img className='schl-page-ad' src={SchlPageAd2} alt="advertisement" />
                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <h1 className="fs-2 mt--2 ms-5">{data.name}</h1>
                        <div className="row mt-5 ms-5">
                            <div className="col-4">
                                <img alt="school image" className="schoolimg rounded" src={Building1} />
                            </div>
                            <div className="col-4">
                                <img alt="school image" className="schoolimg rounded" src={Building2} />
                            </div>
                            <div className="col-4">
                                <img alt="school image" className="schoolimg rounded" src={Building1} />
                            </div>
                        </div>
                        <div className="mt-5 py-5 ms-5">
                            <h4 className="fw-bold fs-5">About the School</h4>
                            <p className='fs-small lh-sm h-80px'>{data.desc}</p>
                        </div>
                        <div className="row ms-5">
                            <div className="col-3 d-flex">
                                <i className="fa-solid fa-graduation-cap"></i>
                                <p className="px-3 fw-bold fs-xsmall"><FontAwesomeIcon icon={["fas", "graduation-cap"]} size="lg" /><Boards boards={data.inst_board} /></p>
                            </div>
                            <div className="col-3 d-flex">
                                <i className="fa-solid fa-buildings fs-3"></i>
                                <p className="px-3 fw-bold fs-xsmall">Nursery to className 9</p>
                            </div>
                            <div className="col-3 d-flex">
                                <i className="fa-solid fa-indian-rupee-sign fs-3"></i>
                                <p className="px-3 fw-bold fs-xsmall">{data.approx_fees} approx</p>
                            </div>
                            <div className="col-3 d-flex">
                                <i className="fa-solid fa-children fs-3"></i>
                                <p className="px-3 fw-bold fs-xsmall">Co-ed School</p>
                            </div>
                        </div>
                        <div className="py-5 w-45rem ms-1-2 ms-5">
                            <img className="banner" src={SchlPageAdX} alt="advertisement" />
                        </div>
                        <div className=''>
                            <div className="row">
                                <div className="col-12 ms-4">
                                    <h4 className="fw-bold h5 mb-0">Activities and Infrastructure</h4>
                                    <div className="d-flex align-items-end float-end fs-small">
                                        <div className="text-success d-flex mx-1 mb-3 avlbl">
                                            <FontAwesomeIcon className='me-1' icon={["fas", "check-circle"]} color="green" size="lg" />
                                            <p className='mb-0'>Available</p>
                                        </div>
                                        <div className="text-danger d-flex mx-2 mb-3 nt-avlbl">
                                            <FontAwesomeIcon className='me-1' icon={["fas", "times-circle"]} color="red" size="lg" />
                                            <p className='mb-0'>Not Available</p>
                                        </div>
                                        <div className="fc-g-b-m d-flex mx-2 mb-3 info-nt-avlbl">
                                            <FontAwesomeIcon className='me-1' icon={["fa", "question-circle"]} size="lg" />
                                            <p className='mb-0'>Information Not Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3 ml-2">
                                <div className="col-3">
                                    <h5 className="fw-bold fs-small fc-g-b-m">Class</h5>
                                    <div className="d-flex fs-small fc-g-b-m">
                                        <FontAwesomeIcon className='me-1' icon={["fas", "check-circle"]} color="green" size="lg" />
                                        <p className='mb-1'>AC Classes</p>
                                    </div>
                                    <div className="d-flex fs-small fc-g-b-m">
                                        <FontAwesomeIcon className='me-1' icon={["fas", "check-circle"]} color="green" size="lg" />
                                        <p className='mb-1'>Smart Classes</p>
                                    </div>
                                    <div className="d-flex fs-small fc-g-b-m">
                                        <FontAwesomeIcon className='me-1' icon={["fas", "times-circle"]} color="red" size="lg" />
                                        <p className='mb-1'>Wifi</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <h5 className="fs-small fw-bold fc-g-b-m">Boarding</h5>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-check text-success p-1"></i>
                                        <p className='mb-1'>Boys Hostel</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Girls Hostel</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <h5 className="fs-small fw-bold fc-g-b-m">Infrastructure</h5>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-check text-success p-1"></i>
                                        <p className='mb-1'>Auditorium/Media Room</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Cafeteria/Canteen</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Library/Reading Room</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Playground</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <h5 className="fs-small fw-bold fc-g-b-m">Safety and security</h5>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-check text-success p-1"></i>
                                        <p className='mb-1'>CCTV</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>GPS Bus Tracking App</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Student Tracking App</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-3">
                                    <h5 className="fs-small fw-bold fc-g-b-m">Advanced Facilities</h5>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-check text-success p-1"></i>
                                        <p className='mb-1'>Alumni Association</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Day care</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Meals</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Medical Room</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Transportation</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <h5 className="fs-small fw-bold fc-g-b-m">Extra Curricular</h5>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-check text-success p-1"></i>
                                        <p className='mb-1'>Art and Craft</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Dance</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Debate</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Drama</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Gardening</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Music</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Picnics and excursion</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <h5 className="fs-small fw-bold fc-g-b-m">Sports and fitness</h5>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-check text-success p-1"></i>
                                        <p className='mb-1'>Skating</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Horse Riding</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Gym</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Indoor Sports</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Outdoor Sports</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Swimming Pool</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Karate</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Taekwondo</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Yoga</p>
                                    </div>
                                </div>
                                <div className="col-3">
                                    <h5 className="fs-small fw-bold fc-g-b-m">Lab</h5>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-check text-success p-1"></i>
                                        <p className='mb-1'>Computer Lab</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Science Lab</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Robotics Lab</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 mb-5">
                                    <h5 className="fs-small fw-bold fc-g-b-m">Disable Friendly</h5>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>wramps</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>washrooms</p>
                                    </div>
                                    <div className="d-flex px-2 fs-small fc-g-b-m">
                                        <i className="fa-solid fa-circle-xmark text-danger p-1"></i>
                                        <p className='mb-1'>Elevators</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="mb-0">
                        <h3 className="fw-bold mb-2-5 h5 col-8 ms-auto me-5">Similar Schools</h3>
                        <div className="container mb-5">
                            <div className="row ms-auto w-70 me-2-5">
                                <div className="col-6">
                                    <div className=" border rounded">
                                        <div className="d-flex">
                                            <div className='w-100 position-relative'>
                                                <img className='w-100 h-10-4' src={TopSchoolImg} alt="Image" />
                                                <div className='position-absolute rating-bar d-flex'>
                                                    <div className="bg-primary rounded-1 text-white px-2 rating-star">
                                                        4.2
                                                        <i className="fa-solid fa-star fs-10px"></i>
                                                    </div>
                                                    <span className="text-muted ps-1 fs-0-7 rating-people">(50,000)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="d-flex justify-content-between fw-bold mb-0">
                                                <h5 className="fw-bold fs-small mb-0">Delhi Public School</h5>
                                                <p className='fs-xxsmall fc-light mb-0'>Approx fee: 35L-40L</p>
                                            </div>
                                            <p className="text-muted mb-0 fs-0-56 fw-500">Indirapuram, Bangaluru</p>
                                            <p className="fw-bold mb-0 fs-0-56">CBSE & IB Curriculum</p>
                                            <p className="fs9 mb-0 lh-sm fw-500">School Description: Spreadover 2.5Acers....</p>
                                            <p className="fs9 mb-0 lh-sm text-truncate wdt fw-500">
                                                Lorem Ipsum has been the industry's standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley of type
                                            </p>
                                            <button className="btn btn-green rounded text-white fs-0-7">
                                                Know More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className=" border rounded">
                                        <div className="d-flex">
                                            <div className='w-100 position-relative'>
                                                <img className='w-100 h-10-4' src={TopSchoolImg} alt="Image" />
                                                <div className='position-absolute rating-bar d-flex'>
                                                    <div className="bg-primary rounded-1 text-white px-2 rating-star">
                                                        4.2
                                                        <i className="fa-solid fa-star fs-10px"></i>
                                                    </div>
                                                    <span className="text-muted ps-1 rating-people fs-0-7">(50,000)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <div className="d-flex justify-content-between fw-bold mb-0">
                                                <h5 className="fw-bold fs-small mb-0">Delhi public school</h5>
                                                <p className='fs-xxsmall fc-light mb-0'>Approx fee: 35L-40L</p>
                                            </div>
                                            <p className="text-muted mb-0 fs-0-56 fw-500">Indirapuram, Bangaluru</p>
                                            <p className="fw-bold mb-0 fs-0-56">CBSE & IB Curriculum</p>
                                            <p className="fs9 mb-0 lh-sm fw-500">School Description: Spreadover 2.5Acers....</p>
                                            <p className="fs9 mb-0 lh-sm text-truncate wdt fw-500">
                                                Lorem Ipsum has been the industry's standard dummy
                                                text ever since the 1500s, when an unknown printer took a galley of type
                                            </p>
                                            <button className="btn btn-green rounded text-white fs-0-7">
                                                Know More</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Schools;