import "terminal.css";
import React from "react";
import styled from "styled-components";
import { Container } from "react-grid-system";

const Header = styled.header`
  display: flex;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 3rem;

  .btn {
    margin: 0 auto;
    transition: background-color 0.15s ease, color 0.15s ease;
  }

  /* Invert the resume button's colors on hover/focus */
  .btn.btn-error.btn-ghost:hover,
  .btn.btn-error.btn-ghost:focus-visible {
    background-color: var(--error-color);
    color: var(--invert-font-color);
  }
`;


const Subtitle = styled.h2`
  font-size: 15px;
  margin-bottom: 1rem;
  font-weight:100;
`;


function WebPage() {
  return (
    <Container fluid>
      <Header>
        <h1>Marisa Vukas</h1>
        <Subtitle>Full-Stack Developer</Subtitle>

        <a
          className="btn btn-error btn-ghost"
          href="/MarisaVukas_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </Header>
    </Container>
  );
}

export default WebPage;
