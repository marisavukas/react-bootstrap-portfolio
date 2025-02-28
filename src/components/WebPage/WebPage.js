import "terminal.css";
import React from "react";
import MarisaVukas_Resume from "../MarisaVukas_Resume.pdf";

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
    a {
      color: var(--error-color);
    }
    margin: 0 auto;
    a:hover {
      background-color: transparent;
    }
  }
`;


const Subtitle = styled.h2`
  font-size: 15px;
  margin-bottom: 1rem;
  font-weight:100;
`;


function WebPage() {
  const ResumePDF = require("../MarisaVukas_Resume.pdf");

  return (
    <Container fluid>
      <Header>
        <h1>Marisa Vukas</h1>
        <Subtitle>Full-Stack Developer</Subtitle>

        <button className="btn btn-error btn-ghost">
          <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
            View Resume{" "}
          </a>
        </button>
      </Header>
    </Container>
  );
}

export default WebPage;
