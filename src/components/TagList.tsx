// @ts-nocheck

import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './layout/Footer';
import { getFunctionsUrl } from '../helpers';  // todo: abs import
import { Tag } from '../types';

const TagList: FC = () => {

  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);

  const getTags = async () => {
    try {
      const response = await axios.get(`${getFunctionsUrl()}get-tag-list`);
      setTags(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getTags();
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
            {tags.data.map((tag: Tag) => (
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
};

export default TagList;
