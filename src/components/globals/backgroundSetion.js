import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className, styleClass }) => (
    <StaticQuery query={graphql`
      query {
        backgroundImage: file(relativePath: { eq: "background-image-home.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
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
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
                           backgroundColor={`#040e18`}
          >
          </BackgroundImage>
       )
     }
     }
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
