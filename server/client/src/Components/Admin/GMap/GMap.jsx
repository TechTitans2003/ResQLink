import React, { useEffect, useRef } from 'react';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
};

const center = {
    lat: 24.6192251, // Replace with the person's latitude
    lng: 73.8548499, // Replace with the person's longitude
};

const options = {
    disableDefaultUI: true,
    zoomControl: true,
};

// Declare the libraries array outside the component to avoid reloading
const libraries = ['marker'];

const GMap = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyBzlOdUxvd1WG0xD817i3MUKTrs_l4XPkc", // Add your API key here
        libraries, // Use the constant array
    });

    const mapRef = useRef(null);

    useEffect(() => {
        if (isLoaded && mapRef.current) {
            const map = new window.google.maps.Map(mapRef.current, {
                center,
                zoom: 12,
                disableDefaultUI: true,
                zoomControl: true,
            });

            // Create the AdvancedMarkerElement
            const marker = new window.google.maps.marker.AdvancedMarkerElement({
                map: map,
                position: center,
                title: "Person's Location",
            });
        }
    }, [isLoaded]);

    if (loadError) return <div>Error loading maps</div>;
    if (!isLoaded) return <div>Loading Maps</div>;

    return (
        <>
            <div ref={mapRef} style={mapContainerStyle}></div>
        </>
    );
};

export default GMap;
