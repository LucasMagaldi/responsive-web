import React from "react";
import './styles.css'
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri'

import logo from '../../assets/logo.svg'

const Navbar = () => {
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
        </div>
    )
}

export default Navbar;