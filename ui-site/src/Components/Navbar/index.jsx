import React, { useState } from "react";
import './styles.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

import logo from '../../assets/logo.svg'

const Navbar = () => {

    const [togle, setTogle] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src = {logo} alt="logo"/>
                </div>
                <div className="gpt3_navbar-links-container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#home">What is GPT3 ?</a></p>
                    <p><a href="#home">Open AI</a></p>
                    <p><a href="#home">Case Studios</a></p>
                    <p><a href="#home">Library</a></p>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                { togle
                    ? <RiCloseLine  color='#fff' size={27} onClick={() => setTogle(false)}/>
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setTogle(true)} />
                }
                {togle && (
                    <div className="gpt3__navbar-menu_container scale-up-center">
                      <div className="gpt3__navbar-menu_container-links">
                        <p><a href="#home">Home</a></p>
                        <p><a href="#home">What is GPT3 ?</a></p>
                        <p><a href="#home">Open AI</a></p>
                        <p><a href="#home">Case Studios</a></p>
                        <p><a href="#home">Library</a></p>
                      </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;