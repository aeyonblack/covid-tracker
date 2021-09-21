import React from 'react';
import { Map as MapContainer, TileLayer } from 'react-leaflet';
import './Map.css';
import { showMapData } from './util';

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showMapData(countries)}
      </MapContainer>
    </div>
  );
}

export default Map;
