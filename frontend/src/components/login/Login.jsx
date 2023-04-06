import React, { useState } from "react";
import api from '../../api/API';
import  AuthUser  from "../AuthUser";
import { Link, useNavigate } from 'react-router-dom';
import "./login.css";
import { AppleLogo } from '../../assets';
import Register from "../register/Register";

const Login = () => {

    //const [isLoading, setIsLoading] = useState(false);
    const {setToken} = AuthUser();
    const [user, setUser] = useState({
        name: "",
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
    return (
        <>
            <div className="col-9 mx-auto bg-clr my-4">
                    <div className="col-3 bg-clr mbl-lgn-pg border-white border-4 shadow my-5 mx-auto">
                        <div className="apl-logo-bg">
                            <img src={ AppleLogo } className="w-100 h-100 overflow-hidden" alt="Logo" />
                        </div>
                        <div className="text-center mt-2">
                            <h1 className="text-white h4">Apple Blossom</h1>
                            <p className="a-b-desc">Customers first Choice</p>
                        </div>
                        <div className="mt-5">
                                <input className="lgn-ipt-lgn-pg bg-transparent input-u-n mx-auto my-2" type="text"
                                    placeholder="User Name" name="name" value={user.name} onChange={handleChange}/>
                                <input className="lgn-ipt-lgn-pg bg-transparent input-pswrd mx-auto my-3" type="password"
                                    placeholder="Password" name="password" value={user.password}   onChange={handleChange}/>
                                <button type="submit" className="lgn-btn mx-auto mt-4" onClick={loginUser}>Login</button>
                                <p className="text-white sing-up-desc">Don't have an account? 
                                <Link to="/register" className="text-white fw-bold text-decoration-none">  Sign Up Now</Link>
                                </p>
                                <p className="fgt-pswrd text-white"><a className="text-white text-decoration-none" href="forgot password">Forgot
                                    Password</a>?
                                </p>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Login;