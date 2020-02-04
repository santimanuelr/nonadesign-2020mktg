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
} from './homebanner.style';

const Banner = ({inputdata}) => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading as="h1"
              content={inputdata.banner_title}
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content={inputdata.banner_subtitle}
            />
          </Fade>
        </BannerContent>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
