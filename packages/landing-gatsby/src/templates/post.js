import React, { Fragment } from 'react';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { rideTheme } from 'common/src/theme/ride';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Ride/ride.style';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import Header from '../containers/Ride/Header';
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
          title={data.wordpressPost.title}
          description={data.wordpressPost.excerpt}
        />
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Header />
            </DrawerProvider>
          </Sticky>
          <ContentSectionWrapper>
            <h1> {data.wordpressPost.title} </h1>
            <p>
              Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
            </p>
            <Img sizes={data.wordpressPost.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressPost.title} style={{ maxHeight: 450 }} />
            <div
              style={{ marginTop: 20 }}
              dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
            />
          </ContentSectionWrapper>
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author
      featured_media {
        localFile {
          childImageSharp {
            sizes(maxWidth: 1200) {
              src
            }
          }
        }
      }
    }
  }
`
