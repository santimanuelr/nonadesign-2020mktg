import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './teaser.style';

const Teaser = ({inputdata}) => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image src={inputdata.teaser_image.localFile.childImageSharp.fluid.src} alt="" />
          </div>
          <div className="content">
            <Heading as="h1" content={inputdata.teaser_header} />
            <br/>
            <br/>
            <Text content={inputdata.teaser_title} />
            <br/>
            <br/>
            <Text content={inputdata.teaser_subtitle} />
            <br/>
            <Heading as="h5" content={inputdata.teaser_footer} />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Teaser;
