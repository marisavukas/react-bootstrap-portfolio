import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

const SiteName = styled(NavLink)`
  text-align: left;
`;

const StyledNav = styled(NavLink)`
  text-align: right;
  margin-left:15px;

`;

const StyledContainer = styled(Container)`
  padding: 15px 0;
`;
const StyledRow = styled(Row)`
  margin-left: 0 !important;
  margin-right: 0 !important;
`;

const NavigationBar = () => {
  return (
    <>
      <StyledContainer fluid>
        <Row justify="between"> 
          <Col xs={5}>
            <SiteName exact to="/">
              Marisa Vukas
            </SiteName>
          </Col>            
          <Col xs={7}>
            <StyledRow justify="end">            
              <StyledNav to="about-me">About Me</StyledNav> 
              <StyledNav to="projects">Projects</StyledNav>
            </StyledRow>
          </Col>
        </Row>
      </StyledContainer>
    </>
  );
};

export default NavigationBar;
