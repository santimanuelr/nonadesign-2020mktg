import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Icon } from 'react-icons-kit';
import { plusCircled } from 'react-icons-kit/ionicons/plusCircled';
import { minusCircled } from 'react-icons-kit/ionicons/minusCircled';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/src/components/Accordion';
import { SectionHeader } from '../Custom.style';
import FaqSection from './faq.style';

const Faq = ({inputdata}) => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressWpFaq {
        edges {
          node {
            wordpress_id
            title
            content
          }
        }
      }
    }
  `);

  const FAQs = data.allWordpressWpFaq.edges;

  return (
    <FaqSection id="faq">
      <Container>
        <SectionHeader>
          <Heading as="h5" content={inputdata.faq_section_subtitle} />
          <Heading content={inputdata.faq_section_title} />
        </SectionHeader>
        <Accordion>
          <Fragment>
            {FAQs.map(item => (
              <AccordionItem key={`accordion-key--${item.node.wordpress_id}`}>
                <Fragment>
                  <AccordionTitle>
                    <Fragment>
                      <Heading as="h3" dangerouslySetInnerHTML={{ __html: item.node.title }} />
                      <IconWrapper className="icon-wrapper">
                        <OpenIcon>
                          <Icon icon={minusCircled} size={18} />
                        </OpenIcon>
                        <CloseIcon>
                          <Icon icon={plusCircled} size={18} />
                        </CloseIcon>
                      </IconWrapper>
                    </Fragment>
                  </AccordionTitle>
                  <AccordionBody>
                    <Text dangerouslySetInnerHTML={{ __html: item.node.content }} />
                  </AccordionBody>
                </Fragment>
              </AccordionItem>
            ))}
          </Fragment>
        </Accordion>
      </Container>
    </FaqSection>
  );
};

export default Faq;
