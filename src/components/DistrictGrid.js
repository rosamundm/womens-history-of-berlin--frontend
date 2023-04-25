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
                  class="p-4 bg-red-200 rounded-md flex items-center justify-center" 
                  role="none" 
                  key={district.name} 
                  onClick={() => setSelectedDistrict(district)}>   

                  <Link 
                  to={`/districts/${district.district_slug}`}>{district.name}
                  </Link>
                </div>
            ))}

            </div>
            
        </div>
            
    )
};