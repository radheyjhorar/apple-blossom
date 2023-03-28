
import React, { useState } from "react";
import api from '../../api/API';
import { useNavigate } from 'react-router-dom';
import "./register.css"


const Register = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        reEnterPassword: ""
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

    const registerUser = async () => {
       
        if(!isLoading) {
            setIsLoading(true)
            const response  = await api.post('/auth/signup', user);
            if( response.statusText === "OK") {
                console.log(response.data);
                navigate('/login')
                      
            }

        }
        
    };

    return(
        <div className="login">
            {/* {console.log("User", user)} */}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="your name" onChange={handleChange}/>
            <input type="text" name="email" value={user.email} placeholder="your email" onChange={handleChange}/>
            <input type="number" name="mobile" value={user.mobile} placeholder="your mobile" onChange={handleChange}/>
            <input type="password" name="password" value={user.password} placeholder="your password" onChange={handleChange}/>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="your ReEnter Password" onChange={handleChange}/>
            <div className="button" onClick={registerUser}>Register</div>
            or 
            <div className="button">Login</div>
        </div>
    )
}



export default Register;