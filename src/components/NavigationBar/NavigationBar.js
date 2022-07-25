import React, { useState } from "react";
import "./NavigationBar.css";

import {
  Navbar,
  Container,
  Nav,
  Image,
  spacer,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    if (expanded) {
      setExpanded(expanded ? !false : "expanded");
    } else {
      setExpanded(false);
    }
    setExpanded(!expanded);
  };
  return (
    <header className="App-header">
      <Navbar
        bg="dark"
        variant="dark"
        outline="light"
        expand="lg"
        expanded={expanded}
        className="py-4 m-auto"
      >
        <Container className=" d-flex flex-row justify-content-start align-items-start w-100 p-0 px-5 mx-0 h-100">
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="p-0 m-0"
            onClick={handleToggle}
            isRunning={expanded}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link href="#home" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" onClick={() => setExpanded(false)}>
                About
              </Nav.Link>
              <Nav.Link href="#projects" onClick={() => setExpanded(false)}>
                Projects
              </Nav.Link>
              <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default NavigationBar;
