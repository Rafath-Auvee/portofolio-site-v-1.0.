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
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Rafath Auvee</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects">Projects</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Achievement</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">Contact</NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn>
            <NavBtnLink to="/Resume">Resume</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
