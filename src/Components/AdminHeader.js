import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <div>
        <Nav style={{background:"#000099"}}
      activeKey="/home" className='py-2 justify-content-end pe-5'
      >
      <Nav.Item>
        <a className='font ms-5 text-white' href="/home" style={{textDecoration:'none'}}>Home</a>
      </Nav.Item>
      <Link to={'/add-new'} style={{textDecoration:'none'}}>
          <Nav.Item>
            <a className='font ms-5 text-white' style={{textDecoration:'none'}}>Add Employee</a>
          </Nav.Item>
      </Link>
      <Link to={'/employee-manage'} style={{textDecoration:'none'}}>
          <Nav.Item>
            <a className='font ms-5 text-white' style={{textDecoration:'none'}}>List Employee</a>
          </Nav.Item>
      </Link>
    </Nav>
    </div>
  )
}

export default AdminHeader