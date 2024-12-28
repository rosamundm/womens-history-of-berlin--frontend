// @ts-nocheck

import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from './layout/Footer';
import { DEV_FUNCTIONS_PORT } from '../constants';  // todo: abs import
import { Street, Tag } from '../types';

const TagInstance: FC = () => {

  let { slug } = useParams();
  const [tagInstance, setTagInstance] = useState<Tag>(null);
  const [selectedStreetFromTag, setSelectedStreetFromTag] = useState<Street>(null);

  const getTag = async () => {
    try {
      const response = await axios.get(
        `http://localhost:${DEV_FUNCTIONS_PORT}/.netlify/functions/get-tag-instance?slug=${slug}`
      );
      setTagInstance(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getTag();
  }, [slug]);

  if (!tagInstance) {
    return (
      <div class="container p-8 bg-white">
        <div class="p-6 text-3xl">
          Loading tag...
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

  return (
    <div class="container p-8 bg-white">
      <div className="post-detail" class="p-6 bg-violet-100 rounded-lg">
        <div class="sm:p-2.5 md:p-5 lg:p-5 bg-violet-100">
          <div class="text-4xl">
            Tagged: <b>{tagInstance.data.name}</b>
          </div>

          <div className="street-list" class="p-8">
            {tagInstance.data.streets.map((street: Street) => (
              <div
                className="text-2xl p-3"
                key={street.name}
                onClick={() => setSelectedStreetFromTag(street)}
              >
                {/* todo: change street_slug to slug */}
                <Link to={`/streets/${street.street_slug}/`}>
                  {street.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div
          className="back-to-list"
          class="p-2 bg-violet-300 text-xl rounded-lg"
        >
          <Link to={"/tags/"}>Back to tags</Link>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default TagInstance;
