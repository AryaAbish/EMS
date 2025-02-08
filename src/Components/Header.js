import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
        <Navbar style={{background:"#000099"}}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/qM4VY5mz/148-1482312-employees-icon-download-employee-management-system-logo-png.jpg"
              width="30"
              height="30"
              style={{borderRadius:'50%'}}
              className="d-inline-block align-top"
            />{' '}
            <b className='text-white font'>Employee Desk</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header