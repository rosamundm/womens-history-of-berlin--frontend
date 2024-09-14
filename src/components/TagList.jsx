import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./layout/Footer";

export default function TagList() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await fetch("/.netlify/functions/get-tag-list", {
        method: "GET",
      }).then((response) => response.json());
      setTags(response);
    })();
  }, []);

  if (tags.length === 0) {
    return (
      <div class="p-8 bg-violet-300">
        <div class="p-6 text-3xl font-serif">Loading tags...</div>
      </div>
    );
  } else {
    return (
      <div class="container p-8 bg-white">
        <div className="post-detail" class="p-6 bg-violet-100 rounded-lg">
          <div class="p-6 text-4xl">Explore by tag</div>

          <div className="street-list" class="p-8">
            {tags.data.map((tag) => (
              <div
                className="text-2xl p-3"
                key={tag.name}
                onClick={() => setSelectedTag(tag)}
              >
                <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
              </div>
            ))}
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
