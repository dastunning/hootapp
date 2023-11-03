// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';
import logo from "./styles/images/logo.png";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <Link to="/" className="logo">
                    <img src={logo} to="/" alt="Logo" className="logo-avatar"/>
                </Link>
            </nav>
            <nav>
                <Link to="/profile" className="profile-link">Profile</Link>
            </nav>
        </header>
    );
};

export default Header;
