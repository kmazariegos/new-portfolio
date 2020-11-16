import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import logo from './Images/logo.png'

const Styles = styled.div`
  .navbar {
    font-family: 'Montserrat', sans-serif;
    background: white;
    height: 80px;
    font-size: .9rem;
    /* position: sticky; */
    top: 0;
    z-index: 999;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: black;
    margin-top: 25px;
    font-weight: 2px;
    font-size: .9rem;
    height: 80px;
    border-bottom: solid transparent;
    &:hover {
    background-color: none;
    color: #3a7ef2;
    }
    @media screen and (max-width: 960px) {
    position: fixed;
    display: inline-block;
    top: 0; 
    &:hover {
        border: none;
        background-color: none;
      } 
    }
  }
`;

const LogoStyle = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 25px;
    margin-top: 25px;

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`

export const Navigation = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">
      </Navbar.Brand>
      <LogoStyle className="App-logo" src={logo} alt="logo"></LogoStyle>
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/About">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Resume">Resume</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/Portfolio">Portfolio</Nav.Link>
          </Nav.Item>
        </Nav>
    </Navbar>
  </Styles>
)