import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { Row, Container } from "react-grid-system";

const Favicons = styled.a`
  font-size: 2rem;
  margin: .4rem;
  border-radius: 20%;
  &:hover {
    cursor: pointer;
    background-color: transparent;
  }
  svg {
    color: var(--white-hover-color);

    &:hover {
      color: var(--secondary-color);
    }
  }
`;
const Footer = () => {
  const handleClick = () => {
    window.location.href = "mailto:marisavukas@gmail.com";
  };

  return (
    <Container fluid>
      <Row justify="center">
        <Favicons
            href="https://github.com/marisavukas"
            target="_blank"
            rel="noreferrer"
            variant="outline-dark"
            size="sm"
          >
          <AiFillGithub />
        </Favicons>
        <Favicons
          href="https://linkedin.com/in/marisa-vukas/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </Favicons>
        <Favicons rel="noreferrer" onClick={handleClick}>
          <MdOutlineEmail alt="email icon" />
        </Favicons>
      </Row>
      <p style={{ textAlign: "center" }}>Copyright &copy; Marisa Vukas 2025</p>
    </Container>
  );
};

export default Footer;
