import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Button from 'reusecore/src/elements/Button';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import AboutWrapper, {
  AboutContentLeft,
  AboutContentRight,
} from './about.style';

const About = ({inputdata}) => {
  return (
    <AboutWrapper id="home">
      <Container>
        <AboutContentLeft>
          <Fade up delay={100}>
            <Heading
              as="h2"
              content={inputdata.about_heading}
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content={inputdata.about_link_title}
            />
          </Fade>
        </AboutContentLeft>
        <AboutContentRight>
        <Fade up delay={100}>
          <Heading as="h1" content={inputdata.about_parameter1_value} />
          <Text content={inputdata.about_parameter1_name} />
          </Fade>
          <br/>
          <Fade up delay={200}>
          <Heading as="h1" content={inputdata.about_parameter2_value} />
          <Text content={inputdata.about_parameter2_name} />
          </Fade>
        </AboutContentRight>
      </Container>
    </AboutWrapper>
  );
};

export default About;
