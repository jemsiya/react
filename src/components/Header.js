import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
    
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="no logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNmP4Q40PtKwYIyJ0n4oRgaND8-YzWcfhad556nG2&s"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            &nbsp;
            find me Here!
          </Navbar.Brand>
        </Container>
      </Navbar>
    
    </div>
  )
}

export default Header