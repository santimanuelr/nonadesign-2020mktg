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

import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <ThemeProvider theme={rideTheme}>
      <Fragment>
        <SEO
          title={data.wordpressPage.title}
          description={data.wordpressPage.excerpt}
        />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <ContentSectionWrapper>
            <h1>{data.wordpressPage.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
          </ContentSectionWrapper>

          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
    }
  }
`
