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
import Container from 'common/src/components/UI/Container';
import PageSectionWrapper, {
  PageSectionContent,
} from '../containers/Custom/PageSection/pagesection.style';

import { graphql } from "gatsby"
import Img from "gatsby-image"

export default ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO
          title={data.wordpressPost.title}
          description={data.wordpressPost.excerpt}
        />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <PageSectionWrapper id="home">
              <Container>
                <PageSectionContent>
                  <Img
                    fluid={data.wordpressPost.featured_media.localFile.childImageSharp.fluid}
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      height: "100%"
                    }}
                  />
                  <h1> {data.wordpressPost.title} </h1>
                  <p>
                    Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
                  </p>
                  <div
                    style={{ marginTop: 20 }}
                    dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
                  />
                </PageSectionContent>
              </Container>
            </PageSectionWrapper>
          </ContentWrapper>


          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}

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
            fluid {
              sizes
              src
            }
          }
        }
      }
    }
  }
`
