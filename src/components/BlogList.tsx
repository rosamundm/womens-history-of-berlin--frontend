import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Box, Divider, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';

import PageHeader from './layout/PageHeader'
import PageTextBox from './layout/PageTextBox'
import Footer from './layout/Footer';

import BaseTheme from './layout/theme/BaseTheme'

import { getFunctionsUrl } from '../helpers';
import { PageThemeProps, Post } from '../types';

import { blogPostListLoadingText } from '../texts';

const BlogList: FC<PageThemeProps> = ({ ...props }) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `${getFunctionsUrl()}get-blog-post-list`
      );
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (!posts) {return <PageTextBox text={blogPostListLoadingText} />}

  return (
      <BaseTheme {...props}>
      <CssBaseline />
        <Grid container
          sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
          }}
          >
          <Grid
            sx={{
              alignItems: 'center',
              width: '100%'  
            }}
          >
              <PageHeader title="News" />
          </Grid>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '80%', sm: '50%' },
            }}
          >
            <Box>
              {posts.map((post: Post) => (
                <Typography
                  sx={{pb: '2rem'}}
                  key={post.title}
                  onClick={() => setSelectedPost(post)}
                >
                  <Typography>{post.published}</Typography>
                  <Link to={`/news/${post.slug}/`}>{post.title}</Link>
                </Typography>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Divider />
        <Footer />
      </BaseTheme>
    )
};

export default BlogList;
