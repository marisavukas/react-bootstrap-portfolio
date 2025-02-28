import styled from "styled-components";
import { Row, Col, Container } from "react-grid-system";

const ProjectLink = styled(Col)`
  color: var(--secondary-color);
  text-align: center;
  margin:1rem auto;
  
  a:hover {
      background-color: var(--secondary-color);
      color: var(--invert-font-color);
  }
`;

const ProjectHeader = styled.header`
  font-size: 1.3rem;
  font-weight:700;
`;

const ProjectBody = styled.p`
  font-size: 1rem;
  height: 55%;
  padding: .5rem;
  @media screen and (max-width: 700px) {
    font-size: 0.9rem;
  }
`;

const Links = styled(Row)`
  margin-bottom: 2rem;
`;

const StyledCard = styled.div`
  margin-bottom: 1.5rem;
  `;

const Projects = () => {
  return (
    <Container fluid>
        <h1>
          Projects
        </h1>
        <Row>
          <Col xs={12} md={6}>
            <StyledCard className="terminal-card">
              <ProjectHeader>Metronome</ProjectHeader>
              <ProjectBody>
                This was my first project I made using React. I used an audio
                framework called Tone.js. I created a sine wave tone and playing 
                around with the oscillator was neat.
              </ProjectBody>
              <Links>
                  <ProjectLink xs={6}>
                    <a
                    href="https://github.com/marisavukas/metronome"
                    target="_blank"
                    rel="noreferrer">
                    View Code
                    </a>
                  </ProjectLink>

                  <ProjectLink xs={6}>
                    <a 
                    href="https://metronome-1.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer">
                    View App
                    </a>
                  </ProjectLink>
              </Links>
            </StyledCard>{" "}
          </Col>

          <Col xs={12} md={6}>
            <StyledCard className="terminal-card">
              <ProjectHeader>Restaurant App</ProjectHeader>
  
              <ProjectBody>
                A fully responsive restaurant app using React and Node.js. This
                website was my first complex React app. This project became more
                challenging when implementing the cart within the app and deciding
                which component to store the state without state management like
                Redux.
              </ProjectBody>
              <Row>
                  <ProjectLink xs= {6}>
                    <a 
                      href="https://github.com/marisavukas/poblanos"
                      target="_blank"
                      rel="noreferrer"
                    >
                    View Code
                    </a>
                  </ProjectLink>{" "}
                  <ProjectLink>
                    <a 
                      href="https://poblanos.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                    View App
                    </a>
                  </ProjectLink>
              </Row>
            </StyledCard>
          </Col>

          <Col xs={12} md={6}>
            <StyledCard className="terminal-card">

              <ProjectHeader>marisavukas.com</ProjectHeader>
              <ProjectBody>
                This website is another one of my projects using React! I
                initially chose to use BootStrap. Over time, I decided to remove
                the framework from this project and use something more
                lightweight. I decided to instead use React-Grid-System and a CSS
                library, <a href="https://terminalcss.xyz/">Terminal.css.</a>{" "}
              </ProjectBody>
              <Row>
                <ProjectLink xs={12}>
                  <a
                    href="https://github.com/marisavukas/react-bootstrap-portfolio"
                    target="_blank"
                    rel="noreferrer"
                      >
                      View Code
                  </a>
                </ProjectLink>{" "}
              </Row>
            </StyledCard>
          </Col>
        </Row>
    </Container>
  );
};

export default Projects;
