import { FC } from 'react';
import Map from "../Map";

// from MUI kit
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Hero from './Hero';
import Footer from './Footer';

import BaseTheme from './theme/BaseTheme'

import Placeholder from './Placeholder';
import { PageThemeProps } from 'types';

const Homepage: FC<PageThemeProps> = ({ ...props }) => {
  return (
    <BaseTheme {...props}>
      <CssBaseline enableColorScheme />
      <div>

        <Placeholder />

        {/* to keep: */}

        {/* <Hero />
        <Map />
        <Divider />
        <Footer /> */}

        {/* to delete after design confirmed: */}

        {/* <LogoCollection /> */}
        {/* <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ /> */}
      </div>
    </BaseTheme>
  );
}

export default Homepage;