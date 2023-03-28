import { useState, useEffect } from 'react';
import {  Link } from "react-router-dom";
import { preSchool, school7, FtrSchlLogo,FtrSchl1 } from '../../assets';
import { Boards, Mediums } from '../../components';
import api from '../../api/API';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

function FeaturedSchools(props) {

    const [featuredSchools, setfeaturedSchools] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);  
        const fetchData = async () => {
            const postSearch =  {
                isFeaturedSchool: 1,            
                page: 1, 
                limit: 3
            }
          const response  = await api.post('/institution/', postSearch);
          if( response.statusText === "OK") {
            setfeaturedSchools( response.data[0] );            
          }
          setIsLoading(false);  
        }   
        fetchData();  
       
    },[]);


        const DisplayData = featuredSchools.map(
            (info) => {
                return (
                    <div className="col-sm-4 col-12" key={info.id}>
                        <div className="border bg-light rounded p-2 pb-1">
                            <div className="d-flex mb-2">
                                <img src={FtrSchlLogo} className="fipsw80" alt="Pre School" />
                                <div className="ps-3 mt0-3 fs-xxsmall mb-0 ">
                                <OverlayTrigger
        delay={{ hide: 450, show: 300 }}
        overlay={(props) => (
          <Tooltip {...props}>
            {info.name}
          </Tooltip>
        )}
        placement="bottom"
      >
                                    <h6 className="mb-0 fw-bold hftt fs12 text-truncate cursive" >{info.name}</h6>
            
      </OverlayTrigger>
                                    <p className=" mb-0 text-muted fs-xxsmall ">{info.city},{info.state}</p>
                                    <p className=" mb-0 fs-xxsmall ">Boards: <Boards boards={info.inst_board} /></p>
                                    <p className=" mb-0 fs-xxsmall ">No of Students: {info.noofstudents}</p>
                                    {/* <p className=" mb-0 fs-xxsmall ">No of Teachers: {info.noofteachers}</p> */}
                                    <p className=" mb-0 fs-xxsmall ">Year Estd: {info.est_year}</p>
                                </div>
                            </div>
                            <p className="fw-400 text-truncate hfsd mb-2 fs10">
                                {info.sub_desc} Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quas non aliquam saepe. Nam eos aliquid voluptatibus autem culpa quidem.
                            </p>
                            <img src={FtrSchl1} className="rounded fsiw80" alt="School" />
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex">
                                    <div className="bg-primary rounded-1 text-white px-2 mt-2 fs12"
                                        style={{ width: '47px', height: 'fit-content' }}>{info.rating}
                                        <i className="fa-solid fa-star fs10" ></i>
                                    </div>
                                    {/* <span className="text-muted ps-2 mt-2 fs12">({info.review})</span> */}
                                </div>
                                <Link to={'/school/' + info.link}><button className="btn-sm fw-500 border-0 btn-green rounded text-white mt-1  fs12">
                                    Know More
                                </button></Link>
                            </div>
                        </div>
                    </div>
                );
            });
        return (
            <div>
                <h3 className="cursive fs-5 ">Featured <span className='fs-5 fw-900'>Schools</span></h3>
                <div className="mb-4 fs10">
                    Prominent Schools in Bengaluru
                </div>
                <div className="container g-0 mb-5">
                    <div className="row g-3">
                        {DisplayData}
                    </div>
                </div>
            </div>
        );
    
}
export default FeaturedSchools;  