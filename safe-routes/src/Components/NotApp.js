//Google Maps Api
import React from 'react';
// import './App.css';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

function Map(){
  const locations = {
    stores:[
      {lat: 34.0522, lng: -118.2437, },
      {lat: 40.730610, lng: -73.935242}
    ]
  }
  return(
    <GoogleMap 
    defaultZoom={10} 
    defaultCenter={{lat: 34.0522, lng: -118.2437}} 
    >
    {locations.stores.map(loc=>{
      return (<Marker position={loc} />)
    })}
    {/* <Marker position={{lat: 34.0522, lng: -118.2437}} />
    <Marker position={{lat: 40.730610, lng: -73.935242}} /> */}

    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function SafeMap() {
  return (
    <div className="SafeMap" style={{width: '100vw', height: '100vh'}} >
      <WrappedMap 
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDSXVhXDlyG0sASdMicdlZA3ik9RQwVbuY`} loadingElement={<div style={{height: "100%"}} />}
      containerElement={<div style={{height: "100%"}} />}
      mapElement={<div style={{height: "100%"}} />}
      />
    </div>
  );
}

/*{
  stores:[
    {lat: 34.0522, lng: -118.2437},
    {lat: 40.730610, lng: -73.935242}
  ]

}
*/