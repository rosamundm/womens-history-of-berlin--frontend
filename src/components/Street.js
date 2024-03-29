import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import Footer from "./layout/Footer";
import { toHaveErrorMessage } from "@testing-library/jest-dom/dist/matchers";

export default function StreetInstance() {
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
        { method: "GET" },
      ).then((response) => response.json());
      setStreetInstance(response);
    })();
  }, [streetSlug]);

  if (!streetInstance) {
    return (
      <div class="container p-8 bg-white">
        <div class="p-6 text-3xl">
          Loading details for this street...
          <div class="py-3 text-xl">
            If it takes too long, please try again or check that the URL is
            valid.
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }

  const unknownInfo = <span class="font-style: italic">unknown</span>;
  const parsedStreetDescription = parse(streetInstance.data.eponym_description);

  return (
    <div class="container p-8 bg-white">
      <div className="street-detail" class="p-6 bg-violet-100 rounded-lg">
        <div className="street-image">
          <img src={streetInstance.data.image} alt={streetInstance.data.name} />
        </div>

        <div
          className="eponym-basic-info"
          class="sm:p-2.5 md:p-5 lg:p-5 bg-violet-100"
        >
          <div class="text-4xl">
            <a href={streetInstance.data.map_link} class="font-bold">
              {streetInstance.data.name}{" "}
            </a>
            in <b>{streetInstance.data.district}</b> is named after{" "}
            <span class="font-extrabold">
              {streetInstance.data.eponym_name}
            </span>
          </div>

          <div class="text-base p-5">
            Born:{" "}
            {streetInstance.data.eponym_date_of_birth ? (
              <span class="font-semibold">
                {streetInstance.data.eponym_date_of_birth}
              </span>
            ) : (
              unknownInfo
            )}{" "}
            in{" "}
            {streetInstance.data.eponym_place_of_birth ? (
              <span class="font-semibold">
                {streetInstance.data.eponym_place_of_birth}
              </span>
            ) : (
              unknownInfo
            )}{" "}
            <br></br>
            Died:{" "}
            {streetInstance.data.eponym_date_of_death ? (
              <span class="font-semibold">
                {streetInstance.data.eponym_date_of_death}
              </span>
            ) : (
              unknownInfo
            )}{" "}
            in{" "}
            {streetInstance.data.eponym_place_of_death ? (
              <span class="font-semibold">
                {streetInstance.data.eponym_place_of_death}
              </span>
            ) : (
              unknownInfo
            )}
          </div>

          <div
            className="eponym-description"
            class="p-4 sm:text-lg md:text-2xl lg:text-2xl sm:text-left md:text-justify lg:text-justify"
          >
            {parsedStreetDescription}
          </div>

          <div class="p-4">
            <div class="text-xl">
              <b>Tagged:</b>
              {streetInstance.data.tags.map((tag) =>
                tag == "[]" ? (
                  <span> No tags yet</span>
                ) : (
                  <div class="text-xl">
                    <span key={tag}>
                      <Link to={`/tags/${tag}`}>{tag}</Link>
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
