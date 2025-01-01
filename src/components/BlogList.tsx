// @ts-nocheck

import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Footer from './layout/Footer';
import { DEV_FUNCTIONS_PORT } from '../constants';  // todo: abs import

const BlogList: FC = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:${DEV_FUNCTIONS_PORT}/.netlify/functions/get-blog-post-list`
      );
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (posts.length === 0) {
    return (
      <div class="container p-8 bg-white">
        <div class="p-6 text-3xl font-serif">Loading posts...</div>
      </div>
    );
  } else {
    return (
      <div class="container p-8 bg-white">
        <div class="p-6 bg-violet-100 rounded-lg">
          <div
            className="eponym-basic-info"
            class="sm:p-2.5 md:p-5 lg:p-5 sm:text-lg md:text-2xl lg:text-2xl sm:text-left md:text-justify lg:text-justify bg-violet-100"
          >
            <div class="p-6 text-4xl">News</div>

            <div className="street-list" class="p-8">
              {posts.data.map((post) => (
                <div
                  className="text-2xl p-3"
                  key={post.title}
                  onClick={() => setSelectedPost(post)}
                >
                  <div class="text-base p-3">{post.published}</div>
                  <Link to={`/news/${post.slug}/`}>{post.title}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
};

export default BlogList;
