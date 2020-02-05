import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Button from 'reusecore/src/elements/Button';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  BannerImage,
} from './banner.style';

const Banner = ({heading, subheading}) => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
        <Fade up delay={100}>
            <Heading as="h1"
              content={heading}
            />
          </Fade>
          <Fade up delay={150}>
            <Heading as="h2"
              content={subheading}
            />
          </Fade>
        </BannerContent>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
