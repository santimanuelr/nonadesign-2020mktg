import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <h1>Posts</h1>
    {data.allWordpressPost.edges.map(({ node }) => (
      <div>
        <Link to={node.slug}>
          <h2>{node.title}</h2>
        </Link>
        <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
  `
