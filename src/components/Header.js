import React, { useState } from 'react';
import Navigation from './Navigation';
import logo from '../images/SZ-logos_black.png';

function Header() {
    return (
        <header id="header">
            <img id="logo" src={logo} alt="Shanice's logo"/>
            <Navigation/>
        </header>
    )
}

export default Header