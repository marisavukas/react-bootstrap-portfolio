import styled from "styled-components";
import { Container, Col } from "react-grid-system";

const Image = styled.img`
  width: 250px;
  display: flex;
  justify-content: center;
  margin: 2rem auto;
`;
const AboutMe = () => {
  const handleClick = () => {
    window.location.href = "mailto:marisavukas@gmail.com";
  };
  return (
    <Container fluid>
      <Col xs={12}>
        <h1>
          {" "}
          <header>About Me </header>
        </h1>
      </Col>

      <Col xs={12}>
        <p>
          My name is Marisa Vukas. Welcome to my website! I am a full-stack
          developer from Carmel, IN. Here you will find various projects I have
          worked on. My most recent job was a full stack software developer at small fintech company called Baker Hill (see my{" "}
          <a
            href="https://www.linkedin.com/in/marisa-vukas/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          for more info). I attended Purdue University in West Lafayette,
          Indiana, graduating in May 2020.
        </p>{" "}
        <br />
        <p>
          In my free time I love making music. I've played violin for over 12
          years and have written my own compositions. But it was my discovery of{" "}
          <a
            href="https://www.ableton.com/en/"
            target="_blank"
            rel="noreferrer"
          >
            Ableton
          </a>
          , a popular Digital Audio Workstation (DAW), that sparked my interest
          in the intersection of music and technology. I love experimenting with different types of sound
          design as much as possible. But I also enjoy working on {" "}
          <a href="/projects">side projects</a>.
        </p>
        <br />
        <p>
          If you have any questions or would like to connect, feel free to
          contact me! My email is{" "}
          <a onClick={handleClick}>marisavukas@gmail.com</a>.
        </p>
        <Image src="/MV_Profile.webp" alt="Description of the image" />
      </Col>
    </Container>
  );
};

export default AboutMe;
