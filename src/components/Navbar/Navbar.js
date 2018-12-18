import React from 'react';
import logo from '../../images/Netflix-logo.svg';
import './style.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
            <div className="navbar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-options">
                    <ul className="options">
                        <li className="option">
                            <Link to="/login">Login</Link>
                        </li>
                        <li className="option">
                            <Link to="/signup">Signup</Link>
                        </li>
                    </ul>
                </div>
            </div>
    );
};

export default Navbar;