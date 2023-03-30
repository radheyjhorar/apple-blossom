import React, { useState } from "react";

import api from '../../api/API';

import "./login.css";
import { AppleLogo } from '../../assets';


const Login = () => {

    return (
        <>
            <div className="min-vh-100">
                    <div className="col-3 mbl-lgn-pg border-white border-4 shadow mx-auto">
                        <div className="apl-logo-bg">
                            <img src={ AppleLogo } className="w-100 h-100 overflow-hidden" alt="Logo" />
                        </div>
                        <div className="text-center mt-2">
                            <h1 className="text-white h4">Apple Blossom</h1>
                            <p className="a-b-desc">Customers first Choice</p>
                        </div>
                        <div className="mt-5">
                                <input className="lgn-ipt bg-transparent input-u-n mx-auto my-2" type="text"
                                    placeholder="User Name" />
                                <input className="lgn-ipt bg-transparent input-pswrd mx-auto my-3" type="password"
                                    placeholder="Password" />
                                <button type="submit" className="lgn-btn mx-auto mt-4">Login</button>
                                <p className="text-white sing-up-desc">Don't have an account? <a className="text-white fw-bold text-decoration-none"
                                    href="sing-up-page">Sing
                                    Up
                                    Now</a></p>
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