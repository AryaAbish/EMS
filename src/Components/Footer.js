import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function Footer() {
  return (
    <div style={{background:"#000099"}}>
        <Container>
            <Row className='font'>
                <Col className='text-center p-5'>
                <img
                  alt=""
                  src="https://i.postimg.cc/qM4VY5mz/148-1482312-employees-icon-download-employee-management-system-logo-png.jpg"
                  width="30"
                  height="30"
                  style={{borderRadius:'50%'}}
                  className="d-inline-block align-top"
                />{' '}
                <b className='text-white'>Employ Desk</b>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro enim consequuntur repellendus perferendis amet sapiente, placeat a accusamus impedit, velit quisquam vero aspernatur harum cum. Voluptas illo eligendi repellendus delectus.</p>
                </Col>
                <Col className='text-white p-5'>
                <h3>Contact Us</h3>
                    <input className='form-control' type="text" name="" id=""  placeholder='Enter message here' style={{background:'white'}}/>
                    <button className='btn m-3 btn-secondary'>Send</button>
                </Col>
                <Col className='text-white p-5'>
                    <h3>Connect With Us</h3>
                    <i class="fa-brands fa-facebook p-2"></i>
                    <i class="fa-brands fa-instagram p-2"></i>
                    <i class="fa-brands fa-linkedin p-2"></i>
                    <i class="fa-brands fa-twitter p-2"></i>
                    <i class="fa-brands fa-github p-2"></i>
                    <h6><i class="fa-solid fa-envelope p-2"></i> ems@gmail.com</h6>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer