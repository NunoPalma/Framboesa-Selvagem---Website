import {MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBInput, MDBBtn, MDBContainer} from 'mdbreact';
import {Navbar, Nav} from 'react-bootstrap';
import {Spring} from 'react-spring/renderprops'
import '../styles/contacts.css';


const ContactPage = ()  => {
  return (
    <section className="my-5">
    <Navbar className="colorNav fixed-top test1" expand="lg">
      <Navbar.Brand className="navTextPrimary" href="#home">Framboesa Selvagem</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Shop</Nav.Link>
          <Nav.Link className="active" href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Spring
    from={{opacity: 0, marginTop: -500}}
    to={{opacity: 1, marginTop: 0}}>
      {props => (
        <div style={props}>
        <MDBContainer>
        <MDBRow center>
            <MDBCol lg="5" className="lg-0 mb-4">
              <MDBCard className="shadow formContainer">
                <MDBCardBody>
                  <div className="form-header blue accent-1">
                    <h3 className="mt-2">
                      <MDBIcon icon="envelope" /> Write to us:
                    </h3>
                  </div>
                  <p className="dark-grey-text">
                    Some description here about the contact page and a cute icon plus some animations.
                  </p>
                  <div className="md-form">
                    <MDBInput
                      icon="user"
                      label="Your name"
                      iconClass="grey-text"
                      type="text"
                      id="form-name"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="envelope"
                      label="Your email or phone number"
                      iconClass="grey-text"
                      type="text"
                      id="form-email"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="tag"
                      label="Subject"
                      iconClass="grey-text"
                      type="text"
                      id="form-subject"
                    />
                  </div>
                  <div className="md-form">
                    <MDBInput
                      icon="pencil-alt"
                      iconClass="grey-text"
                      type="textarea"
                      id="form-text"
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn className="submitButton">Submit</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          </MDBContainer>
        </div>
      )}
    </Spring>
    </section>
  );
}

export default ContactPage;
