import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const Header = () => (
    <StaticQuery
        query={graphql`
      query {
        wordpressSiteMetadata {
          name
        }
        wordpressWpApiMenusMenusItems(name: { eq: "Slide Menu" }) {
          items {
            title
            url
          }
        }
      }
    `}
        render={data => (
            <header style={{ background: `rebeccapurple`, marginBottom: `1.45rem`, }} >
                <div style={{ margin: `0 auto`, maxWidth: 960, padding: `1.45rem 1.0875rem`, display: `flex`, justifyContent: `space-between`, alignItems: `center`, }} >
                    <h1 style={{ margin: 0 }}>
                        <Link to="/" style={{ color: `white`, textDecoration: `none`, }} >
                            {data.wordpressSiteMetadata.name}
                        </Link>
                    </h1>
                    <ul className="scrollspy__menu main_menu menuLeft" style={{ listStyle: `none`, display: `flex`, margin: 0 }}>
                        {data.wordpressWpApiMenusMenusItems.items.map(item => (
                            <li key={item.url} style={{ margin: `0 10px` }}>
                                <Link to={`/${item.url}`} style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} >
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>

                </div>
            </header>
        )}
    />
)
export default Header