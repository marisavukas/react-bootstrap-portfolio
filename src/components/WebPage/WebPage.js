import "./WebPage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import marisavukas_resume from "../marisavukas_resume.pdf";
import metronome_picture from "../metronome_picture.png";
import poblanos_picture from "../poblanos_picture.png";
import emailjs from "@emailjs/browser";
import { MdCancel, MdSafetyDivider } from "react-icons/md";

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
      <main className="pb-5">
        <div className="home_page" id="home">
          <Container className="d-flex flex-column justify-content-center align-items-center w-100 mt-auto h-100 flex-wrap">
            <h1 expand="lg" class="font-weight-light display-2 p-2">
              Marisa Vukas
            </h1>
            <p class="mt-1 display-1 fs-2 text-center">Front-End Developer</p>
            <div className="resume_github_linkedin">
              <a href={marisavukas_resume} target="_blank" rel="noreferrer">
                <Button
                  size="lg"
                  variant="outline-secondary bg-dark"
                  className="h3 mb-5 mr-5"
                >
                  View Resume
                </Button>
              </a>
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
          </Container>
        </div>

        <Container className="h-100">
          <div className="about" id="about">
            <Row className="pt-5 mt-5 pb-5 mb-5 d-flex text-center px-5">
              <Card class="text-dark bg-light ">
                <div className="card-body">
                  <h1 className="pt-3 text-dark mb-1">About</h1>
                  <Col className="pt-1 mt-5 pb-3 mb-1 px-2 ">
                    <Row className="pt-5 mt-2 pb-5 mb-5">
                      <div className="text-center outline-none text-dark my-1 py-2 fs-3 line-height-2">
                        {" "}
                        Hi! I'm Marisa. I am a front-end developer from Carmel,
                        IN. I am passionate about problem-solving and writing
                        code that improves people's lives. In my freetime I love
                        to play violin, compose and produce music, and enjoy
                        anything that involves being outside. If you have any
                        questions, feel free to reach out!
                      </div>
                    </Row>

                    <div class="d-flex justify-content-center">
                      <Button
                        className="contact_button"
                        size="lg"
                        class="btn btn-secondary text-black btn-lg"
                        variant="outline-secondary bg-dark"
                        href="#contact"
                      >
                        Contact
                      </Button>
                    </div>
                  </Col>
                </div>
              </Card>{" "}
            </Row>
          </div>
        </Container>

        <Container className="h-100">
          <div className="projects" id="projects">
            <div className="card-body pt-5 mt-5 pb-5 mb-5 d-flex text-center px-5">
              <Row className="bg-white rounded outline-none text-dark pt-5 mt-2 pb-5 mb-5 row mb-5 d-flex px-5 justify-content-lg-between text-center">
                <h1 className="pt-0  pb-3 px-5 text-dark mb-0">Projects</h1>
                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={5}
                  xl={5}
                  className="mt-1 px-0 mb-1 d-flex shadow-sm"
                >
                  <Card className="h-100 mb-5">
                    <Card.Body className="d-flex flex-column card-body">
                      <Card.Title className="align-self-start fs-2 pb-2 align-items-center mx-auto">
                        Metronome App
                      </Card.Title>
                      <Card.Text className="align-self-center justify-content-center fs-4 mb-auto pb-5">
                        A fully responsive metronome app made from scratch using
                        React and Node.js.
                      </Card.Text>
                      <div className="align-self-end justify-content-center mx-auto pt-5">
                        <Button
                          variant="outline-secondary bg-dark"
                          href="https://github.com/marisavukas/metronome"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          View Code
                        </Button>{" "}
                        <Button
                          className="mx-3"
                          variant="outline-secondary bg-dark"
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
                  md={12}
                  lg={5}
                  xl={5}
                  className="my-2 d-lg-none d-md-none d-xl-none "
                ></Col>

                <Col
                  xs={12}
                  sm={12}
                  md={12}
                  lg={5}
                  xl={5}
                  className="mt-1 px-0 mb-1 d-flex justify-content-center shadow-sm"
                >
                  <Card className="h-100">
                    <a
                      href="https://poblanos.herokuapp.com/"
                      target="_blank"
                      className="d-none w-50 h-50 m-auto py-3 d-flex justify-content-center"
                    >
                      {/* <Card.Img
                      variant="top"
                      src={poblanos_picture}
                    /> */}
                    </a>
                    <Card.Body className="d-flex flex-column card-body ">
                      <Card.Title className="align-self-start fs-2 pb-2 align-items-center mx-auto">
                        Poblano's Grill App
                      </Card.Title>
                      <Card.Text className="align-self-center justify-content-center fs-4 mb-auto pb-5 card-text">
                        A fully responsive restaurant app made without a
                        template using React and Node.js.
                      </Card.Text>
                      <div className="align-self-end justify-content-center mx-auto pt-5">
                        <Button
                          variant="outline-secondary bg-dark"
                          href="https://github.com/marisavukas/metronome.git"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {" "}
                          View Code
                        </Button>
                        <Button
                          className="mx-3"
                          variant="outline-secondary bg-dark"
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

        <Container className="h-100">
          <div className="contact" id="contact">
            <div className="w-100 m-auto px-0 pt-5 mt-5">
              <Row className=" bg-light mx-4 px-0 rounded outline-none text-dark pb-5 mb-5 d-flex justify-content-sm-center justify-content-xs-center justify-content-lg-center justify-content-md-center text-left">
                <Card class="w-100 rounded mx-0 text-dark bg-light ">
                  <div class="card-body w-auto mx-4 text-dark my-1 px-5">
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
                                {/* <MdCancel className="dark w-auto ml-4 px-4" /> */}
                              </Alert.Heading>
                            </Alert>
                          )}
                        </div>

                        <form
                          ref={form}
                          onSubmit={sendEmail}
                          isSubmitted={true}
                          variant="light"
                          className="rounded"
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
                              variant="outline-secondary bg-dark"
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
      <footer class="py-5 my-0 px-4 bg-dark">
        <Container>
          <p class="text-center text-light">
            Copyright &copy; Marisa Vukas 2022
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default WebPage;
