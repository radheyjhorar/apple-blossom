import { useState, useEffect } from 'react';
import {  Link } from "react-router-dom";
import { Bars } from 'react-loader-spinner';
import { DelhiPublicSchool, Spotlightimg } from '../../assets';
import api from '../../api/API';
import Carousel from "react-multi-carousel";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
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

function InSpotLight(props) {

    const [inSpotLight, setInSpotLight] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);  
        const fetchData = async () => {
            const postSearch =  {
                isInSpotLight: 1,            
                page: 1, 
                limit: 3
            }
          const response  = await api.post('/institution/', postSearch);
          if( response.statusText === "OK") {
            setInSpotLight( response.data[0] );            
          }
          setIsLoading(false);  
        }   
        fetchData();  
       
    },[]);

    const DisplayData = (inSpotLight && inSpotLight.length > 0 && inSpotLight.map((info) => {
         return(

            <Link to={'/school/' + info.link}><img src={Spotlightimg} className="shadow mb-5" alt="Spot Light"
                style={{ width: '100%', height:'340px' }} /></Link>
      
         )   
    }));

    return (
        <div>
            <h3 className="cursive fs-5">In <span className='fw-bolder fs-5'>Spotlight</span></h3>
            <div className="text-muted mb-4 fs10" >
                School slogan goes here: Best education for your child
            </div>
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
    );

}
export default InSpotLight;  