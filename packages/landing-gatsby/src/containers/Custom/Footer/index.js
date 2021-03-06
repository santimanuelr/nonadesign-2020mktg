import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Text from 'reusecore/src/elements/Text';
import Logo from 'reusecore/src/elements/UI/Logo';
import Heading from 'reusecore/src/elements/Heading';
import Container from 'common/src/components/UI/Container';
import FooterArea, {
  MenuArea,
  Menu,
  MenuItem,
  CopyrightText,
} from './footer.style';

const Footer = () => {
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
		  <Heading as="h1" content="Let's Clay" />
		  <Text content="hey@clay.global" />
          <Menu>
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
              <MenuItem key={`footer-link${item.wordpress_id}`}>
                <a href={item.url}>{item.title}</a>
              </MenuItem>
            ))}
          </Menu>
          <CopyrightText>Copyright 2020 by 2020mktg</CopyrightText>
        </MenuArea>
        {/* End of footer menu area */}
      </Container>
    </FooterArea>
  );
};

export default Footer;
