import React from 'react'
import {LinkContainer, IndexLinkContainer} from 'react-router-bootstrap'
import {Navbar,Nav,NavItem,Glyphicon,InputGroup,FormGroup, FormControl} from 'react-bootstrap'

const Header = () => (
  <div>    
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <IndexLinkContainer to="/">
            <NavItem>Home</NavItem>
          </IndexLinkContainer>
          <LinkContainer to="/about">
            <NavItem>About</NavItem>
          </LinkContainer>
          <LinkContainer to="/contact">
            <NavItem>Contact</NavItem>
          </LinkContainer>
          <LinkContainer to="/info">
            <NavItem>Q&A</NavItem>
          </LinkContainer>
          <LinkContainer to="/gallery">
            <NavItem>Gallery</NavItem>
          </LinkContainer>
        </Nav>
          
          <Nav pullRight>
            <Navbar.Form className="right-nav">
            <FormGroup>
              <InputGroup>
                <InputGroup.Addon><Glyphicon glyph="search" /></InputGroup.Addon>
                <FormControl type="text" style={{width:'125px'}} placeholder="Search..." />
              </InputGroup>
            </FormGroup>
            </Navbar.Form>
          </Nav>

      </Navbar.Collapse>
    </Navbar>
  </div>
)
export default Header;