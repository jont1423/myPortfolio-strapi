import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Icon from "/Users/jonathanthomann/Documents/Development/Projects/Personal/mportfolio/portfolio/src/images/small_planet.svg"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Icon />
    <ul>
      {data.allStrapiHomepageproject.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <p>{document.node.description}</p>
          <Img fixed={document.node.projectimage.childImageSharp.fixed}/>
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
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
