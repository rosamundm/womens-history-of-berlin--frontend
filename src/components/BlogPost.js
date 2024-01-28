import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import parse from 'html-react-parser';
import Footer from "./layout/Footer";

export default function BlogPostInstance() {

    let { slug } = useParams();
    const [postInstance, setPostInstance] = useState(null);

    useEffect(() => {

      if (!slug) {
          return;
      }

      (async () => {
          const response = await fetch(
            `/.netlify/functions/get-blog-post-instance?slug=${slug}`,
            {method: "GET"}
          ).then((response) => response.json());
            setPostInstance(response);
      })();

    }, [slug]);

    if (!postInstance) {
      return (
        <div class="container p-8 bg-white">
            <div class="p-6 text-3xl">
                Loading post...
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

    const parsedPostBody = parse(postInstance.data.body)

    return (

        <div class="container p-8 bg-white">

          <div className="post-detail" class="p-6 bg-sky-100 rounded-lg">

              <div class="sm:p-2.5 md:p-5 lg:p-5 bg-sky-100">

                <div class="text-4xl">
                    {postInstance.data.title}
                </div>
               
                <div class="text-base p-5">
                    {postInstance.data.published} 
                </div>

                <div class="p-4 sm:text-lg md:text-2xl lg:text-2xl sm:text-left md:text-justify lg:text-justify">
                  {parsedPostBody}
                </div>

              </div>
   
          </div>
            
          <div>
            <Footer/>
          </div>

        </div>
    );
};
