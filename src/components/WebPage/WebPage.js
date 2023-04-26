import "./WebPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import MVukas_Resume from "../MVukas_Resume.pdf";
import emailjs from "@emailjs/browser";

import {
  Navbar,
  Container,
  Nav,
  Image,
  spacer,
  Row,
  Col,
  Button,
  Card,
  Alert,
  Modal,
} from "react-bootstrap";

function WebPage() {
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => setShow(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_15gc53w",
        "template_ofcsk7b",
        form.current,
        "uT2rscTncWbI3b1S9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="App">
      <main>
        <div className="home_page" id="home">
          <Container className="d-flex flex-column justify-content-center align-items-center w-100 mt-auto h-100 flex-wrap">
            <h1 expand="lg" class="font-weight-light display-2 p-2">
              Marisa Vukas
            </h1>
            <p class="mt-1 display-1 fs-2 text-center">Full-Stack Developer</p>
            <div className="d-flex flex-column justify-content-center">
              <a href={MVukas_Resume} target="_blank" rel="noreferrer">
                <Button size="lg" variant="dark" className="h3 mb-1 mr-5">
                  View Resume
                </Button>
              </a>
              <div className="d-flex flex-row mx-auto my-0">
                <a
                  className="linkedin_github_icon"
                  href="https://github.com/marisavukas"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub className="fs-1 mb-4" />
                </a>
                <a
                  className="linkedin_github_icon"
                  href="https://linkedin.com/in/marisa-vukas/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin className="fs-1 mb-4 ml-3" />
                </a>
              </div>
            </div>
          </Container>
        </div>

        <Container className="container">
          <div className="about" id="about">
            <Card className="mb-5 p-4">
              <Card.Body className="d-flex row justify-content-evenly text-center">
                <h1 className="pt-3 text-dark mx-auto">About</h1>

                <Col className="pb-1 mb-1 px-2 ">
                  <Row className="pt-5 mt-2 pb-5 mb-5">
                    <div className="text-center outline-none text-dark my-1 py-1 fs-3">
                      {" "}
                      Hi! I'm Marisa. I am a full-stack developer from Carmel,
                      IN. I am passionate about problem-solving and writing code
                      that improves people's lives. In my freetime I love to
                      play violin, compose and produce music, and enjoy anything
                      that involves being outside. If you have any questions,
                      feel free to reach out!
                    </div>
                  </Row>
                  <div>
                    <Button
                      className="secondary"
                      size="lg"
                      variant="dark"
                      href="#contact"
                    >
                      Contact
                    </Button>
                  </div>
                </Col>
              </Card.Body>
            </Card>{" "}
          </div>
        </Container>

        <Container className="container">
          <div className="projects" id="projects">
            <div className="mt-5 d-flex text-center">
              <Row className="bg-white rounded outline-none text-dark pt-2 pb-5 mb-5 d-flex justify-content-evenly text-center">
                <h1 className="pt-0 pb-3 text-dark">Projects</h1>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={5}
                  xl={5}
                  className="mt-1 p-3 mb-1 d-flex shadow-sm"
                >
                  <Card className="h-100 mb-5 p-4 d-flex row justify-content-evenly">
                    <Card.Body>
                      <Card.Title className="fs-2">Metronome App</Card.Title>
                      <Card.Text className="fs-4 pb-5">
                        A fully responsive metronome app made from scratch using
                        React and Node.js.
                      </Card.Text>
                      <div>
                        <Button
                          size="md"
                          variant="dark"
                          href="https://github.com/marisavukas/metronome"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          View Code
                        </Button>{" "}
                        <Button
                          variant="dark"
                          href="https://metronome-1.herokuapp.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          View App
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>

                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={5}
                  xl={5}
                  className="mt-1 p-3 mb-1 d-flex shadow-sm"
                >
                  <Card className="h-100 mb-5 p-4 d-flex row justify-content-evenly">
                    <Card.Body className="d-flex row justify-content-evenly">
                      <Card.Title className="fs-2">
                        Poblano's Grill App
                      </Card.Title>
                      <Card.Text className="fs-4 pb-5 card-text">
                        A fully responsive restaurant app using React and
                        Node.js.
                      </Card.Text>
                      <div>
                        <Button
                          variant="dark"
                          href="https://github.com/marisavukas/poblanos"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          View Code
                        </Button>
                        <Button
                          className="mx-3"
                          variant="dark"
                          href="https://poblanos.herokuapp.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          View App
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Container>

        <Container className="container">
          <div className="contact" id="contact">
            <div className="w-100 px-0 pt-5 my-5">
              <Row className="pt-5 mt-2 pb-5 mb-5">
                <Card class="w-100 rounded mx-0 text-dark bg-light ">
                  <div class="w-auto mx-4 text-dark my-1 px-5">
                    <h1 className="pt-5 text-center mx-0 fs-1 w-auto">
                      <strong>Contact</strong>
                    </h1>
                    <div className="px-0 outline-none w-auto m-auto">
                      <div className="row px-0">
                        <div className="text-center">
                          {show && (
                            <Alert
                              variant="secondary"
                              className="text-dark"
                              data-dismiss="alert"
                              onClick={handleClose}
                              aria-label="Close"
                            >
                              <Alert.Heading variant="w-100 h5 mx-0 m-auto text-center">
                                Your message has been sent
                              </Alert.Heading>
                            </Alert>
                          )}
                        </div>

                        <form
                          ref={form}
                          onSubmit={sendEmail}
                          isSubmitted={true}
                          variant="light"
                          className="rounded p-0"
                        >
                          <div className="form-group">
                            <label className="mb-1 fs-4 mx-0 ">Name</label>
                            <input
                              name="name"
                              type="text"
                              variant="light"
                              className="form-control mb-4 text-dark fs-5"
                              placeholder="Enter Name"
                            />
                          </div>
                          <div className="form-group">
                            <label className="mb-1 fs-4">Email Address</label>
                            <input
                              name="email"
                              type="text"
                              variant="light"
                              className="form-control mb-4 bg-white text-dark fs-5"
                              placeholder="Enter a valid email address"
                            />
                          </div>
                          <div className="form-group">
                            <label className="mb-1 fs-4">Message</label>
                            <textarea
                              name="message"
                              rows="6"
                              variant="light"
                              className="form-control bg-white text-dark fs-5"
                              placeholder="Type your message..."
                            />
                          </div>
                          <div className="form-group py-2">
                            <Button
                              type="submit"
                              variant="dark"
                              value="Send"
                              onClick={handleShow}
                              className="fs-4 mb-1 mt-2"
                            >
                              Send Message
                            </Button>

                            <div></div>
                          </div>
                        </form>
                        {/* <div className="column md"></div> */}
                      </div>
                    </div>
                  </div>
                </Card>
              </Row>
            </div>
          </div>
        </Container>
      </main>
      <footer class="py-1  px-4 mt-5 bg-dark">
        <Container className="footer">
          <p class="text-center text-light">
            Copyright &copy; Marisa Vukas 2023
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default WebPage;
