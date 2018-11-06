import React, { Component } from 'react'
import styled from 'styled-components'
import { Logo } from '../Logo/Logo'
export const Nav = props => (
  <NavContainer>
    <Logo />
  </NavContainer>
)

const NavContainer = styled.nav`
  font-family: Helvetica;
  height: 10vh;
  background: white;
  display: flex;
  align-items: center;
`
// proper purple: rgb(107, 79, 131);
