import React, { useState } from "react";
import api from '../../api/API';
import  AuthUser  from "../AuthUser";
import { useNavigate } from 'react-router-dom';
import "./login.css";

const Login = () => {

    //const [isLoading, setIsLoading] = useState(false);
    const {setToken} = AuthUser();
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const  handleChange = e => {
        console.log(e.target);
        const { name, value} = e.target;
        console.log(name, value);
        setUser({
            ...user,
            [name]: value
        })
    }

    const loginUser = async () => {
       
        //if(!isLoading) {
         //   setIsLoading(true)
            const response  = await api.post('/auth/signin', user);
            if( response.statusText === "OK") {
                console.log(response);
               setToken(response.data,response.data.accessToken);
               navigate('/')
          //     setIsLoading(false)            
            }

       // }
        
    };

    return(
        <div className="login">
            {/* {console.log("User", user)} */}
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter your email" onChange={handleChange}/>
            <input type="password" name="password" value={user.password} placeholder="your password"  onChange={handleChange}/>
            <div className="button" onClick={loginUser}>Login</div>
            or 
            <div className="button">Register</div>
        </div>
    )
}

export default Login;