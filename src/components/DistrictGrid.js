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

    if (districtList.length === 0) {
        return(
            <div class="p-8 bg-violet-300">
                <div class="p-6 text-3xl font-serif">
                    Loading districts...
                </div>
            </div>
        )
    } else {

    return (

        <div class="p-8 bg-violet-300">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {districtList.data?.map((district) => (
                <div 
                  class="p-12 bg-[#E1D0FC] rounded-md flex items-center justify-center font-serif group/item hover:bg-white" 
                  role="none" 
                  key={district.name} 
                  style={{ 
                    backgroundImage: `url(${"/assets/" + district.image_path})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center"
                }}
                  onClick={() => setSelectedDistrict(district)}
                >   

                    <div>
                        {district.number_of_completed_streets > 0 ? (
                        <Link 
                            to={`/districts/${district.district_slug}`}>{district.name}
                        </Link>
                        ) : (
                            <span>{district.name}</span>
                        )}

                        <br></br>

                        <span class="text-xs group/edit invisible group-hover/item:visible">
                            {district.number_of_completed_streets} entries added
                        </span>

                    </div>

                </div>
            ))}

            </div>
            
        </div>
            
    )}
};