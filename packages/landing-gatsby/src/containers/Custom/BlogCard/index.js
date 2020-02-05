import React from 'react';
import Card from 'reusecore/src/elements/Card';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';

import DemoImage from 'reusecore/src/elements/Image/images.png';

const BlogCard = ({ heading, subheading }) => {
  return (
    <Container>
      <Card>
        <Image src={DemoImage} alt="Demo Image" />
        <Heading as="h2" content="BlogTitle" />
        <Heading as="h4" content="January 19, 2020" />
        <Text content="Nam risus lorem, consectetur vel placerat vitae, ultrices non odio. Pellentesque faucibus turpis nec risus mollis, ut blandit felis maximus. […]" />
      </Card>
    </Container>
  );
};

export default BlogCard;
