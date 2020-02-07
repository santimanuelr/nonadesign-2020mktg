import React from 'react';
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
