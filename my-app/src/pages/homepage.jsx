import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/homepage.css';
import { useHistory } from "react-router-dom";


const HomePage = () => {
  const usedHistory = useHistory()

  function handleOnContactClick() {
    usedHistory.push('/contact');
  }

  return (
    <Navbar className="colorNav fixed-top" expand="lg">
      <Navbar.Brand className="navTextPrimary" href="#home">Framboesa Selvagem</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="active">Home</Nav.Link>
          <Nav.Link>Shop</Nav.Link>
          <Nav.Link onClick={handleOnContactClick}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default HomePage;
