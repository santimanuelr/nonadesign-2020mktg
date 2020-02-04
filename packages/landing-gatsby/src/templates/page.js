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
  PageSectionImage,
} from '../containers/Custom/PageSection/pagesection.style';

import { graphql } from "gatsby"

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

        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <PageSectionWrapper id="home">
              <Container>
                <PageSectionContent>
                  <h1>{data.wordpressPage.title}</h1>
                  <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }} />
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
    wordpressPage(wordpress_id: { eq: $id }) {
      title
      excerpt
      content
    }
  }
`
