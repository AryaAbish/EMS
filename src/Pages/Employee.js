import React, { useContext, useEffect, useState } from 'react'
import TableContent from '../Components/TableContent'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { registerContext, updateContext } from '../Components/ContextShare';
import Alert from 'react-bootstrap/Alert';
import { deleteEmployee, filterStatus, getAllEmployees } from '../service/allAPIs';
import AdminHeader from '../Components/AdminHeader';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function Employee() {

  //access context to show success alert
  const { registerUpdate, setRegisterUpdate } = useContext(registerContext)
  const { UpdateStatus, setUpdateStatus } = useContext(updateContext)

  const [employees, setemployees] = useState([])
  const [searchData, setSearchData] = useState("")

  const getemployees = async () => {
    const result = await getAllEmployees(searchData)
    // console.log(result.data);
    setemployees(result.data)
  }

  //delete employee
  const removeEmployee = async (id) => {
    const result = await deleteEmployee(id)
    if (result.status >= 200 && result.status < 300) {
      alert("Employee deleted")
      getemployees()
    }
  }

 const filterEmployees=async(data)=>{
    const result= await filterStatus(data)
    // console.log(result);
    setemployees(result.data)
 }

  useEffect(() => {
    getemployees()
  }, [searchData])
  // console.log(employees);
  // console.log(searchData);

  return (
    <div>
      <AdminHeader></AdminHeader>
      {
        registerUpdate ?
          <Alert className='w-50 container p-3 my-5' variant={"success"} dismissible onClose={() => setRegisterUpdate("")}>
            {registerUpdate} is added successfully
          </Alert> : ""
      }
      {
        UpdateStatus ?
          <Alert className='w-50 container p-3 my-5' variant={"success"} dismissible onClose={() => setUpdateStatus("")}>
            {UpdateStatus.fname + " " + UpdateStatus.lname} profile updated
          </Alert> : ""
      }
      <div className='m-5 w-25'>
        <FloatingLabel
          controlId="floatingInput"
          label="Search Employee"
          className="mb-3 shadow"
        >
          <Form.Control onChange={(e) => setSearchData(e.target.value)} type="text" placeholder="employee name" />
        </FloatingLabel>
      </div>

      <div className='text-end pe-5 m-3 container'>
          <ButtonGroup aria-label="Basic example">
          <Button onClick={getemployees} variant="secondary">All</Button>
            <Button onClick={()=>filterEmployees('active')} variant="info">Active</Button>
            <Button onClick={()=>filterEmployees('inactive')} variant="warning">Inactive</Button>
          </ButtonGroup>
        </div>

      <TableContent deleteEmp={removeEmployee} empArray={employees}></TableContent>
    </div>
  )
}

export default Employee