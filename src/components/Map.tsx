// @ts-nocheck

import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { useMap } from 'react-leaflet/hooks';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Box, Container } from '@mui/material';

import { Street, StreetList } from '../types';
import { getFunctionsUrl } from '../helpers';

const getMapCenter = () => {
  const map = useMap();
  console.log(map.getCenter());
  return null;
}

const Map: FC = () => {

  const attribution =
    "<a href='https://www.openstreetmap.org/copyright'>© OpenStreetMap</a> | \
                        Markers: Prosymbols Premium (Flaticon)";

  const customIconComplete = new Icon({
    iconUrl: require('../assets/green-location-pin.png'),
    iconSize: [38, 38],
  });

  const customIconIncomplete = new Icon({
    iconUrl: require('../assets/red-location-pin.png'),
    iconSize: [38, 38],
  });

  const [mapStreets, setMapStreets] = useState<StreetList>([]);

  const getMapStreets = async () => {
    try {
      const response = await axios.get(`${getFunctionsUrl()}get-street-list`);
      setMapStreets(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getMapStreets();
  }, []);

  if (!mapStreets) {
    return (
      <div class="p-6 text-3xl">
        Loading map data...
        <div class="py-3 text-xl">
          If it takes too long, please try again or check that the URL is valid.
        </div>
      </div>
    );
  } else {
    return (
      <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: { xs: '28rem', },
        pb: { xs: 8, sm: 12 },
      }}
      >
        <MapContainer
          center={[52.5170124, 13.389094]}
          zoom={11}
          style={{ height: "100vh", width: "100%" }}
        >
          <getMapCenter />
          <TileLayer
            attribution={attribution}
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {mapStreets.data && mapStreets.data.map((mapStreet) => (
            mapStreet.entry_complete ? ( 
            <Marker position={mapStreet.geocode} icon={customIconComplete}>
              <Popup>
                <Link target="_blank" to={`/streets/${mapStreet.street_slug}`}>
                  {mapStreet.name}
                </Link>
              </Popup>
            </Marker>
            ) : (
            <Marker position={mapStreet.geocode} icon={customIconIncomplete}>
              <Popup>
                {mapStreet.name}
              </Popup>
            </Marker>
          )))}
        </MapContainer>
      </Container>
    );
  }
}

export default Map;