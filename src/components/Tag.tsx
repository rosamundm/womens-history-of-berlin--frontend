// @ts-nocheck

import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Divider, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';

import PageHeader from './layout/PageHeader'
import PageTextBox from './layout/PageTextBox'
import Footer from './layout/Footer';

import BaseTheme from './layout/theme/BaseTheme'

import { getFunctionsUrl } from '../helpers';
import { Street, Tag } from '../types';

import { tagLoadingText } from '../texts';

const TagInstance: FC<PageThemeProps> = ({ ...props }) => {

  let { slug } = useParams();
  const [tagInstance, setTagInstance] = useState<Tag>(null);
  const [selectedStreetFromTag, setSelectedStreetFromTag] = useState<Street>(null);

  const getTag = async () => {
    try {
      const response = await axios.get(
        `${getFunctionsUrl()}get-tag-instance?slug=${slug}`
      );
      setTagInstance(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getTag();
  }, [slug]);

  if (!tagInstance) {return <PageTextBox text={tagLoadingText} />}

  return (
    <BaseTheme {...props}>
      {/* todo: resolve header width problem with enableColorScheme: */}
      <CssBaseline />
        <Grid container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid
            item
            sx={{
              alignItems: 'center',
              width: '100%'  
            }}
          >
            <PageHeader title={tagInstance.data.name}/>
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: '80%', sm: '50%' },
              pb: '5rem'
            }}
          >
            {tagInstance.data.streets.map((street: Street) => (
              <Typography
                sx={{color: 'red'}}
                className="text-2xl p-3"
                key={street.name}
                onClick={() => setSelectedStreetFromTag(street)}
              >
                {/* todo: change street_slug to slug */}
                <Link 
                  to={`/streets/${street.street_slug}/`}>
                  {street.name}
                </Link>
              </Typography>
            ))}
          </Grid>
        </Grid>
        <Divider />
        <Footer />
    </BaseTheme>
  )
};

export default TagInstance;
