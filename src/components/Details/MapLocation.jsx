import React from 'react';
import { MapContainer, TileLayer,Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
function MapLocation(props) {
    const place  = JSON.parse(localStorage.getItem("Temporary_Place"))
    return (
        <MapContainer center={[place.lat, place.long]} zoom={12} scrollWheelZoom={false} style={{height: "100vh", width: "100%"}}>
          <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaXNtYWlsMjIiLCJhIjoiY2xoeXF4NWppMTY5MDNmcGdqb2s2dWY1OCJ9.Gv3x3A_7lDOG-aQx8XsBhQ`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      />

        <Marker 
            position={[place.lat, place.long]}
            draggable={true}
            animate={true}
          >
          
        </Marker>

        </MapContainer>
    );
}

export default MapLocation;