import React from 'react';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './teaser.style';

const Teaser = ({image, content}) => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="image">
            <Image src={image.localFile.childImageSharp.fluid.src} alt="" />
          </div>
          <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Teaser;
