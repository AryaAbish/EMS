import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import AdminHeader from '../Components/AdminHeader';

function AdminHome() {
  return (
    <div className='font'>
      <AdminHeader></AdminHeader>
      <Container>
        <Row className='p-5'>
          <Col>
            <h1 id='grad'>Makes Employee Management Easy</h1>
            <p>The Employee Desk is designed to integrate all of the necessary elements. With the right tool, your workforce stays productive and happy, and you get to free up time to focus on your core business needs. </p>
          </Col>
          <Col>
            <img src="https://th.bing.com/th/id/R.88c78d17bb9bc202edc0c1fc2eb38f32?rik=LkUyQO64xeKtbw&riu=http%3a%2f%2felitetechnocrats.com%2fimages%2fsoftware_devlopment.gif&ehk=6AD7zgGC6jwLfDIHxT0litMN1sq3X3g2USbMwlyMxn4%3d&risl=&pid=ImgRaw&r=0" alt="" height={'400px'} />
          </Col>
        </Row>

        <Row className='p-5  ms-5'>
          <Col lg={6} className='text-center p-5'>
            <Link to={'/add-new'} style={{ textDecoration: 'none' }}>
              <Card style={{ width: '20rem' }} id="cc">
                <Card.Img variant="top" src="https://cdn.dribbble.com/users/1981645/screenshots/8094222/aq_woman_dribbble.gif" />
                <Card.Body>
                  <Card.Title><h2>Add Employee</h2></Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          <Col lg={6} className='text-center p-5'>
            <Link to={'/employee-manage'} style={{ textDecoration: 'none' }}>
              <Card style={{ width: '20rem' }} id="cc">
                <Card.Img variant="top" src="https://i.pinimg.com/originals/81/2c/22/812c229c60047ee347f778135cd76b81.gif" />
                <Card.Body>
                  <Card.Title><h2>Manage Employee</h2></Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default AdminHome 