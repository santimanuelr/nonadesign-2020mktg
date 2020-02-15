import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "common/src/theme/appclassic";
import { ResetCSS } from "common/src/assets/css/style";
import Sticky from "react-stickynode";
import Navbar from "../containers/Custom/Navbar";
import Banner from "../containers/Custom/Banner";
import ServiceItems from "../containers/Custom/ServiceItems";
import Footer from "../containers/Custom/Footer";
import AppWrapper from "../containers/Custom/AppWrapper";
import GlobalStyle, { ContentWrapper } from "../containers/Custom/Custom.style";

import SEO from "../components/seo";
import Container from "common/src/components/UI/Container";

import { graphql } from "gatsby";

export default ({ data }) => {
  const teamData = data.allWordpressWpMedia.edges;
  const [state, setState] = useState({
    mobileMenu: false,
    openMenu: false
  });

  const toggleHandlerAux = type => {
    if (type === "search") {
      setState({
        ...state,
        mobileMenu: false
      });
    }
    console.log("Please fill this field.");
    if (type === "menu") {
      // setState({
      //   ...state,
      //   mobileMenu: !state.mobileMenu
      // });
      setState({
        ...state,
        openMenu: !state.openMenu
      });
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="title" description="description" />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapper openMenuParam={state.openMenu}>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar
              showMenu={() => toggleHandlerAux("menu")}
              openMenu={state.openMenu}
            />
          </Sticky>
          <ContentWrapper>
            <Container fullWidth="true" noGutter="true">
              <Banner
                heading="Services"
                subheading="Strategize. Design. Execute."
              />
            </Container>
            <Container>
              <ServiceItems items={teamData} />
            </Container>
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
};

export const query = graphql`
  {
    allWordpressWpMedia(
      filter: { post: { eq: 99 } }
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
              resolutions(width: 74, height: 65) {
                ...GatsbyImageSharpResolutions
              }
            }
          }
        }
      }
    }
  }
`;
