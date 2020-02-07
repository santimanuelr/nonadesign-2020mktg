import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/src/theme/appclassic';
import { ResetCSS } from 'common/src/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/Custom/Navbar';
import Banner from '../containers/Custom/Banner';
import ServiceItems from '../containers/Custom/ServiceItems';
import Footer from '../containers/Custom/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/Custom/Custom.style';

import SEO from '../components/seo';
import Container from 'common/src/components/UI/Container';

import { graphql } from "gatsby"

export default ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="title"
          description="description"
        />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Container>
              <Banner heading="Services" subheading="subheader" />
              <ServiceItems />
            </Container>
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}
