import React from 'react'
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap';
import BASE_URL from '../service/base_url';
import { Link } from 'react-router-dom';

function TableContent({ empArray,deleteEmp }) {
  return (
    <div>
      {
        empArray.length > 0 ? (
          <Table className='w-75 container' striped bordered hover variant='info'>
            <thead>
              <tr>
                <th>#</th>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Status</th>
                <th>Profile</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                empArray.map((i, index) =>
                  <tr>
                    <td>{index + 1}</td>
                    <td><b>{i.fname + " " + i.lname}</b></td>
                    <td>{i.mobile}</td>
                    <td className='text-center'><Button variant={i.status == "active" ? "info" : "warning"}>{i.status}</Button></td>
                    <td className='text-center'><img className='rounded-border ' src={`${BASE_URL}/uploads/${i.profile}`} alt="" style={{ width: '50px', height: '50px' }} /></td>
                    <td className='text-center'>
                      <Dropdown>
                        <Dropdown.Toggle style={{ backgroundColor: '#000099' }} id="dropdown-basic">
                          <i class="fa-solid fa-list fa-fade"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Link to={`/view/${i._id}`} style={{textDecoration:'none'}}><Dropdown.Item href="ac1"><i class="fa-solid fa-user"></i> View</Dropdown.Item></Link>
                          <Link to={`/edit/${i._id}`} style={{textDecoration:'none'}}><Dropdown.Item href="ac2"><i class="fa-solid fa-user-pen"></i> Edit</Dropdown.Item></Link>
                          <Dropdown.Item onClick={()=>deleteEmp(i._id)}><i class="fa-solid fa-user-xmark"></i> Delete</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                )
              }

            </tbody>
          </Table>
        ) : (<h1 className='text-center text-danger '>No Employees found</h1>)
      }
      <h1 className='font text-center' style={{ color: '#000099' }}>List of Employees</h1>

    </div>
  )
}

export default TableContent