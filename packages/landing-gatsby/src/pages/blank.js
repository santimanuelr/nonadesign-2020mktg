import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { rideTheme } from 'common/src/theme/ride';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Ride/ride.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Navbar from '../containers/Ride/Navbar';
import Footer from '../containers/Ride/Footer';
import SEO from '../components/seo';

import ContentSectionWrapper from '../containers/Ride/ContentSectionWrapper';


export default () => {
  return (
    <ThemeProvider theme={rideTheme}>
      <Fragment>
        <SEO title="Page Title" />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          
          <ContentWrapper>


            
          </ContentWrapper>

          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};