import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  margin-bottom: 46px;
  padding: 0 30px;
  box-sizing: border-box;
  background-color: black;
  color: white;
  font-family: sans-serif;
`

const Header = ({ siteTitle }) => (
  <Container>
    <Link
      to="/cf-agent"
      style={{
        color: 'white',
        textDecoration: 'none',
        textTransform: 'uppercase'
      }}
    >
      CF Agent
    </Link>
  </Container>
)

export default Header
