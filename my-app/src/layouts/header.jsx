import {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Redirect } from "react-router-dom";



class Header extends Component {

  constructor(props) {
    super(props);
    this.state = { redirect: null };

}

  handleOnHomeClick() {
    if (window.location.pathname !== "/home")
      this.setState({ redirect: "/home"})
  }

  handleOnContactClick() {
    if (window.location.pathname !== "/contact")
      this.setState({ redirect: "/contact" });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <Navbar className="colorNav" expand="lg">
        <Navbar.Brand className="navTextPrimary" href="#home">Framboesa Selvagem</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className={window.location.pathname === '/home' ? 'active' : ''}
                      onClick={this.handleOnHomeClick.bind(this)}>Home
            </Nav.Link>
            <Nav.Link>Shop</Nav.Link>
            <Nav.Link className={window.location.pathname === '/contact' ? 'active' : ''}
                      onClick={this.handleOnContactClick.bind(this)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
