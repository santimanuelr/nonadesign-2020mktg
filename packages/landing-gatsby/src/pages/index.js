import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/src/theme/appclassic';
import { ResetCSS } from 'common/src/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from '../containers/AppClassic/Navbar';
import Banner from '../containers/Custom/Banner';
import About from '../containers/Custom/About';
import Teaser from '../containers/Custom/Teaser';
import Customer from '../containers/AppClassic/Customer';
import KeyFeatures from '../containers/AppClassic/KeyFeatures';
import AppSlider from '../containers/AppClassic/AppSlider';
import Features from '../containers/AppClassic/Features';
import DesignedAndBuilt from '../containers/AppClassic/DesignedAndBuilt';
import FeatureTab from '../containers/AppClassic/FeatureTab';
import PricingPolicy from '../containers/AppClassic/PricingPolicy';
import Testimonial from '../containers/AppClassic/Testimonial';
import Faq from '../containers/AppClassic/Faq';
import JoinTrail from '../containers/AppClassic/JoinTrail';
import Footer from '../containers/AppClassic/Footer';
import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from '../containers/AppClassic/appClassic.style';

import SEO from '../components/seo';

import { graphql } from "gatsby";

export default function ({data}) {
  const page  = data.wordpressPage;

  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO title="App Classic" />
        <ResetCSS />
        <GlobalStyle />

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner inputdata={page.acf} />
            <About inputdata={page.acf} />
            <Teaser inputdata={page.acf} />
            <Customer />
            <KeyFeatures />
            <AppSlider />
            <Features />
            <DesignedAndBuilt />
            <FeatureTab />
            <PricingPolicy />
            <Testimonial />
            <Faq />
            <JoinTrail />
          </ContentWrapper>
          <Footer />
        </AppWrapper>
      </>
    </ThemeProvider>
  );
}

export const query = graphql`
  query homePageQuery {
    wordpressPage(slug: {eq: "gatsby-homepage"}) {
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
        teaser_footer
        teaser_header
        teaser_image {
          localFile {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        teaser_subtitle
        teaser_title
      }
    }
  }
`
