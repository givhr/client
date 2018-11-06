import React, { Component } from 'react'
import logo from '../../images/givhr_logo.png'
import styled from 'styled-components'

export const Logo = () => <Image src={logo} />

const Image = styled.img`
  width: 140px;
`

/* <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "givhr_logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  /> */
