import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

const Navbar = styled.nav``;

const MyRow = styled(Row)``;
const NavigationBar = () => {
  return (
    <>
      <Navbar>
        <Col xs={12}>
          <Row>
            <Col xs>
              <NavLink exact to="/">
                {" "}
                Marisa Vukas
              </NavLink>
            </Col>

            <Col xs={6} sm={6} md={4}>
              <Row end="xs">
                <Col xs>
                  <NavLink to="about-me">About Me</NavLink>{" "}
                </Col>
                <Col xs>
                  <NavLink to="projects">Projects</NavLink>
                </Col>{" "}
              </Row>
            </Col>
          </Row>{" "}
        </Col>
      </Navbar>
    </>
  );
};

export default NavigationBar;
