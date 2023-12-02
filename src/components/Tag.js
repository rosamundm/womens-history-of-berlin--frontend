import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import parse from 'html-react-parser';
import Footer from "./layout/Footer";

export default function TagInstance() {

    let { slug } = useParams();
    const [tagInstance, setTagInstance] = useState(null);
    const [selectedStreetFromTag, setSelectedStreetFromTag] = useState(null);

    useEffect(() => {

      if (!slug) {
          return;
      }

      (async () => {
          const response = await fetch(
            `/.netlify/functions/get-tag-instance?slug=${slug}`,
            {method: "GET"}
          ).then((response) => response.json());
            setTagInstance(response);
      })();

    }, [slug]);

    if (!tagInstance) {
      return (
        <div class="container p-8 bg-slate-100">
            <div class="p-6 text-3xl">
                Loading tag...
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

    return (

        <div class="container p-8 bg-slate-100">

          <div className="post-detail" class="p-6 bg-sky-100">

              <div class="sm:p-2.5 md:p-5 lg:p-5 bg-sky-100">

                <div class="text-4xl">
                    Tagged: <b>{tagInstance.data.name}</b>
                </div>

                <div className="street-list" class="p-8">
                    {tagInstance.data.streets.map((street) => (

                        <div 
                        className="text-2xl p-3"
                            key={street.name} onClick={() => setSelectedStreetFromTag(street)}>
                            <Link to={`/streets/${street.street_slug}/`}>
                                {street.name}
                            </Link>
                        </div>
                    ))}
                </div>





              </div>
   
          </div>
            
          <div class="p-6">
            <Link to={"/tags/"}>
                Back to tags
            </Link>
          </div>

          <div>
            <Footer/>
          </div>

        </div>
    );
};
