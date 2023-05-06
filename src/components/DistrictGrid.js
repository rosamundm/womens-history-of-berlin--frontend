import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DistrictGrid() {
    
    const [districtList, setDistricts] = useState([]);
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    useEffect(() => {

        (async () => {
            const response = await fetch(
                "/.netlify/functions/get-district-list",
                {method: "GET"}
            ).then((response) => response.json());
            setDistricts(response);
        })();
        
    }, []);

    return (

        <div class="p-8 bg-violet-300">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {districtList.data?.map((district) => (
                <div 
                  class="p-12 bg-red-200 rounded-md flex items-center justify-center font-serif" 
                  role="none" 
                  key={district.name} 
                  onClick={() => setSelectedDistrict(district)}>   

                    <div>
                        <Link 
                            to={`/districts/${district.district_slug}`}>{district.name}
                        </Link>

                        <br></br>

                        {/* Add to flip card later:

                        <span class="text-xs">
                            ({district.number_of_completed_streets} / {district.number_of_added_streets} entries available)
                        </span> */}

                    </div>

                </div>
            ))}

            </div>
            
        </div>
            
    )
};