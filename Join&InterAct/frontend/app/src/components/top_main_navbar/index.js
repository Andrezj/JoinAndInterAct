import React, { useState } from 'react';
import './styles.css';

export default function MainNavbar() {
    return (
        <div id='top-nav-bar'>
            <h1 className="title">Join&InterAct</h1>
            <div className="top-nav-buttons-container">
                <a className="top-nav-button" href="/" > Home</a>
                <a className='top-nav-button' href="#play-safe" >Play Safe</a>
                <a className='top-nav-button' href="#profile" >Your Profile</a>
                <a className='top-nav-button' href="#contact" >Friends</a>
                <a className='top-nav-button' href="#about" >About</a>
                <a className='top-nav-button' href="#logout" >Sign Out</a>
            </div>
        </div> 
    );
}