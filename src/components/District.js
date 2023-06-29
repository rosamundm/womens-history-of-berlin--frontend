import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./layout/Footer";

export default function DistrictInstance() {

    let { district_slug } = useParams();
    const districtSlug = district_slug;
    const [districtInstance, setDistrictInstance] = useState(null);
    const [selectedStreet, setSelectedStreet] = useState(null);

    useEffect(() => {

        if (!districtSlug) {
            return;
        }

        (async () => {
            const response = await fetch(
                `/.netlify/functions/get-district-instance?slug=${districtSlug}`,
                {method: "GET"}
            ).then((response) => response.json());
            setDistrictInstance(response);
        })();
        
    }, [districtSlug]);

    if (!districtInstance) {

        return (

            <div class="container p-8 bg-slate-100">
                <div class="p-6 text-3xl">
                    Loading streets for this district...
                    <div class="py-3 text-xl">
                        If it takes too long, please try again or check that the URL is valid.
                    </div>   
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
            
        );
    }

    if (districtInstance.data.streets.length > 0) {

        return (

            <div class="container p-8 bg-slate-100">

                <div class="p-6 text-4xl">
                    {districtInstance.data.name}
                </div>
             
                <div className="street-list" class="p-8">
                    {districtInstance.data.streets.map((street) => (

                        <div 
                        className="text-2xl p-3"
                            key={street.name} onClick={() => setSelectedStreet(street)}>
                            <Link to={`/streets/${street.street_slug}/`}>
                                {street.name}
                            </Link>
                        </div>
                    ))}
                </div>
              
                <div class="p-6">
                    <Link to={"/districts/"}>
                        Back to district list
                    </Link>
                </div>

                <div>
                    <Footer/>
                </div>
    
            </div>
        )

    } else {

        return (
        
            <div class="container p-8 bg-slate-100">
        
                <div class="p-6 text-4xl">
                    {districtInstance.data.name}
                </div>
                     
                    <div className="street-list" class="p-8">
                        No streets added yet for this district — keep checking back!
                    </div>
                      
                    <div className="p-6">
                        <Link to={"/districts/"}>
                            Back to district list
                        </Link>
                    </div>

                    <div>
                        <Footer/>
                    </div>
            
                </div>       
        )      
          
}};