import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { adminLogic } from '../service/allAPIs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {

  //validation state
  const [emailValid,setEmailValid]=useState(true)
  const [pswValid,setpswValid]=useState(true)

  //state to hold input
  const [loginInputs, setloginInputs] = useState({
    email: "",
    psw: ""
  })
  const setInputs = (e) => {
    const { value, name } = e.target
    // console.log(e.target.name);
    if(name=='email'){
      // console.log(value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/));
      if(value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        setEmailValid(true)
        setloginInputs({ ...loginInputs, [name]: value })
      }
      else{
        setEmailValid(false)
      }
    }
    if(name=='psw'){
      if(value.match(/^[a-zA-Z0-9]+$/)){
        setpswValid(true)
        setloginInputs({ ...loginInputs, [name]: value })
      }
      else{
        setpswValid(false)
      }
    }
  }
  // console.log(loginInputs);

  const navigate = useNavigate()

  const handleSubmit =async () => {
    const {email,psw}=loginInputs
    if(email=="" || psw==""){
      alert("Enter details")
    }
    else{
      const result=await adminLogic(loginInputs)
      // console.log(result);
      if(result.status>=200 && result.status<300){
        // alert(result.data)
        navigate('/home')
      }
      else{
        // alert(result.response.data)
        toast.error(result.response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
    }
  }
  return (
    <div className='container'>
      <Row>
        <Col >
          <img src="https://i.postimg.cc/yxg208Zk/ezgif-com-gif-maker-6.gif" alt="" />
        </Col>
        <Col className='p-5 m-5'>
          <h2 className='text-center text-primary font'>Sign In</h2>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3">
            <Form.Control onChange={(e) => setInputs(e)} name="email" type="email" placeholder="name@example.com" />
          </FloatingLabel>

          { !emailValid &&
            <div><p className="text-danger">*Invalid Email!</p></div>
            }

          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control onChange={(e) => setInputs(e)} name="psw" type="password" placeholder="Password" />
          </FloatingLabel>

          { !pswValid &&
            <div><p className="text-danger">*Password must contain characters and digits</p></div>
            }

          <button onClick={handleSubmit} className='btn btn-primary m-3 float-end'>Login</button>
        </Col>
      </Row>
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
  )
}

export default Login