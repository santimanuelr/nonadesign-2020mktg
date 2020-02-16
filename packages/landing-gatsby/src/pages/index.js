import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "common/src/theme/appclassic";
import { ResetCSS } from "common/src/assets/css/style";
import Sticky from "react-stickynode";
import Navbar from "../containers/Custom/Navbar";
import HomeBanner from "../containers/Custom/HomeBanner";
import About from "../containers/Custom/About";
import Teaser from "../containers/Custom/Teaser";
import Wysiwyg from "../containers/Custom/Wysiwyg";
import Faq from "../containers/Custom/Faq";
import Footer from "../containers/Custom/Footer";
import GlobalStyle, {
  ContentWrapper,
  AppWrapperDiv
} from "../containers/Custom/Custom.style";

import SEO from "../components/seo";

import { graphql } from "gatsby";

export default function({ data, openMenu }) {
  const page = data.wordpressPage;

  const { logo } = data.appClassicJson.navbar;

  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="2020mktg" />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapperDiv>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <HomeBanner inputdata={page.acf} />
            <About inputdata={page.acf} />
            <Teaser
              image={page.acf.teaser_image_1}
              content={page.acf.teaser_content_1}
            />
            <Teaser
              image={page.acf.teaser_image_2}
              content={page.acf.teaser_content_2}
            />
            <Wysiwyg content={page.acf.full_wysisyg_section_1} />
            <Wysiwyg content={page.acf.full_wysisyg_section_2} />
            <Faq inputdata={page.acf} />
          </ContentWrapper>
          <Footer />
        </AppWrapperDiv>
      </>
    </ThemeProvider>
  );
}

export const query = graphql`
  query homePageQuery {
    wordpressPage(slug: { eq: "gatsby-homepage" }) {
      slug
      title
      acf {
        about_heading
        about_link_title
        about_parameter1_name
        about_parameter1_value
        about_parameter2_name
        about_parameter2_value
        banner_subtitle
        banner_title
        teaser_image_1 {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        teaser_content_1
        teaser_image_2 {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        teaser_content_2
        full_wysisyg_section_1
        full_wysisyg_section_2
        full_wysisyg_section_3
        faq_section_title
        faq_section_subtitle
        footer_title
        footer_email
        copyright_text
      }
    }
    appClassicJson {
      navbar {
        logo {
          publicURL
        }
      }
    }
  }
`;
