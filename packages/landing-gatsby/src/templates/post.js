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
            <Img fluid={data.wordpressPost.featured_media.localFile.childImageSharp.fluid} object-fit="cover" objectPosition="50% 50%" alt={data.wordpressPost.title} style={{ height: "450px", opacity: "0.2" }} />
            <h1 style={{ width: "100%", textAlign: "center", position: "absolute", top: "50%"}} dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }} /> 
              <Container>
                  <p style={{ fontWeight: "bold", fontSize: "12px" }}>
                    {data.wordpressPost.date}
                  </p>
                  <div
                    style={{ marginTop: 20 }}
                    dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
                  />
              </Container>
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
