"use client"
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const Xerite = () => {
  const position = [40.37775, 49.81982]
  
  return (
    <div className="w-full lg:w-full xl:w-2/3 mx-auto my-8 lg:my-12 z-0">
      <div className="h-96 lg:h-80 xl:h-96">
        <MapContainer center={position} zoom={13} className="h-full w-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Ofisimiz burada!</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Xerite
