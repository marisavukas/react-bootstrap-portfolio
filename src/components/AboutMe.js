import styled from "styled-components";
import { Container, Col } from "react-grid-system";
import { Link } from "react-router-dom";

const Image = styled.img`
  width: 250px;
  display: flex;
  justify-content: center;
  margin: 2rem auto;
`;
const AboutMe = () => {
  return (
    <Container fluid>
      <Col xs={12}>
        <h1>About Me</h1>
      </Col>

      <Col xs={12}>
        <p>
          My name is Marisa Vukas. Welcome to my website! I'm a full-stack
          software engineer based in Chicago, IL, originally from Carmel, IN.
          I currently work at Winthrop Capital Management, where I help build
          cloud-based reporting and portfolio management tools with ASP.NET
          Core and Angular. Before that, I was a full-stack developer at Baker
          Hill, a fintech company (see my{" "}
          <a
            href="https://www.linkedin.com/in/marisa-vukas/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          for more info). I graduated from Purdue University in West Lafayette,
          Indiana, in May 2020.
        </p>{" "}
        <br />
        <p>
          In my free time I love making music. I've played violin for over 15
          years and have written my own compositions. But it was my discovery of{" "}
          <a
            href="https://www.ableton.com/en/"
            target="_blank"
            rel="noreferrer"
          >
            Ableton
          </a>
          , a popular Digital Audio Workstation (DAW), that sparked my interest
          in the intersection of music and technology. I love experimenting with
          sound design, and I also enjoy working on <Link to="/projects">side projects</Link>.
        </p>
        <br />
        <p>
          If you have any questions or would like to connect, feel free to
          contact me! My email is{" "}
          <a href="mailto:marisavukas@gmail.com">marisavukas@gmail.com</a>.
        </p>
        <Image src="/MV_Profile.webp" alt="Marisa Vukas" />
      </Col>
    </Container>
  );
};

export default AboutMe;
