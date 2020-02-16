import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "common/src/theme/appclassic";
import { ResetCSS } from "common/src/assets/css/style";
import Sticky from "react-stickynode";
import Navbar from "../containers/Custom/Navbar";
import Banner from "../containers/Custom/Banner";
import Team from "../containers/Custom/Team";
import Footer from "../containers/Custom/Footer";
import GlobalStyle, {
  ContentWrapper,
  AppWrapperDiv
} from "../containers/Custom/Custom.style";

import SEO from "../components/seo";
import Container from "common/src/components/UI/Container";

import { graphql } from "gatsby";

export default ({ data }) => {
  const teamData = data.allWordpressWpMedia.edges;
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="title" description="description" />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapperDiv>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Container fullWidth="true" noGutter="true">
              <Banner heading="About Us" />
            </Container>
            <Container>
              <Team team={teamData} />
            </Container>
          </ContentWrapper>
          <Footer />
        </AppWrapperDiv>
      </>
    </ThemeProvider>
  );
};

export const query = graphql`
  {
    allWordpressWpMedia(
      filter: { post: { eq: 167 } }
      sort: { order: ASC, fields: title }
    ) {
      edges {
        node {
          id
          type
          title
          source_url
          post
          media_type
          path
          alt_text
          caption
          localFile {
            publicURL
            relativePath
            relativeDirectory
            url
            childImageSharp {
              resolutions(width: 373, height: 450) {
                ...GatsbyImageSharpResolutions
              }
            }
          }
        }
      }
    }
  }
`;
