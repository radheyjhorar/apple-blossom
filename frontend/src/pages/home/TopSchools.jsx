import { useState, useEffect } from 'react';
import {  Link } from "react-router-dom";
import { Bars } from 'react-loader-spinner';
import { Boards } from '../../components';
import Carousel from "react-multi-carousel";
import api from '../../api/API';
import { TopSchoolImg, s1 } from '../../assets';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


function TopSchools(props) {

  const [topSchools, setTopSchools] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      setIsLoading(true);  
      const fetchData = async () => {
          const postSearch =  {
              isTopSchool: 1,            
              page: 1, 
              limit: 6
          }
        const response  = await api.post('/institution/', postSearch);
        if( response.statusText === "OK") {
          setTopSchools( response.data[0] );            
        }
        setIsLoading(false);  
      }   
      fetchData();  
     
  },[]);


    const image = {
      backgroundImage: "url(" + s1 + ")",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '180px',
    };


    const DisplayData = topSchools.map(
      (info, index) => {
        return (
          <div style={{width: '96%'}} key={`top-schools${index}`}>
            <div className=" border rounded">
              <div className="d-flex">
                <img className='image' src={TopSchoolImg} alt="Top School" />
                <div className="bg-primary rounded-1 text-white px-2 ms-3 mt-3 fs12" style={{ width: 'fit-content', height: 'fit-content' }}>{info.rating}
                  <i className="fa-solid fa-star" style={{ fontSize: '10px' }}></i>
                </div>
                <span className="text-muted ps-2 mt-3 fs12">({info.review})</span>
              </div>
              <div className="px-3 py-1 mb-4">
                <div className="d-flex justify-content-between fw-bold mb-0">
                  <h5 className="cursive fs-10 tp-scl-h">{info.name}</h5>
                  <p className="fs-xxsmall text-muted apx-fee">Approx Fee: {info.approx_fee}</p>
                </div>
                <p className="text-muted mb-1 fs-xxsmall" >{info.city}, {info.state}</p>
                <p className="mb-0 fs-xxsmall"><Boards boards={info.inst_board} /></p>
                <p className="mb-3 fs-xxsmall wdt text-truncate">School Description: {info.desc}</p>
                {/* <p className="mb-2 fs-xxsmall">
                  {info.desc}
                </p> */}
                <Link to={'/school/' + info.link}><button className="btn btn-green rounded text-white fw-bold fs-xxsmall" >
                  Know More</button></Link>
              </div>
            </div>
          </div>
        );
      });
    return (
      <div>
        <h3 className="cursive fs-5 ">Top <span className='fw-bold fs-5'>Schools</span></h3>
        <div className="mb-4  fs10">
          Best Schools in Bangaluru to Explore
        </div>
        <div className="container g-0 mb-5">
          <div className="row g-0 dwdt">
          { isLoading === false ?  
                      (  <Carousel  responsive={responsive}>{DisplayData}</Carousel> ) : 
                        <Bars
                        height="80"
                        width="80"
                        color="#4fa94d"
                        ariaLabel="bars-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                      />
                    }

          </div>
        </div>
      </div>
    );
  
}
export default TopSchools;  