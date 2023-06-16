import { MapContainer, TileLayer,Marker,Popup } from 'react-leaflet'
import Link from 'next/link';
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { useState,useEffect } from 'react';
import axios from 'axios';

const Map = () => {
  
  
  const [data, setData] = useState([]);
 
 const handleClickLink = (place) =>{
     const jsonPlace = JSON.stringify(place)
     window.localStorage.setItem("Temporary_Place",jsonPlace)
 }

  useEffect(() => {
    axios.get('https://tourismo-api.onrender.com/places/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      
  }, []);
  console.log(data);
  return (
    <MapContainer center={[36, 3.5]} zoom={14} scrollWheelZoom={false} style={{height: "100vh", width: "100%"}}>
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiaXNtYWlsMjIiLCJhIjoiY2xoeXF4NWppMTY5MDNmcGdqb2s2dWY1OCJ9.Gv3x3A_7lDOG-aQx8XsBhQ`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      />
      <div>
        {
        data.map((place,index) => 
          
          
        <Marker 
            key={index}
            position={[place.lat, place.long]}
            draggable={true}
            animate={true}
          >
          <Popup>
            <span>{place.name}</span>
            <Link href={'/Details'} onClick={() => handleClickLink(place)}>Hey ! you found me</Link>
          </Popup>
        </Marker>
          )
        }
      </div>
    </MapContainer>
  )
}

export default Map