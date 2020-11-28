import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function MapContainer() {

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    };

    return (
        <LoadScript
            googleMapsApiKey="u34hSvaA9MdbKPOqzbcUYuXMtXpyJThY">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter} />
        </LoadScript>
    );
}