import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Image from 'reusecore/src/elements/Image';
import Logo from 'reusecore/src/elements/UI/Logo';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import FooterArea, {
  WidgetArea,
  MenuArea,
  Menu,
  MenuItem,
  CopyrightText,
} from './footer.style';

const Footer = ({inputdata}) => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        footer {
          logo {
            publicURL
          }
        }
      }
      wordpressWpApiMenusMenusItems(name: { eq: "Slide Menu" }) {
        items {
          wordpress_id
          title
          url
        }
      }
    }
  `);
  const { logo } = data.appClassicJson.footer;

  return (
    <FooterArea>
      <Container>
        <MenuArea>
          <Logo
            className="logo"
            href="/appclassic"
            logoSrc={logo.publicURL}
            title="App Classic"
          />
		  <Heading as="h1" content={inputdata.footer_title} />
		  <Text content={inputdata.footer_email} />
          <Menu>
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <MenuItem key={`footer-link${item.wordpress_id}`}>
                <a href={item.url}>{item.title}</a>
              </MenuItem>
            ))}
          </Menu>
          <CopyrightText>{inputdata.copyright_text}</CopyrightText>
        </MenuArea>
        {/* End of footer menu area */}
      </Container>
    </FooterArea>
  );
};

export default Footer;
