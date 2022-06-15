import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react"; 
// import Button from 'react-bootstrap/Button';
import {
  Navbar, 
  Container, 
  Nav, 
  Image,
  spacer,
  Row, 
  Col, 
  Button, 
  Card
} from 'react-bootstrap';





function App() {
  const [expanded, setExpanded] = useState(false);

  

  const handleToggle = () => {
    if (expanded) {
      setExpanded(expanded ? !false : "expanded")
    } else {
      setExpanded(false);
    }
    setExpanded(!expanded);
  };

  return (
    <div className="App">
      <header className='App-header'>
        <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
          <Container>
            <Navbar.Brand href="#home">Marisa Vukas</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} isRunning={expanded} />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link href="#home" onClick={() => setExpanded(false)}>Home</Nav.Link>
                <Nav.Link href="#about" onClick={() => setExpanded(false)}>About</Nav.Link>
                <Nav.Link href="#projects" onClick={() => setExpanded(false)}>Projects</Nav.Link>
                <Nav.Link href="#contact" onClick={() => setExpanded(false)}>Contact</Nav.Link>

                {/* <NavDropdown title="Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Metronome</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Restaurant App</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Note App for Coders</NavDropdown.Item> 
                    <NavDropdown .Divider/> 
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>
      <div className = "home_page" id = "home"> 
      <Container>
        <Row>
        {/* the two numbers should add up to 12 */}
          <Col sm={7}>
          {/* <Image 
          src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" 
          fluid
          rounded
          /> */}
          </Col>
          <Col sm={5} class="mx-5 mt-5 pt-5 my-2" >
            <h1 expand="lg" class="font-weight-light mt-5 pt-5">Marisa Vukas</h1>

            <p class="mt-4"> 
              Front-End Developer
              
            </p>
          </Col>
        </Row>
       
        
      </Container>
      </div>


      <Container className= "about_container" >
      <div  className = "about" id="about"> 
<Row className = "pt-5 mt-5 pb-5 mb-5 d-flex" >
      <h1 className ="pt-5">About</h1>
          <Col className ="pt-1 mt-1 pb-1 mb-1"> 
          <Row className= "pt-5 mt-5 pb-5 mb-5"> 
          <Card className = "text-center bg-dark text-white my-1 py-2">
            <Card.Body> Hi! I'm Marisa. I am a front-end developer from Carmel, IN. I am passionate about problem-solving and writing code that helps people's lives. In my freetime I 
            love to play violin, compose and produce music, and enjoy anything that involves being outside. If you have any questions, feel free to reach out!
            </Card.Body>
          </Card>    
    
        </Row>
        <div class="d-flex justify-content-center"> 
        <Button class="btn btn-secondary btn-lg" variant="outline-secondary bg-dark pd-1" href="#contact">Contact</Button>{''}
        </div>
          </Col>

       

        </Row>
</div>
      </Container>

      <Container className= "project_container">
      <div  className = "projects" id="projects"> 
<Row className = "pt-5 mt-5 pb-5 mb-5" >
      <h1 className ="pt-5">Projects</h1>
          <Col className ="pt-1 mt-1 pb-1 mb-1"> 
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" />
            <Card.Body>
            <Card.Title>Metronome</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          <Button variant="outline-secondary bg-dark">View Code</Button>
           </Card.Body>
           </Card>
          </Col>

          <Col className ="pt-1 mt-1 pb-1 mb-1"> 
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" />
            <Card.Body>
            <Card.Title>Restaurant App</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          <Button variant="outline-secondary bg-dark">View Code</Button>
           </Card.Body>
           </Card>
          </Col>

          <Col className ="pt-1 mt-1 pb-1 mb-1"> 
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://dummyimage.com/900x400/dee2e6/6c757d.jpg" />
            <Card.Body>
            <Card.Title>Note App for Coders</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          <Button variant="outline-secondary bg-dark">View Code</Button>
           </Card.Body>
           </Card>
          </Col>

        </Row>
</div>
      </Container>






      <Container className= "contact_container">
      <Row className="pt-5 mt-5 pb-5 mb-5" id="contact"> 
      <h1 className ="pt-5">Contact</h1>
           <div className =  "pt-1 mt-1 pb-1 mb-1">

           

           <section className = "section">
            <div>
              <div className = "card shadow">
                <div className = "card-body">
                  <div className = "row">                   

                      <div className = "form-group">
                          <label className = "mb-1">Name</label>
                          <input type= "text" className="form-control mb-4" placeholder = "Enter Name"/>
                      </div>
                      <div className = "form-group">
                          <label className = "mb-1">Email Address</label>
                          <input type= "text" className="form-control mb-4" placeholder = "Enter a valid email address"/>
                      </div>
                      <div className = "form-group">
                          <label className = "mb-1">Message</label>
                          <textarea rows = "6" className="form-control mb-4" placeholder = "Type your message..."/>
                      </div>
                      <div className = "form-group py-2">
                        <Button type ="button" variant="outline-secondary bg-dark">Send Message</Button>
                      </div>
                    <div className = "column md-6"> 
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
          </section>



           </div>



          </Row>
      </Container>



      </main>
      <footer class = "py-5 my-0 px-4 bg-dark">
        <Container>
          <p class= "text-center text-white">
            Copyright &copy; Marisa Vukas 2022
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;



// <form>
// <div class="form-group">
//   <label for="exampleInputEmail1">Email address</label>
//   <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
//   <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
// </div>
// <div class="form-group">
//   <label for="exampleInputPassword1">Password</label>
//   <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
// </div>
// <div class="form-check">
//   <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//   <label class="form-check-label" for="exampleCheck1">Check me out</label>
// </div>
// <button type="submit" class="btn btn-primary">Submit</button>
// </form>
