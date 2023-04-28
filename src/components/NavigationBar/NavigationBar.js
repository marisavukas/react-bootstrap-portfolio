import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar sticky="top">
      <Container>
        {" "}
        <Navbar.Brand>
          <Nav.Link href="/"> Marisa Vukas</Nav.Link>
        </Navbar.Brand>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link href="/about-me">About Me</Nav.Link>

          <Nav.Link hrefLang=""="/projects">Projects</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
