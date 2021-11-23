import React from 'react';
import './estilo_header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';


const Header = () => {
    return (
      <div >
 <Navbar variant="dark" bg="primary" className="">
    <Container>
          <img src="assets/logo.jpg" className="logo" />
          <h1 className="segredo">LOja</h1>
          
    <Nav className="header-links">
      <Nav.Link className="header-link" href="https://github.com/NexusGroup6/crud-db" target="_blank">REPOSITÓRIO</Nav.Link>
      <Nav.Link className="header-link" href="https://github.com/nexusgroup6" target="_blank">GITHUB</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</div>

    );
  
}


export default Header;