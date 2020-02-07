import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import SectionWrapper, { ContentWrapper } from './blogcard.style';

const BlogCard = ({ slug, title, text, date, image }) => {
  
  return (
    <SectionWrapper>
        <ContentWrapper>
          <div className="image">
            <Fade left>
                <Image src={image} alt="Built Logo" />
            </Fade>
          </div>
          <div className="content">
            <Fade right>
                <Link to={`/post/${slug}`}>
                  <Heading dangerouslySetInnerHTML={{ __html: title }} />
                </Link>
                <Heading as="h5" content={date} />
               <div dangerouslySetInnerHTML={{ __html: text }} />
            </Fade>
          </div>
        </ContentWrapper>
    </SectionWrapper>
  );
};

export default BlogCard;