import React, { useState } from 'react';
import './styles.css';

export default function MainNavbar() {
    return (
        <div style={{textAlign:"center"}}>
            <h1 className="title">Join&InterAct</h1>
            <div className="topnav" style={{ padding:'20px'}}>
                <a className="active" href="#home" style={{ padding:'10px'}}> Home</a>
                <a href="#home" style={{ padding:'10px'}}>Play Safe</a>
                <a href="#profile" style={{ padding:'10px'}}>Your Profile</a>
                <a href="#contact" style={{ padding:'10px'}}>Friends</a>
                <a href="#about" style={{ padding:'10px'}}>About</a>
                <a href="#logout" style={{ padding:'10px'}}>Sign Out</a>
            </div>
        </div> 
    );
}
