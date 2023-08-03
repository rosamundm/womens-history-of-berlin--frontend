import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";

function getMapCenter() {
    const map = useMap()
    console.log(map.getCenter())
    return null
}
  
export default function Map() {
    return (
      <MapContainer
        center={[52.5170124, 13.389094]}
        zoom={10}
        style={{ height: "100vh", width: "100vh" }}
      >
        <getMapCenter />
        <TileLayer
            attribution="<a href='https://www.openstreetmap.org/copyright'>© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

        />
      </MapContainer>
    )
};