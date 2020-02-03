import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import Container from 'common/src/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './wysiwyg.style';

const Wysiwyg = ({content}) => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="content" dangerouslySetInnerHTML={{ __html: content }} />
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default Wysiwyg;
