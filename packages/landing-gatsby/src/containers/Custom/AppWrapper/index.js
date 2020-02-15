import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";

import { AppWrapperDiv } from "../Custom.style";
import { OtherMenu } from "../Navbar/navbar.style";
import OtherMenuSpy from "common/src/components/OtherMenu";

//class AppWrapper extends React.Component {
export default function({ children, openMenuParam }) {
  const data = useStaticQuery(graphql`
    query query {
      wordpressWpApiMenusMenusItems(name: { eq: "Slide Menu" }) {
        items {
          title
          url
        }
      }
    }
  `);
  let navMenuData = [];
  if (data) {
    for (var i = 0; i < data.wordpressWpApiMenusMenusItems.items.length; i++) {
      navMenuData[navMenuData.length] = {
        id: i + 1,
        label: data.wordpressWpApiMenusMenusItems.items[i].title,
        path: data.wordpressWpApiMenusMenusItems.items[i].url,
        offset: "84",
        staticLink: true
      };
    }
  }

  return (
    <AppWrapperDiv>
      <OtherMenu
        style={{ width: openMenuParam ? "100%" : "0%" }}
        className={"overlay"}
        // onClickCapture={() => this.toggleHandler("menu")}
        // onClick={() => this.toggleHandler("menu")}
      >
        <OtherMenuSpy
          className="overlay-content"
          menuItems={navMenuData}
          offset={-84}
        />
      </OtherMenu>
      {children}
    </AppWrapperDiv>
  );
}

// AppWrapper.propTypes = {
//   /** className of the AppWrapper. */
//   className: PropTypes.string,

//   /** Class name that apply to the navigation element paired with the content element in viewport. */
//   currentClassName: PropTypes.string,

//   /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
//   scrolledPastClassName: PropTypes.string,

//   /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
//   componentTag: PropTypes.string,

//   /** Style attribute to be passed to the generated <ul/> element [optional]. */
//   style: PropTypes.object,

//   /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
//   offset: PropTypes.number,

//   /** Name of the element of scrollable container that can be used with querySelector [optional]. */
//   rootEl: PropTypes.string,

//   data: PropTypes.object.isRequired,

//   /**
//    * Function to be executed when the active item has been updated [optional].
//    */
//   onUpdate: PropTypes.func
// };

// AppWrapper.defaultProps = {
//   componentTag: "ul",
//   currentClassName: "is-current"
// };

//export default AppWrapper;
