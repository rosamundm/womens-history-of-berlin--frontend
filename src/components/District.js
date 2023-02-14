import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "./layout/Navbar";

export default function DistrictInstance() {

    let { district_slug, street_slug } = useParams();
    const districtSlug = district_slug;
    const streetSlug = street_slug;
    const [districtInstance, setDistrictInstance] = useState(null);
    const [selectedStreet, setSelectedStreet] = useState(null);

    useEffect(() => {

        if (!districtSlug) {
            return;
        }

        (async () => {
            const response = await fetch(`/districts/${districtSlug}`);
            const districtInstance = await response.json();            
            setDistrictInstance(districtInstance);
        })();
        
    }, [districtSlug]);


if (!districtInstance) {
    return <div>Loading...</div>;
}

if (districtInstance.streets.length === 0) {
    return (

        <div class="container p-8 bg-slate-100">

            <div className="navbar">
                <Navbar />
            </div>

            <div class="p-6 text-6xl">{districtInstance.name}</div>
             
              <div className="street-list" class="p-8">
                No streets added yet for this district — keep checking back!
              </div>
              
            <div className="back-to-list">
                <Link to={"/districts/"}>
                 Back to district list
                </Link>
            </div>
    
        </div>
    
    )

} else {
    return (

        <div class="container p-8 bg-slate-100">

            <div className="navbar">
                <Navbar />
            </div>


            <div class="p-6 text-6xl">{districtInstance.name}</div>
             
              <div className="street-list" class="p-8">
                  {districtInstance.streets.map((street) => (

                    <div 
                      className="text-3xl p-3"
                        key={street.name} onClick={() => setSelectedStreet(street)}>
                        <Link to={`/districts/${districtInstance.district_slug}/${street.street_slug}`}>
                            {street.name}
                        </Link>
                    </div>
                  ))}


            </div>
              
            <div className="back-to-list">
                <Link to={"/districts/"}>
                    Back to district list
                </Link>
            </div>
    
    </div>
    
)}};
