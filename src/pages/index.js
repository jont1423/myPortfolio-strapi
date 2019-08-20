import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

import BackgroundSection from "../components/globals/backgroundSetion.js"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      backgroundImage={data.backgroundImage.childImageSharp.fluid}
    />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    backgroundImage: file(relativePath: { eq: "background-image-home.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
