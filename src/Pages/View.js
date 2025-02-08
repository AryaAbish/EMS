import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getEmployee } from '../service/allAPIs'
import BASE_URL from '../service/base_url';
import { Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import AdminHeader from '../Components/AdminHeader';

function View() {

    const { id } = useParams()
    // console.log(id);
    const [emp,setEmp]=useState({})

    const getEmp=async()=>{
        const result=await getEmployee(id)
        if(result.status>=200 && result.status<300){
            setEmp(result.data)
            // console.log(result);
        }
    }
    useEffect(()=>{
        getEmp()
    },[])
    console.log(emp);

    return (
        <div>
            <AdminHeader></AdminHeader>
            <h1 className='text-center'>{emp.fname+" "+emp.lname}</h1>
            <Row>
                <Col>
                    <img className='w-100 p-5' style={{ height: '600px' }} src={`${BASE_URL}/uploads/${emp.profile}`} alt="" />
                </Col>
                <Col>
                    <ListGroup className='pt-5 pe-5'>
                        <ListGroup.Item className='mt-2 fs-3'><b className='me-5'>First Name</b> <span className='ms-5'>{emp.fname}</span></ListGroup.Item>
                        <ListGroup.Item className='mt-2 fs-3'><b className='me-5'>Last Name</b> <span className='ms-5'>{emp.lname}</span></ListGroup.Item>
                        <ListGroup.Item className='mt-2 fs-3'><b className='me-5'>Email</b> <span className='ms-5'>{emp.email}</span></ListGroup.Item>
                        <ListGroup.Item className='mt-2 fs-3'><b className='me-5'>Mobile</b> <span className='ms-5'>{emp.mobile}</span></ListGroup.Item>
                        <ListGroup.Item className='mt-2 fs-3'><b className='me-5'>Gender </b> <span className='ms-5'>{emp.gender}</span></ListGroup.Item>
                        <ListGroup.Item className='mt-2 fs-3'><b className='me-5'>Status</b> <span className='ms-5'>{emp.status}</span></ListGroup.Item>
                        <ListGroup.Item className='mt-2 fs-3'><b className='me-5'>Location</b> <span className='ms-5'>{emp.location}</span></ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </div>
    )
}

export default View