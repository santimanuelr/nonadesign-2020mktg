import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import Image from 'reusecore/src/elements/Image';
import Heading from 'reusecore/src/elements/Heading';
import Text from 'reusecore/src/elements/Text';
import SectionWrapper, {
  Container,
  ImageWrapper,
  TextWrapper,
} from './blogcard.style';

const BlogCard = ({ slug, title, text, date, image }) => {
  const setHTML = title => {
    return { __html: title };
  };
  return (
    <SectionWrapper id="blog">
      <Container>
        <ImageWrapper>
          <Fade left>
            <Image src={image}
              alt={title}
              className="carousel_img"
            />
          </Fade>
        </ImageWrapper>
        <TextWrapper>
          <Fade right>
            <Link to={`/post/${slug}`}>
              <Heading dangerouslySetInnerHTML={setHTML(title)} />
            </Link>
            <Text content={date} />
            <Text dangerouslySetInnerHTML={{ __html: `<div> ${text} </div>` }} />
          </Fade>
        </TextWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default BlogCard;
