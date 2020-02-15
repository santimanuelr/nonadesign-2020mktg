import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "common/src/theme/appclassic";
import { ResetCSS } from "common/src/assets/css/style";
import Sticky from "react-stickynode";
import Navbar from "../containers/Custom/Navbar";
import Banner from "../containers/Custom/Banner";
import Footer from "../containers/Custom/Footer";
import GlobalStyle, { ContentWrapper } from "../containers/Custom/Custom.style";

import SEO from "../components/seo";
import Container from "common/src/components/UI/Container";

import { graphql } from "gatsby";
import AppWrapper from "../containers/Custom/AppWrapper";

export default ({ data }) => {
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
        <SEO
          title={data.wordpressPage.title}
          description={data.wordpressPage.excerpt}
        />
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
              <Banner heading={data.wordpressPage.title} />
            </Container>
            <Container>
              <div
                dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}
              />
            </Container>
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
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
`;
