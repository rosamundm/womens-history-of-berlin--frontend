// @ts-nocheck

import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';

import Footer from './layout/Footer';
import { DEV_FUNCTIONS_PORT } from '../constants';  // todo: abs import

const BlogPostInstance: FC = () => {
  
  let { slug } = useParams();
  const [postInstance, setPostInstance] = useState(null);

  const getPost = async () => {
    try {
      const response = await axios.get(
        `http://localhost:${DEV_FUNCTIONS_PORT}/.netlify/functions/get-blog-post-instance?slug=${slug}`
      );
      setPostInstance(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getPost();
  }, [slug]);

  if (!postInstance) {
    return (
      <div class="container p-8 bg-white">
        <div class="p-6 text-3xl">
          Loading post...
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

  const parsedPostBody = parse(postInstance.data.body);

  return (
    <div class="container p-8 bg-white">
      <div className="post-detail" class="p-6 bg-violet-100 rounded-lg">
        <div class="sm:p-2.5 md:p-5 lg:p-5 bg-violet-100">
          <div class="text-4xl">{postInstance.data.title}</div>

          <div class="text-base p-5">{postInstance.data.published}</div>

          <div class="p-4 sm:text-lg md:text-2xl lg:text-2xl sm:text-left md:text-justify lg:text-justify">
            {parsedPostBody}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPostInstance;
