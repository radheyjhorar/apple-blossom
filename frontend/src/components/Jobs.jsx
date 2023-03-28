
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FacebookShareButton, FacebookIcon } from 'react-share';
import api from '../api/API';
import FBShareButton from './FBShareButton';


function Jobs() {
    const [data, setData]  = useState([]);
    const [isLoading, setIsLoading] =  useState(false);    
  

    useEffect(() => {
        setIsLoading(true);  
        const fetchData = async () => {
          const response  = await api.post('/jobs', {});
          if( response.statusText === "OK") {
           setData( response.data );
            
          }
          setIsLoading(false);  
        }   
        fetchData();  
       
    },[]);

    return(
        <>
        { data.length > 0 && data.map((info) => {

        })
        }
        { /*<FBShareButton url="https://www.example.com" quotes="Your Quotes" hashtag ="#hashTag"/> */ }
        </>
    );
    
}


export default Jobs;