// @ts-nocheck

import { FC, useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import parse from 'html-react-parser';
import Footer from './layout/Footer';
import { PageThemeProps, Street, Tag } from '../types';
import { getFunctionsUrl } from '../helpers';
import { streetLoadingText } from '../texts';

import { Box, Divider, Stack, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';

import BaseTheme from './layout/theme/BaseTheme'
import PageTextBox from './layout/PageTextBox'

const StreetInstance: FC<PageThemeProps> = ({ ...props }) => {

  let { street_slug } = useParams();
  const streetSlug = street_slug;
  const [streetInstance, setStreetInstance] = useState<Street>(null);

  const getStreet = async () => {
    try {
      const response = await axios.get(
        `${getFunctionsUrl()}get-street-instance?slug=${streetSlug}`
      );
      setStreetInstance(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getStreet();
  }, [streetSlug]);

  const unknownInfo = <Typography display="inline">unknown</Typography>;
  const tags = streetInstance?.data.tags

  const TagSection: FC = () => {
    return (
      <Typography>
        <Typography display="inline" variant="bold">Tags:{' '}</Typography>
          {streetInstance && tags.map((tag: Tag) =>
            tag == "[]" ? (  // todo: check types for empty tags
              <Typography display="inline">
                none
              </Typography>
          ) : (
            // handle commas and spaces between tags
            tag === tags[tags.length - 1] ? (
              <Typography key={tag} display="inline">
                <Link to={`/tags/${tag}`}>
                  {tag}
                </Link>
              </Typography>
            ) : (
              <Typography key={tag} display="inline">
                <Link to={`/tags/${tag}`}>
                  {tag}
                </Link>
                ,{' '}
              </Typography>
            )
          ))}
      </Typography>
    )
  }

  return (
    <BaseTheme {...props}>
      <CssBaseline enableColorScheme />
      <Grid container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Stack sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {streetInstance ?
              <>
                {/* Street sign image */}
                <Box
                  component="img"
                  sx={{
                    height: { xs: '90%', sm: '60%' },
                    width: { xs: '90%', sm: '60%' },
                    pt: '2.5rem',
                    maxWidth: '100%'
                  }}
                  alt={streetInstance.data.name}
                  src={streetInstance.data.image}
                />

            <Box sx={{pt: '1rem'}}>
                {/* Birth */}
                <Typography>
                <Typography display="inline" variant="bold">Born:{' '}</Typography>
                  {streetInstance.data.eponym_date_of_birth ? (
                    <Typography display="inline">
                      {streetInstance.data.eponym_date_of_birth}
                      </Typography>
                  ) : (
                      unknownInfo
                  )}
                  {' '}in{' '}
                  {streetInstance.data.eponym_place_of_birth ? (
                    <Typography display="inline">
                      {streetInstance.data.eponym_place_of_birth}
                      </Typography>
                  ) : (
                    unknownInfo
                  )}
                </Typography>

                {/* Death */}
                <Typography>
                <Typography display="inline" variant="bold">Died:{' '}</Typography>
                    {streetInstance.data.eponym_date_of_death ? (
                      <Typography display="inline">
                        {streetInstance.data.eponym_date_of_death}
                      </Typography>
                    ) : (
                      unknownInfo
                    )}
                    {' '}in{' '}
                    {streetInstance.data.eponym_place_of_death ? (
                      <Typography display="inline">
                        {streetInstance.data.eponym_place_of_death}
                      </Typography>
                    ) : (
                      unknownInfo
                    )}
                </Typography>
                <TagSection />
              </Box>
                  <PageTextBox text={parse(streetInstance.data.eponym_description)} />
                </>   
              :
                <PageTextBox text={streetLoadingText} />
              }
            </Stack>
          </Grid>
        </Grid>
        <Divider />
        <Footer />
      </BaseTheme>
    )
}

export default StreetInstance;