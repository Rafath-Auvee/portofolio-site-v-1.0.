import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Rafath Auvee</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <NavBtn>
            <NavMenu>
              <NavItem>
                <NavLinks to="/about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/projects">Projects</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/achievement">Achievement</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/contact">Contact</NavLinks>
              </NavItem>
              <NavBtnLink to="/resume">Resume</NavBtnLink>
            </NavMenu>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
