import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useMap } from "react-leaflet/hooks";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const getMapCenter = () => {
  const map = useMap();
  console.log(map.getCenter());
  return null;
}

export default function Map() {
  const attribution =
    "<a href='https://www.openstreetmap.org/copyright'>© OpenStreetMap</a> | \
                        Markers: Prosymbols Premium (Flaticon)";

  const customIconComplete = new Icon({
    iconUrl: require("../assets/green-location-pin.png"),
    iconSize: [38, 38],
  });

  const customIconIncomplete = new Icon({
    iconUrl: require("../assets/red-location-pin.png"),
    iconSize: [38, 38],
  });

  const [mapStreets, setMapStreets] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("/.netlify/functions/get-street-list", {
        method: "GET",
      }).then((response) => response.json());
      setMapStreets(response);
    })();
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
      <div
        className="landing"
        class="px-500 justify-center justify-items-center lg:max-w-6xl m-auto py-8 sm:py-14 md:py-14"
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

          {mapStreets.data.length > 0 && mapStreets.data.map((mapStreet) => (
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
      </div>
    );
  }
}
