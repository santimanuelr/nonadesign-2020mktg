import React, { useState, useRef } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Fade from "react-reveal/Fade";
import ScrollSpyMenu from "common/src/components/ScrollSpyMenu";
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import Logo from "reusecore/src/elements/UI/Logo";
import Button from "reusecore/src/elements/Button";
import Container from "common/src/components/UI/Container";
import useOnClickOutside from "common/src/hooks/useOnClickOutside";
import NavbarWrapper, {
  MenuArea,
  MobileMenu,
  Menu2,
  MenuClose
} from "./navbar.style";
import OtherMenuSpy from "common/src/components/OtherMenu";
import AppWrapper from "../AppWrapper";

const Navbar = ({ showMenu, openMenu }) => {
  const data = useStaticQuery(graphql`
    query {
      appClassicJson {
        navbar {
          logo {
            publicURL
          }
        }
      }
      wordpressWpApiMenusMenusItems(name: { eq: "Slide Menu" }) {
        items {
          title
          url
        }
      }
    }
  `);
  const { logo } = data.appClassicJson.navbar;

  let navMenuData = [];
  for (var i = 0; i < data.wordpressWpApiMenusMenusItems.items.length; i++) {
    navMenuData[navMenuData.length] = {
      id: i + 1,
      label: data.wordpressWpApiMenusMenusItems.items[i].title,
      path: data.wordpressWpApiMenusMenusItems.items[i].url,
      offset: "84",
      staticLink: true
    };
  }

  const [state, setState] = useState({
    mobileMenu: false,
    openMenu: false
  });

  const searchRef = useRef(null);
  useOnClickOutside(searchRef, () =>
    setState({ ...state, searchToggle: false })
  );

  const toggleHandler = type => {
    if (type === "search") {
      setState({
        ...state,
        search: "",
        searchToggle: !state.searchToggle,
        mobileMenu: false
      });
    }
    console.log("Please fill this field.");
    if (type === "menu") {
      setState({
        ...state,
        mobileMenu: !state.mobileMenu,
        openMenu: !state.openMenu
      });
    }
  };

  // const handleOnChange = event => {
  //   setState({
  //     ...state,
  //     search: event.target.value
  //   });
  // };

  // const handleSearchForm = event => {
  //   event.preventDefault();

  //   if (state.search !== "") {
  //     console.log("search data: ", state.search);

  //     setState({
  //       ...state,
  //       search: ""
  //     });
  //   } else {
  //     console.log("Please fill this field.");
  //   }
  // };

  return (
    <NavbarWrapper className="navbar">
      <Container>
        <Logo
          className="logo"
          href="/"
          logoSrc={logo.publicURL}
          title="App Classic"
        />
        {/* end of logo */}

        <MenuArea className={state.searchToggle ? "active" : ""}>
          {/* <ScrollSpyMenu
            className="menu"
            menuItems={navMenuData}
            offset={-84}
          /> */}
          {/* end of main menu */}
          {state.openMenu ? (
            <MenuClose className="search" onClick={() => toggleHandler("menu")}>
              &times;
            </MenuClose>
          ) : (
            <Menu2 className="search" onClick={() => toggleHandler("menu")}>
              &#9776;
            </Menu2>
          )}
          {/* <Search className="search" ref={searchRef}>
            <form onSubmit={handleSearchForm}>
              <input
                type="text"
                value={state.search}
                placeholder="Enter your keyword"
                onChange={handleOnChange}
              />
            </form>
            <Button
              className="text"
              variant="textButton"
              icon={<Icon icon={state.searchToggle ? x : search} />}
              onClick={() => toggleHandler("search")}
            />
          </Search> */}
          {/* end of search */}

          {/* <AnchorLink href="#trail" offset={84}>
            <Button className="trail" title="Try for Free" />
          </AnchorLink> */}

          <Button
            className="menubar"
            icon={
              state.mobileMenu ? (
                <Icon className="bar" icon={x} />
              ) : (
                <Fade>
                  <Icon className="close" icon={menu} />
                </Fade>
              )
            }
            color="#0F2137"
            variant="textButton"
            onClick={() => toggleHandler("menu")}
          />
        </MenuArea>
      </Container>

      <AppWrapper openMenuParam={state.openMenu}></AppWrapper>

      {/* start mobile menu */}
      <MobileMenu className={`mobile-menu ${state.mobileMenu ? "active" : ""}`}>
        <Container>
          <ScrollSpyMenu
            className="menu"
            menuItems={navMenuData}
            offset={-84}
          />
          {/* <Button title="Try for Free" /> */}
        </Container>
      </MobileMenu>
      {/* end of mobile menu */}
    </NavbarWrapper>
  );
};

export default Navbar;
