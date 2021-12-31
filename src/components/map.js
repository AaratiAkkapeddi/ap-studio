import * as React from "react"
import GoogleMapReact from 'google-map-react';
import AnyReactComponent from './marker'


const containerStyle = {
  width: '400px',
  height: '400px'
};



const Map = ({latitude, longitude}) => {
  	const center = {
	  lat: latitude,
	  lng: longitude
	};
	const zoom = 11;

	return (
	    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
		  defaultOptions={{styles: [{ stylers: [{ 'saturation': 50 }, { 'gamma': 0.5 }] }]}}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent
            lat={center.lat}
            lng={center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
	  )
}

export default Map