// @ts-nocheck

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
import { Tag } from '../types';

import { tagListLoadingText } from '../texts';

import { PageThemeProps } from '../types';

const TagList: FC<PageThemeProps> = ({ ...props }) => {

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

  if (!tags) {return <PageTextBox text={tagListLoadingText} />}

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
              <PageHeader title="Explore by tag" />
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
            <Box sx={{pb: '5rem'}}>
              {tags.data?.map((tag: Tag) => (
                <Typography
                  key={tag.name}
                  onClick={() => setSelectedTag(tag)}
                >
                  <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
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

export default TagList;
