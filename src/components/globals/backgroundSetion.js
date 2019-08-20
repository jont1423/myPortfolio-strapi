import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import TextLoop from "react-text-loop"
import BackgroundImage from "gatsby-background-image"

import "./backgroundSection.css"

const BackgroundSection = ({ className, styleClass }) => (
  <StaticQuery
    query={graphql`
      query {
        backgroundImage: file(
          relativePath: { eq: "background-image-home.jpg" }
        ) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.backgroundImage.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <div className="wrapperDiv">
            <div>Hi, I'm Jon!</div>
            <TextLoop
              springConfig={{ stiffness: 180, damping: 8 }}
              adjustingSpeed={500}
            >
              <div>Full-stack Web Developer</div>
              <div>UI/UX Designer</div>
              <div>ReactJs</div>
            </TextLoop>
          </div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default StyledBackgroundSection
