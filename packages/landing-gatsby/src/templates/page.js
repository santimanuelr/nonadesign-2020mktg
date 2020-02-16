import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "common/src/theme/appclassic";
import { ResetCSS } from "common/src/assets/css/style";
import Sticky from "react-stickynode";
import Navbar from "../containers/Custom/Navbar";
import Banner from "../containers/Custom/Banner";
import Footer from "../containers/Custom/Footer";
import GlobalStyle, {
  ContentWrapper,
  AppWrapperDiv
} from "../containers/Custom/Custom.style";

import SEO from "../components/seo";
import Container from "common/src/components/UI/Container";

import { graphql } from "gatsby";

export default ({ data }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO
          title={data.wordpressPage.title}
          description={data.wordpressPage.excerpt}
        />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapperDiv>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
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
        </AppWrapperDiv>
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
