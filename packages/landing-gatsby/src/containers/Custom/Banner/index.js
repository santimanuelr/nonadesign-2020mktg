import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from 'reusecore/src/elements/Heading';
import BannerWrapper, {
  BannerContent,
} from './banner.style';

const Banner = ({heading, subheading}) => {
  return (
    <BannerWrapper id="home">
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
    </BannerWrapper>
  );
};

export default Banner;
