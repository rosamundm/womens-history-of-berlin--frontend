// @ts-nocheck

import { FC, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

import BaseTheme from './layout/theme/BaseTheme'
import parse from 'html-react-parser';

import PageHeader from './layout/PageHeader'
import PageTextBox from './layout/PageTextBox'
import Footer from './layout/Footer';

import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid2';

import { getFunctionsUrl } from '../helpers';  // todo: abs import
import { PageThemeProps } from '../types';
import { textPageLoadingText } from '../texts';

const PageInstance: FC<PageThemeProps> = ({ ...props }) => {
    
    let { slug } = useParams();
    const [pageInstance, setPageInstance] = useState(null);
  
    const getPage = async () => {
      try {
        const response = await axios.get(
          `${getFunctionsUrl()}get-page-instance?slug=${slug}`
        );
        setPageInstance(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    useEffect(() => {
      getPage();
    }, [slug]);

    if (!pageInstance) {return <PageTextBox text={pageLoatextPageLoadingTextdingText} />}

    return (
        <BaseTheme {...props}>
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
                <PageHeader title={pageInstance.data.title} />
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
                <PageTextBox text={parse(pageInstance.data.body)} />
            </Grid>
            </Grid>
            <Divider />
            <Footer />
        </BaseTheme>
    )
};

export default PageInstance;