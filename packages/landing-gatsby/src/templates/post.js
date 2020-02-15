import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "common/src/theme/appclassic";
import { ResetCSS } from "common/src/assets/css/style";
import Sticky from "react-stickynode";
import Navbar from "../containers/Custom/Navbar";
import Footer from "../containers/Custom/Footer";
import GlobalStyle, { ContentWrapper } from "../containers/Custom/Custom.style";

import SEO from "../components/seo";
import Container from "common/src/components/UI/Container";

import { graphql } from "gatsby";
import Img from "gatsby-image";
import AppWrapper from "../containers/Custom/AppWrapper";

export default ({ data }) => {
  const imgStyle = {
    height: "450px",
    opacity: "0.2"
  };
  const titleStyle = {
    width: "100%",
    textAlign: "center",
    position: "absolute",
    top: "30%",
    fontSize: "42px"
  };
  const dateStyle = {
    fontWeight: "bold",
    fontSize: "14px"
  };
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
          title={data.wordpressPost.title}
          description={data.wordpressPost.excerpt}
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
            <Img
              fluid={
                data.wordpressPost.featured_media.localFile.childImageSharp
                  .fluid
              }
              object-fit="cover"
              objectPosition="50% 50%"
              alt={data.wordpressPost.title}
              style={imgStyle}
            />
            <h1
              style={titleStyle}
              dangerouslySetInnerHTML={{ __html: data.wordpressPost.title }}
            />
            <Container>
              <p style={dateStyle}>{data.wordpressPost.date}</p>
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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
