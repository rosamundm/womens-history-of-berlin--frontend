import React, { useEffect, useState } from "react";
import parse from 'html-react-parser';
import { Link, useParams } from "react-router-dom";
import Navbar from "./layout/Navbar";

function StreetInstance() {

    let { district_slug, street_slug } = useParams();
    const districtSlug = district_slug;
    const streetSlug = street_slug;
    const [streetInstance, setStreetInstance] = useState(null);

    useEffect(() => {

      if (!streetSlug) {
          return;
      }

      (async () => {
          const response = await fetch(`/streets/${streetSlug}`);
          const streetInstance = await response.json();
          setStreetInstance(streetInstance);
      })();

    }, [streetSlug]);

    if (!streetInstance) {
        return <div>Loading...</div>;
    }

    const parsedStreetDescription = parse(streetInstance.eponym_description)

    return (

        <div class="container p-8 bg-slate-100">

          <div className="navbar">
            <Navbar />
          </div>

          <div className="street-detail" class="p-6 bg-sky-100">

              <div className="street-image">
                <img
                  src={streetInstance.image} 
                  alt={streetInstance.name}
                />
              </div>

              <div className="eponym-basic-info" class="p-5 text-2xl bg-sky-100">
                <a href={streetInstance.map_link}><b>{streetInstance.name}</b></a> {" "}
                is named after <b>{streetInstance.eponym_name}</b>, {" "}
                who was born on <b>{streetInstance.eponym_date_of_birth}</b> {" "}
                in <b>{streetInstance.eponym_place_of_birth}</b>, {" "}
                and died on <b>{streetInstance.eponym_date_of_death}</b> in <b>{streetInstance.eponym_place_of_death}</b>
              
                <div className="eponym-description" class="p-4">
                  {parsedStreetDescription}
                </div>

              </div>
   
          </div>
            
          <div className="back-to-list" class="p-2 bg-violet-300 text-xl">
            <Link to={`/districts/${districtSlug}`}>
               See more streets in {streetInstance.district}
            </Link>
          </div>

        </div>
    );
}

export default StreetInstance;
