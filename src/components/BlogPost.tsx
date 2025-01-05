// @ts-nocheck

import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';

import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';

import Footer from './layout/Footer';
import { getFunctionsUrl } from '../helpers';  // todo: abs import
import { PageThemeProps } from '../types';
import { blogPostLoadingText } from '../texts';

import BaseTheme from './layout/theme/BaseTheme'
import PageHeader from './layout/PageHeader'
import PageTextBox from './layout/PageTextBox'

const BlogPostInstance: FC<PageThemeProps> = ({ ...props }) => {
  
  let { slug } = useParams();
  const [postInstance, setPostInstance] = useState(null);

  const getPost = async () => {
    try {
      const response = await axios.get(
        `${getFunctionsUrl()}get-blog-post-instance?slug=${slug}`
      );
      setPostInstance(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getPost();
  }, [slug]);

  if (!postInstance) {return <PageTextBox text={blogPostLoadingText} />}

  return (
    <BaseTheme {...props}>
      {/* todo: resolve header width problem with enableColorScheme: */}
      <CssBaseline />
        <Grid container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // pt: { xs: 14, sm: 20 },
            // pb: { xs: 8, sm: 12 },
          }}
        >
          <Grid
            item
            sx={{
              alignItems: 'center',
              width: '100%'  
            }}
          >
            <PageHeader title={postInstance.data.title}/>
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',  // todo: widen for smaller screens
            }}
          >
            <Typography>
              {postInstance.data.published}
            </Typography>
            <PageTextBox text={parse(postInstance.data.body)} />
          </Grid>
        </Grid>
        <Divider />
        <Footer />
    </BaseTheme>
  )
};

export default BlogPostInstance;
