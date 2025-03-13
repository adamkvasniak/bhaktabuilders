
import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import styles from "./GoogleMapComponent.module.scss";

const containerStyle = {
  width: "500px",
  height: "300px",
  borderRadius: "15px",
};

const BhaktaBuildersLocation = {
  lat: 51.51418, // Replace with the latitude of your company
  lng: -0.34438, // Replace with the longitude of your company
};


const GoogleMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const [containerStyle, setContainerStyle] = useState({
    width: "500px",
    height: "300px",
    borderRadius: "15px",
  });

  // Adjust the size of the map dynamically
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth < 600 ? "90vw" : "500px";
      const height = window.innerHeight < 400 ? "40vh" : "300px";
      setContainerStyle({
        width,
        height,
        borderRadius: "15px",
      });
    };

    updateSize(); // Set size on initial load
    window.addEventListener("resize", updateSize);
    
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={BhaktaBuildersLocation} zoom={17}>
      <Marker position={BhaktaBuildersLocation} />
    </GoogleMap>
  );
};

export default GoogleMapComponent;

