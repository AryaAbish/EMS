import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addNewEmployee } from '../service/allAPIs';
import Alert from 'react-bootstrap/Alert';
import { registerContext } from '../Components/ContextShare';
import AdminHeader from '../Components/AdminHeader';

function Add() {

  //access context
  const {registerUpdate,setRegisterUpdate}=useContext(registerContext)
  // console.log(registerUpdate);

  //state for validation
  const [fnameValid, setfnameValid] = useState(true)
  const [emailValid, setEmailValid] = useState(true)
  const [lnameValid, setlnameValid] = useState(true)
  const [mobileValid, setmobileValid] = useState(true)
  const [locationValid, setlocationValid] = useState(true)

  const navigate=useNavigate()

  //state to hold error message from backend
  const [errormsg,seterrormsg]=useState("")

  //state to store inputs
  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    status: "",
    location: ""
  })

  //state to store image
  const [image, setImage] = useState("")

  const imageChoose = (e) => {
    setImage(e.target.files[0])
    // console.log(e.target.files[0]); 
  }

  //state to hold image preview url
  const [imgpreview, setImgPreview] = useState("")
  useEffect(() => {
    if (image) {
      setImgPreview(URL.createObjectURL(image))
    }
  }, [image])

  const setData = (e) => {
    const { value, name } = e.target

    if (name == 'fname') {
      if (value.match(/^[a-zA-Z]+$/)) {
        setfnameValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setfnameValid(false)
      }
    }

    if (name == 'email') {
      if (value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
        setEmailValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setEmailValid(false)
      }
    }

    if (name == 'lname') {
      if (value.match(/^[a-zA-Z]+$/)) {
        setlnameValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setlnameValid(false)
      }
    }

    if (name == 'mobile') {
      if (value.match(/^[+][0-9]{10,12}$/)) {
        setmobileValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setmobileValid(false)
      }
    }
    if (name == 'location') {
      if (value.match(/^[a-zA-Z0-9 ]+$/)) {
        setlocationValid(true)
        setInputs({ ...inputs, [name]: value })
      }
      else {
        setlocationValid(false)
      }
    }
    if (name == 'gender' || name == 'status') {
      setInputs({ ...inputs, [name]: value })
    }

  }
  // console.log(inputs);

  const handleAdd = async (e) => {
    e.preventDefault()
    // alert("Button clicked")
    const { fname, lname, email, gender, status, location, mobile } = inputs
    if (fname == "") {
      toast.error("Enter First Name");
    }
    else if (lname == "") {
      toast.error("Enter Last Name")
    }
    else if (email == "") {
      toast.error("Enter Email")
    }
    else if (gender == "") {
      toast.error("Choose Gender")
    }
    else if (status == "") {
      toast.error("Enter Status")
    }
    else if (location == "") {
      toast.error("Enter Location")
    }
    else if (mobile == "") {
      toast.error("Enter mobile number")
    }
    else if (image == "") {
      toast.error("Choose Image")
    }
    else {
      //header - body data contain file type
      const headerConfig = {
        "Content-Type": "multipart/form-data"
      }

      //body - data as Form data as it contain file type data
      const data = new FormData()
      //append fname,lname,status,mobile,location,gender,email,profile
      data.append("fname", fname)
      data.append("lname", lname)
      data.append("status", status)
      data.append("mobile", mobile)
      data.append("location", location)
      data.append("gender", gender)
      data.append("email", email)
      data.append("user_profile", image) //user_profile from multer

      //api call
      const result = await addNewEmployee(data, headerConfig)
      // console.log(result);
      // toast.success("Employee Added")
      if (result.status >= 200 && result.status < 300) {
        //clear datas from input state
        setInputs({
          ...inputs,
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          gender: "",
          status: "",
          location: ""
        })
        //reset image state
        setImage("")
        // console.log(result);

        setRegisterUpdate(result.data)
        // console.log(registerUpdate);
        navigate('/employee-manage')
      }
      else{
        seterrormsg(result.response.data)
      }
    }
    // console.log(inputs);
    // console.log(image);
  }

  return (
    <div>
      <AdminHeader></AdminHeader>
       <div className='text-center container'>
         {
        errormsg?
        (<Alert className='w-50 container p-3 my-5' variant={"danger"} dismissible onClose={()=>seterrormsg("")}>
        {errormsg}
      </Alert>):""
      }
        <h1 className='font'>Register Employee</h1>
        <Link to={'/home'}><div className='text-end'><button className='btn btn-secondary'>Back</button></div></Link>
        <Form className='border container m-5 p-3'>
          <img className='rounded-border' src={imgpreview ? imgpreview : "https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt="" style={{ height: '100px', width: '100px' }} />
          <Row className='text-start my-4'>
            <Col>
              <label className='py-2'>First Name</label>
              <input onChange={(e) => setData(e)} name="fname" required type="text" className='form-control' placeholder="First Name" />
              {!fnameValid &&
                <div><p className='text-danger'>Include characters only</p></div>
              }
  
              <label className='py-2'>Email</label>
              <input onChange={(e) => setData(e)} name="email" required type="email" className='form-control' placeholder="Email" />
              {!emailValid &&
                <div><p className="text-danger">*Invalid Email!</p></div>
              }
  
              <div>
                <label className='py-2'>Gender</label>
                <div><input onChange={(e) => setData(e)} name="gender" type="radio" id="male" value={'male'} className='form-check-input' /><label className='ps-2'>Male</label></div>
                <div><input onChange={(e) => setData(e)} name="gender" type="radio" id="female" value={'femle'} className='form-check-input' /><label className='ps-2'>Female</label></div>
              </div>
  
              <label className='py-2'>Choose Profile Picture</label>
              <input onChange={(e) => imageChoose(e)} required type="file" className='form-control' />
            </Col>
            <Col>
              <label className='py-2'>Last Name</label>
              <input onChange={(e) => setData(e)} name="lname" required type="text" className='form-control' placeholder="Last Name" />
              {!lnameValid &&
                <div><p className='text-danger'>Include characters only</p></div>
              }
  
              <label className='py-2'>Mobile Number</label>
              <input onChange={(e) => setData(e)} name="mobile" required type="text" className='form-control' placeholder="Mobile Number" />
              {!mobileValid &&
                <div><p className='text-danger'>Include digits of min10 and max12</p></div>
              }
  
              <label className='py-2'>Employee Status</label>
              <select onChange={(e) => setData(e)} name="status" className='m-2 w-100 form-control form-select' id="" defaultValue="select">
                <option value="select" disabled>-select-</option>
                <option value={"active"} id="active" className='form-check-input'>Active</option>
                <option value={"inactive"} id="inactive" className='form-check-input'>Inactive</option>
              </select>
  
              <label className='py-2'>Enter Employee Location</label>
              <input onChange={(e) => setData(e)} name="location" required className='form-control' type="text" id="" placeholder='Location' />
              {!locationValid &&
                <div><p className='text-danger'>Include characters and numbers only</p></div>
              }
  
            </Col>
            <div className='text-center'>
              <button onClick={(e) => handleAdd(e)} className='btn btn-success m-5 w-50' type='submit'>Submit</button>
            </div>
          </Row>
        </Form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
       </div>
  )
}

export default Add