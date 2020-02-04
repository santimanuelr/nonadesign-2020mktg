import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/src/theme/appclassic';
import { ResetCSS } from 'common/src/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/Custom/Navbar';
import Footer from '../containers/Custom/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/Custom/Custom.style';


import SEO from '../components/seo';

export default function() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="2020mktg" />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            




          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}
