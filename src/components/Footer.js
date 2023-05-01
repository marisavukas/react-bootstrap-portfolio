import React from "react";
import styled from "styled-components";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { MdOutlineEmail, MdRadioButtonUnchecked } from "react-icons/md";
import { Row, Col } from "react-flexbox-grid";

const Container = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
`;

const Favicons = styled.a`
  font-size: 2rem;
  margin: 0.5rem;
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
    <Container>
      <Row center="xs">
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
      <p style={{ textAlign: "center" }}>Copyright &copy; Marisa Vukas 2023</p>
    </Container>
  );
};

export default Footer;
