import React from "react"
import { Link } from "gatsby"
import { SocialIcon } from "react-social-icons"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  & > a {
    box-shadow: none;
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(0.75),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          <Wrapper>
            <SocialIcon url="mailto:puntnomads@gmail.com" />
            <SocialIcon
              url="https://github.com/puntnomads"
              bgColor="#000000"
              target="_blank"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/zakariyamoallin"
              target="_blank"
            />
          </Wrapper>
        </footer>
      </div>
    )
  }
}

export default Layout
