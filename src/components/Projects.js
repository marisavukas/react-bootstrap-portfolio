import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";

const ProjectLink = styled.a`
  color: var(--secondary-color);
  &:hover {
    background-color: var(--secondary-color);
    color: var(--invert-font-color);
  }
`;

const ProjectCardRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ProjectHeader = styled.header`
  font-size: 1.3rem;
`;

const ProjectBody = styled.p`
  font-size: 1rem;
  height: 65%;
  @media screen and (max-width: 700px) {
    font-size: 0.9rem;
  }
`;

const ProjectLinks = styled.div`
  height: auto;
  display: flex;
  margin: auto;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;
const Projects = () => {
  return (
    <div>
      <Col xs={12}>
        <h1>
          {" "}
          <header>Projects</header>{" "}
        </h1>
      </Col>
      <ProjectCardRow>
        <Col xs={12} sm={6} md={6} lg={6} style={{ paddingBottom: "1rem" }}>
          <div class="terminal-card">
            <ProjectHeader>Metronome</ProjectHeader>
            <ProjectBody style={{ padding: ".5rem" }}>
              This was my first project I made using React. I used an audio
              framework called Tone.js. Even though the metronome beeps probably
              would have sounded better with a wood click .wav file, creating a
              sine wave tone and playing around with the oscillator was neat.
            </ProjectBody>
            <Row around="xs">
              <Col>
                <ProjectLink
                  href="https://github.com/marisavukas/metronome"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View Code
                </ProjectLink>{" "}
              </Col>

              <Col>
                <ProjectLink
                  href="https://metronome-1.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View App
                </ProjectLink>
              </Col>
            </Row>
          </div>{" "}
        </Col>

        <Col xs={12} sm={6} md={6} lg={6} style={{ paddingBottom: "1rem" }}>
          <div className="terminal-card">
            <ProjectHeader>Restaurant App</ProjectHeader>

            <ProjectBody style={{ padding: ".5rem" }}>
              A fully responsive restaurant app using React and Node.js. This
              website was my first complex React app. This project became more
              challenging when implementing the cart within the app and deciding
              which component to store the state without state management like
              Redux.
            </ProjectBody>
            <Row around="xs">
              <Col>
                <ProjectLink
                  href="https://github.com/marisavukas/poblanos"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View Code
                </ProjectLink>{" "}
              </Col>
              <Col>
                <ProjectLink
                  href="https://poblanos.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View App
                </ProjectLink>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs={12} sm={6} md={6} lg={6}>
          <div class="terminal-card">
            <ProjectHeader>marisavukas.com</ProjectHeader>
            <ProjectBody style={{ padding: ".5rem" }}>
              This website is another one of my projects using React! I
              initially chose to use BootStrap. Over time, I decided to remove
              the framework from this project and use something more
              lightweight. I decided to revamp this site, using
              React-Flexbox-Grid and a cool CSS library,{" "}
              <a href="https://terminalcss.xyz/">Terminal.css.</a>{" "}
            </ProjectBody>
            <Row center="xs">
              <Col>
                <ProjectLink
                  href="https://github.com/marisavukas/react-bootstrap-portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  View Code
                </ProjectLink>{" "}
              </Col>

              <Col></Col>
            </Row>
          </div>{" "}
        </Col>
      </ProjectCardRow>
    </div>
  );
};

export default Projects;
