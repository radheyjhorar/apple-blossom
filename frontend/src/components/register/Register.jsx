import React, { useState } from "react";
import api from '../../api/API';
import { Link, useNavigate } from 'react-router-dom';
import "./register.css"
import { AppleLogo } from '../../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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

    const handleChange = e => {
        console.log(e.target);
        const { name, value } = e.target;
        console.log(name, value);
        setUser({
            ...user,
            [name]: value
        })
    }

    const registerUser = async () => {

        if (!isLoading) {
            setIsLoading(true)
            const response = await api.post('/auth/signup', user);
            if (response.statusText === "OK") {
                console.log(response.data);
                navigate('/login')

            }

        }

    };

    return (
        <>
            <div className="col-9 mx-auto bg-clr my-4">
                <div className="col-3 bg-clr mbl-lgn-pg border-white border-4 shadow my-5 mx-auto">
                    <div className="apl-logo-bg">
                        <img src={AppleLogo} className="w-100 h-100 overflow-hidden" alt="Logo" />
                    </div>
                    <div className="text-center mt-2">
                        <h1 className="text-white h4">Apple Blossom</h1>
                        <p className="a-b-desc">Customers first Choice</p>
                    </div>
                    <div className="mt-5">
                        {/* <div className="d-flex text-white offset-1">
                            <h4 className="fw-bold">Sign up</h4>
                            <FontAwesomeIcon icon="fas fa-user-plus" className='fs-5 ms-2 mt-1' />
                        </div> */}
                        <div className="d-flex text-white inpt-box mx-auto my-3">
                            <FontAwesomeIcon icon="fas fa-user" className='fs-5 ms-1' />
                            <input className="lgn-ipt" type="text"
                                placeholder="Your Name" name="name" value={user.name} onChange={handleChange} />
                        </div>
                        <div className="d-flex text-white inpt-box mx-auto">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" className='fs-5 ms-1' />
                            <input className="lgn-ipt" type="email"
                                placeholder="Your Email" name="email" value={user.email} onChange={handleChange} />
                        </div>
                        <div className="d-flex text-white inpt-box mx-auto my-3">
                            <FontAwesomeIcon icon="fa-solid fa-lock" className='fs-5 ms-1' />
                            <input className="lgn-ipt" type="password"
                                placeholder="Password" name="password" value={user.password} onChange={handleChange} />
                        </div>
                        <div className="d-flex text-white inpt-box mx-auto">
                            <FontAwesomeIcon icon="fa-solid fa-key" className='fs-5 ms-1'/>
                            <input className="lgn-ipt" type="password"
                                placeholder="Repeat your password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} />
                        </div>
                        <button type="submit" className="lgn-btn mx-auto mt-4" onClick={registerUser}>Sing up</button>  
                        <p className="text-white sing-up-desc">Already have an account? 
                                <Link to="/login" className="text-white fw-bold text-decoration-none">  Login Now</Link>
                                </p>
                    </div>
                </div>
            </div>
        </>
    )
}



export default Register;