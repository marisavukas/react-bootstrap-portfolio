import "terminal.css";
import React from "react";

import MarisaVukas_Resume from "../MarisaVukas_Resume.pdf";

import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

const Header = styled.header`
  display: flex;
  margin-top: 3rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1,
  p,
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

const ArchivesHeader = styled.span`
  color: #fad001;
`;

function WebPage() {
  return (
    <Col xs={12}>
      <Header>
        <h1>Marisa Vukas</h1>
        <p style={{ marginBottom: "1rem" }}>Full-Stack Developer</p>

        <button className="btn btn-error btn-ghost">
          <a href={MarisaVukas_Resume} target="_blank" rel="noreferrer">
            View Resume{" "}
          </a>
        </button>
      </Header>
      <br /> <br />
      <br />
      {/* TODO: add back in when you have some articles */}
      {/* <section>
        <nav>
          <ul>
            <ArchivesHeader>Articles</ArchivesHeader>
            <br />
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Members</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </nav>
      </section> */}
    </Col>
  );
}

export default WebPage;
