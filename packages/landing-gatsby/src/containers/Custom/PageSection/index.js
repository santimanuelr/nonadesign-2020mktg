import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Button from 'reusecore/src/elements/Button';
import Heading from 'reusecore/src/elements/Heading';
import Rating from 'common/src/components/Rating';
import Container from 'common/src/components/UI/Container';
import PageSectionWrapper, {
  PageSectionContent,
  PageSectionImage,
} from './pagesection.style';

import microsoft from 'common/src/assets/image/appClassic/microsoft.svg';
import bannerImg from 'common/src/assets/image/appClassic/bannerImg.png';

const PageSection = () => {
  return (
    <PageSectionWrapper id="home">
      <Container>
        <PageSectionContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="The Revolution of
      Ultimate Platform to 
      monitor your task"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore magna
      ipsum dolor sit amet consectetur."
            />
          </Fade>
        </PageSectionContent>
        <PageSectionImage>
          <Fade up delay={100}>
            <Image src={bannerImg} alt="Banner" />
          </Fade>
        </PageSectionImage>
      </Container>
    </PageSectionWrapper>
  );
};

export default PageSection;
