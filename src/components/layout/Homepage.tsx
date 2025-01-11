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

        {/* Remove after merge to main */}
        <Placeholder />

        {/* to keep: */}

        {/* <Hero />
        <Map />
        <Divider />
        <Footer /> */}

      </div>
    </BaseTheme>
  );
}

export default Homepage;