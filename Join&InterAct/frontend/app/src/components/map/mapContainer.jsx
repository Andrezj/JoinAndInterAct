import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@reat-google-maps/api';

const MapContainer = () => {

    const mapStyles = {        
        height: "100vh",
        width: "100%"};

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    };

    const [ selected, setSelected ] = useState({});

    const onSelect = item => {
        setSelected(item);
    }

    const onMarkerDragEnd = (e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        setCurrentPosition({ lat, lng})
    };

    const locations = [
        {
            name: "Location 1",
            location: { 
            lat: 41.3954,
            lng: 2.162 
            },
        },
        {
            name: "Location 2",
            location: { 
            lat: 41.3917,
            lng: 2.1649
            },
        },
        {
            name: "Location 3",
            location: { 
            lat: 41.3773,
            lng: 2.1585
            },
        },
        {
            name: "Location 4",
            location: { 
            lat: 41.3797,
            lng: 2.1682
            },
        },
        {
            name: "Location 5",
            location: { 
            lat: 41.4055,
            lng: 2.1915
            },
        }
    ];

    return (
        <LoadScript
            googleMapsApiKey="AIzaSyB6xHfPLxTArJQQzUVAs2EV6CZG6UT9HCU">
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}>
                {
                    locations.map(item => {
                        return (
                        <Marker key={item.name}
                            position={item.location}
                            onClick={() => onSelect(item)}
                        />
                        )
                    })
                }
                {
                    selected.location && 
                    (
                        <InfoWindow
                            position={selected.location}
                            clickable={true}
                            onCloseClick={() => setSelected({})}
                        >
                            <p>{selected.name}</p>
                        </InfoWindow>
                    )
                }
            </GoogleMap>
        </LoadScript>
    )
}
 ​
export default MapContainer;