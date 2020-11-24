import React from 'react';

export default function MapHeader() {
    return (
        <div>
            <h3>Map</h3>
            <p>
                Only give us access to your location if you feel safe to do it!<button style={{padding:"5px"}}>Dismiss my location</button>
            </p>    
        </div>
    );
};