import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div style={{margin: `3rem auto`, maxWidth: 600}}>
      Page Content
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql `
query MyQuery {
  allStrapiHomepageproject {
    edges {
      node {
        title
        description
        projectimage {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
}
`
