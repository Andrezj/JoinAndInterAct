import React, { useState } from 'react';

export default function MainNavbar() {
    return (
        <div style={{textAlign:"center"}}>
            <h1>Join&InterAct</h1>
            <div className="topnav" style={{ padding:'20px'}}>
                <a className="active" href="#home" style={{ padding:'10px'}}> Home</a>
                <a href="#home" style={{ padding:'10px'}}>Play Safe</a>
                <a href="#news" style={{ padding:'10px'}}>Your Profile</a>
                <a href="#contact" style={{ padding:'10px'}}>Friends</a>
                <a href="#about" style={{ padding:'10px'}}>About</a>
                <a href="#about" style={{ padding:'10px'}}>Sign Out</a>
            </div>
        </div> 
    );
}
