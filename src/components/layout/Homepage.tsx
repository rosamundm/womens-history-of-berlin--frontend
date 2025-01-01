import { FC } from 'react'
import HomepageHeader from "./HomepageHeader";
import Map from "../Map";

// from MUI kit
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Hero from './Hero';
import Footer from './Footer';

import BaseTheme from './theme/BaseTheme'

interface HomepageProps {
  disableCustomTheme?: boolean
}

const Homepage: FC<HomepageProps> = ({ ...props }) => {
  return (
    <BaseTheme {...props}>
      <CssBaseline enableColorScheme />
      <Hero />
      <div>
        <Map />
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
        <Divider />
        <Footer />
      </div>
    </BaseTheme>
  );
}

export default Homepage;