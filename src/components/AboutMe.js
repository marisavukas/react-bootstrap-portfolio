import styled from "styled-components";
import { Row, Col } from "react-flexbox-grid";
import ProfilePic from "./ProfilePic.jpg";

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
    <div>
      <Col xs={12} style={{ textAlign: "left" }}>
        <h1>
          {" "}
          <header>About Me </header>
        </h1>
      </Col>

      <Col xs={12} style={{ textAlign: "left" }}>
        <p>
          My name is Marisa Vukas. Welcome to my website! I am a full-stack
          developer from Carmel, IN. Here you will find various projects I have
          worked on, as well as a collection of articles I have written. My
          current role is a workflow developer at Edify, and was a software
          engineer at a startup prior to that (see my{" "}
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
          in the intersection of music and technology.
        </p>
        <br />
        <p>
          In my free time, I love experimenting with different types of sound
          design as much as possible. But I also enjoy working on side projects.
          Recently I've been blogging about new technologies including{" "}
          <a href="https://openai.com/" target="_blank" rel="noreferrer">
            openAI
          </a>{" "}
          and music production.{" "}
        </p>
        <br />
        <p>
          If you have any questions or would like to connect, feel free to
          contact me! My email is{" "}
          <a onClick={handleClick}>marisavukas@gmail.com</a>.
        </p>
        <Image src={ProfilePic} alt="Description of the image" />
      </Col>
    </div>
  );
};

export default AboutMe;
