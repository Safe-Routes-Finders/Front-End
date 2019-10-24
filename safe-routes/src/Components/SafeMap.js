//Google Maps Api
import React, {useState, useEffect} from 'react';
// import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import {axiosWithAuth} from "./utils/axiosWithAuth"
import InfoCard from "./InfoCard"

function Map(){
  const [marker, setMarker] = useState([]);
  const [selected, setSelected] = useState(null);
  const [address, setAddress] = useState("LOADING...")


  useEffect(() => {
    axiosWithAuth()
        .get("/incidents/incidents/toplocations")
        .then(response => {
          console.log ("Marker Axios", response);
          setMarker(response.data)
        })
        .catch(error => {
          console.log("Data not found", error);
        })
  }, [])

  

  return(
    <GoogleMap 
    defaultZoom={10} 
    defaultCenter={{lat: 34.0522, lng: -118.2437}} 
    >
    {marker.map(loc=>{
      let obj = {
        lat: loc.latitude,
        lng: loc.longitude
      };
    
      return (<Marker key={loc.location} position={obj} onClick={() => {setSelected(loc);setAddress("Loading...")}}/>)
    })}

      {selected && (
      <InfoWindow position={{lat: selected.latitude, lng: selected.longitude}} onCloseClick={() => {setSelected(null) }}>
        <div>
          <InfoCard address={address} setAddress={setAddress} selected={selected}/>
        </div>
      </InfoWindow> 
    )}

    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function SafeMap() {
  return (
    <div className="SafeMap" style={{width: '100vw', height: '78vh'}} >
      <WrappedMap 
     googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDSXVhXDlyG0sASdMicdlZA3ik9RQwVbuY`} loadingElement={<div style={{height: "100%"}} />}
      containerElement={<div style={{height: "100%"}} />}
      mapElement={<div style={{height: "100%"}} />}
      />
    </div>
  );
}

