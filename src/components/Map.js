import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import { useMap } from "react-leaflet/hooks";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Footer from "./layout/Footer";

function getMapCenter() {
    const map = useMap()
    console.log(map.getCenter())
    return null
}
  
export default function Map() {

    const attribution = "<a href='https://www.openstreetmap.org/copyright'>© OpenStreetMap</a> | \
                        Markers: Prosymbols Premium (Flaticon)"

    const customIcon = new Icon({
        iconUrl: require("../assets/green-location-pin.png"),
        iconSize: [38, 38]
    })

    const [mapStreets, setMapStreets] = useState(null);

    useEffect(() => {

        (async () => {
            const response = await fetch(
                "/.netlify/functions/get-street-list",
                {method: "GET"}
            ).then((response) => response.json());
            setMapStreets(response);
        })();

    }, []);

    console.log(typeof mapStreets)


    if (!mapStreets) {

        return (
            <div class="container p-8 bg-slate-100">
                <div class="p-6 text-3xl">
                    Loading map data...
                    <div class="py-3 text-xl">
                      If it takes too long, please try again or check that the URL is valid.
                    </div>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        );

    } else {

        return (

            <div class="container p-8 py-1 bg-slate-100">

                <div class="p-6 bg-sky-100">
                    <div class="p-5 px-2.5">
                        <div className="landing" class="px-500 justify-center justify-items-cewnter max-w-4xl m-auto py-8 sm:py-14 md:py-14">
                            <MapContainer
                                center={[52.5170124, 13.389094]}
                                zoom={10}
                                style={{ height: "100vh", width: "100%" }}
                            >
                            <getMapCenter />
                            <TileLayer
                                attribution={attribution}
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />

                                {mapStreets.data.map(mapStreet => (
                                    <Marker position={mapStreet.geocode} icon={customIcon}>
                                        <Popup>
                                            <Link
                                                target="_blank"
                                                to={`/streets/${mapStreet.street_slug}`}>
                                                    {mapStreet.name}
                                            </Link>
                                        </Popup>
                                    </Marker>
                                ))}
                            </MapContainer>
                        </div>
                        <p class="pb-2.5 sm:text-lg md:text-2xl lg:text-2xl sm:text-left md:text-justify">
                            Here's a topographic representation of the Berlin streets named after women. Each marker contains a link that leads to the page telling
                            the story of the street's eponym (opens in a new tab).
                            </p>
                        <p class="pb-2.5 sm:text-lg md:text-2xl lg:text-2xl sm:text-left md:text-justify">
                            <b>NB:</b> These are only the streets whose entries are complete. As explained <a href="http://named-after-women.berlin/about">here</a>, 
                            the website is being continuously updated!
                        </p>
                    </div>

                </div>

                <div>
                    <Footer/>
                </div>

            </div>

        )
    }
};