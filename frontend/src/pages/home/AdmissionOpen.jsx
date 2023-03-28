import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Bars } from 'react-loader-spinner';
import { Boards, Mediums } from '../../components';
//import { admissionOpen } from '../../assets';
import { admissionOpen, school6, schl1, schl2, schl3, schl4 } from '../../assets';
import Carousel from "react-multi-carousel";
import api from '../../api/API';
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.ss
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function AdmissionOpen(props) {


  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const postSearch = {
        admOpen: 1,
        page: 1,
        limit: 8
      }
      const response = await api.post('/institution/', postSearch);
      if (response.statusText === "OK") {
        setData(response.data[0]);
      }
      setIsLoading(false);
    }
    fetchData();

  }, []);


  const DisplayData = (data && data.length > 0 && data.map(
    (info) => {

      return (

        <div className="slider col-sm-3 col-12" key={info.id} style={{ width: '90%' }}>

          <Link to="/blogs"><img src={schl1} className="rounded-3 mb-2 adm-opn-img" alt='school' /></Link>
          <div className='ms-1'>
            <h5 className="fw-bold cursive mb-0 fs-xxsmall">{info.name}</h5>
            <p className="fs-xxsmall mb-0" >{info.city},{info.state}</p>
            {/* <p className="mb-1 fs10" >website: <a href={info.website} >{info.website}</a></p> */}
            <p className="fw-light mb-1 text-muted fs8">
              <Boards boards={info.inst_board} />
            </p>
            <p className="text-muted mb-0 fs-xxsmall ">
              <Mediums mediums={info.inst_medium} />


            </p>
            <p className="mb-0 fw-light fs9 text-muted">Admission open for all classes
              <br />Last Date:
            </p>
            <p className="mb-2 fs9 fw-500 ">Approx fee: {info.approx_fees}</p>
            <div className="d-flex mb-2">
              <div className="bg-primary rounded-1 text-white px-2 adm-open-rating fs12" >{info.rating}
                <i className="fa-solid fa-star fs10" ></i>
              </div>
              { /*<span className="text-muted ps-2 fs12">({info.review})</span> */}
            </div>
            <Link to={'/school/' + info.link}><button className="btn px-3 py-1 fw-500 btn-green rounded text-white fs-10px">
              Contact
            </button></Link>
          </div>

        </div>

      )
    }
  )
  );

  return (
    <div>
      <h3 className=" my-3 fs-5 cursive">Admissions <span className='fw-900 fs-5'>Open</span></h3>
      <div className="d-flex mb-5 row">

        {data && data.length > 0 ?
          (<Carousel responsive={responsive}>{DisplayData}</Carousel>) :
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
  );
}

export default AdmissionOpen;  