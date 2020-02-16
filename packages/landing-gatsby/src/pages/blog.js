import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "common/src/theme/appclassic";
import { ResetCSS } from "common/src/assets/css/style";
import Sticky from "react-stickynode";
import Navbar from "../containers/Custom/Navbar";
import Banner from "../containers/Custom/Banner";
import BlogCard from "../containers/Custom/BlogCard";
import Footer from "../containers/Custom/Footer";
import GlobalStyle, {
  ContentWrapper,
  AppWrapperDiv
} from "../containers/Custom/Custom.style";

import SEO from "../components/seo";
import Container from "common/src/components/UI/Container";

import { graphql } from "gatsby";

export default ({ data }) => {
  const posts = data.allWordpressPost.edges;

  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO
          title="Blog"
          description="A technology, design, and marketing blog."
        />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapperDiv>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Container fullWidth="true" noGutter="true">
              <Banner
                heading="Blog"
                subheading="A technology, design, and marketing blog."
              />
            </Container>
            <Container>
              {posts.map(item => (
                <div key={`blog-post-${item.node.wordpress_id}`}>
                  <BlogCard
                    slug={item.node.slug}
                    title={item.node.title}
                    text={item.node.excerpt}
                    date={item.node.date}
                    image={
                      item.node.featured_media.localFile.childImageSharp.fluid
                        .src
                    }
                  />
                </div>
              ))}
            </Container>
          </ContentWrapper>
          <Footer />
        </AppWrapperDiv>
      </>
    </ThemeProvider>
  );
};

export const query = graphql`
  query blogQuery {
    allWordpressPost {
      edges {
        node {
          wordpress_id
          slug
          title
          featured_media {
            localFile {
              childImageSharp {
                fluid(maxWidth: 416) {
                  src
                }
              }
            }
          }
          date(formatString: "MMMM DD, YYYY")
          excerpt
        }
      }
    }
  }
`;
