
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function NewsArticle() {
    const [data, setData]  = useState([]);
    const [isLoading, setIsLoading] =  useState(false);    


    useEffect(() => {
        setIsLoading(true);  
        const fetchData = async () => {
          const response  = await axios.get('https://example.com/wp-json/wp/v2/posts');
          if( response.statusText === "OK") {
           //setData( response.data );
            
          }
          setIsLoading(false);  
        }   
        //fetchData();  
       
    },[]);

    return(
        <>
      
        <div className="bg-white">
                <div style={{paddingLeft: '160px', paddingRight: '160px'}}ss>
                    <div className="mt-5 mb-4">
                        <h3>News &amp; Articles</h3>
                        <h6 className="text-muted fw-normal">Read what's happaning in Real Estate</h6>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                            <Link to="/">
                              <div className="border-bottom">
                                <img className="img-fluid rounded mb-2" src="assets/school4.jpg" alt="school" />
                                <h6 className="fw-bold mb-2">Bigha:All about land area measurment unit</h6>
                                <p></p>
                               </div>
                               <div className="d-flex text-muted justify-content-between fw-normal" style={{fontSize: '12px'}}>
                                <p>Sunita Mishra</p>
                                <p>jul 2022</p>
                              </div>
                              </Link>
                            </div>
                           
                           
                            <div className="col-4">
                            <Link to="/">
                                <div className="border-bottom">
                                  <img className="img-fluid rounded mb-2" src="assets/school4.jpg"  alt="school"/>
                                  <h6 className="fw-bold mb-2">Bigha:All about land area measurment unit</h6>
                                  <p></p>
                                 </div>
                                 <div className="d-flex text-muted justify-content-between fw-normal" style={{fontSize: '12px'}}>
                                  <p>Sunita Mishra</p>
                                  <p>jul 2022</p>
                                </div>
                                </Link>
                              </div>
                             
                             
                              <div className="col-4">
                              <Link to="/">
                                <div className="border-bottom">
                                  <img className="img-fluid rounded mb-2" src="assets/school4.jpg" alt="school" />
                                  <h6 className="fw-bold mb-2">Bigha:All about land area measurment unit</h6>
                                  <p></p>
                                 </div>
                                 <div className="d-flex text-muted justify-content-between fw-normal" style={{fontSize: '12px'}}>
                                  <p>Sunita Mishra</p>
                                  <p>jul 2022</p>
                                </div>
                                </Link>
                              </div>
                              
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    
}


export default NewsArticle;