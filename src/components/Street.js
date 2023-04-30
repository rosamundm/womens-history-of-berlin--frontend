import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import parse from 'html-react-parser';
import Navbar from "./layout/Navbar";

function StreetInstance() {

    let { street_slug } = useParams();
    const streetSlug = street_slug;
    const [streetInstance, setStreetInstance] = useState(null);

    useEffect(() => {

      if (!streetSlug) {
          return;
      }

      (async () => {
          const response = await fetch(
            `/.netlify/functions/get-street-instance?slug=${streetSlug}`,
            {method: "GET"}
          ).then((response) => response.json());
            setStreetInstance(response);
      })();

    }, [streetSlug]);

    if (!streetInstance) {
        return <div>Loading...</div>;
    }

    const unknownInfo = <span class="font-style: italic">unknown</span>
    const parsedStreetDescription = parse(streetInstance.data.eponym_description)

    return (

        <div class="container p-8 bg-slate-100">

          <div className="navbar">
            <Navbar />
          </div>

          <div className="street-detail" class="p-6 bg-sky-100">

              <div className="street-image">
                <img
                  src={streetInstance.data.image} 
                  alt={streetInstance.data.name}
                />
              </div>

              <div className="eponym-basic-info" class="p-5 text-2xl bg-sky-100">
                <div class="text-4xl">
                  <a href={streetInstance.data.map_link} class="font-bold">
                    {streetInstance.data.name} {" "}
                  </a> 
                  is named after {" "}
                  <span class="font-extrabold">
                    {streetInstance.data.eponym_name}
                  </span>
                </div>
               
                <div class="text-base p-5">

                  Born: {" "}
                    {streetInstance.data.eponym_date_of_birth ? (
                      <span class="font-semibold">
                        {streetInstance.data.eponym_date_of_birth}
                      </span> 
                    ): unknownInfo} {" "}
                  in {" "}
                    {streetInstance.data.eponym_place_of_birth ? (
                      <span class="font-semibold">
                        {streetInstance.data.eponym_place_of_birth}
                      </span>
                    ): unknownInfo} {" "}
                  
                  <br></br>

                  Died: {" "}
                    {streetInstance.data.eponym_date_of_death ? (
                      <span class="font-semibold">
                        {streetInstance.data.eponym_date_of_death}
                      </span>
                    ): unknownInfo} {" "}
                  in {" "}
                    {streetInstance.data.eponym_place_of_death ? (
                      <span class="font-semibold">
                        {streetInstance.data.eponym_place_of_death}
                        </span>
                    ): unknownInfo}
                </div>

                <div className="eponym-description" class="p-4">
                  {parsedStreetDescription}
                </div>

              </div>
   
          </div>
            
          <div className="back-to-list" class="p-2 bg-violet-300 text-xl">
            <Link to={`/districts/${streetInstance.data.district_slug}`}>
               See more streets in {streetInstance.data.district}
            </Link>
          </div>

        </div>
    );
}

export default StreetInstance;
