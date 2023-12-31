import React from "react";
import { Link } from "react-router-dom";
import { Nav, Container, NavCon, Logo, Menu } from "../styles/style";

function Navbar() {
  return (
    <Nav>
      <Container>
        <NavCon>
          <div>
            <Logo to="/">Atithiya I.</Logo>
          </div>
          <Menu>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </Menu>
        </NavCon>
      </Container>
    </Nav>
  );
}

export default Navbar;
