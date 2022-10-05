import React from "react";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFormik } from "formik";
import { registerValidation } from "../schema/Register";
import signup from "../assets/undrawregister.svg";
import avatharreg from "../assets/fem.svg";
import "./Registration.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirm: "",
};

const Registration = () => {

  const navigate=useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: registerValidation,
       onSubmit: async (values, action) => {
        
       try{
            const response= await axios.post("http://localhost:4000/auth/registration",values);

            if(response.status===200){
              alert(response.data);

            }
            else if(response.status===201){
              alert(response.data);
              navigate('/login');
            }
          else{
              alert("error");
            }

       }
      
      catch(error){
        console.log(error);
      }
    action.resetForm();
      },
    });

  //   const [name,setName]=useState();
  //   const [email,setEmail]=useState();
  //   const [phone,setPhone]=useState();
  //   const [password,setPassword]=useState();

  //  const getName=(event)=>{
  //     setName(event.target.value);
  //   }

  //  const getEmail=(event)=>{
  //     setEmail(event.target.value);
  //   }

  //   const getMobile=(event)=>{
  //     setPhone(event.target.value);
  //   }

  //   const getPassword=(event)=>{
  //     setPassword(event.target.value);
  //   }

  //   const submitHandler=(e)=>{

  //     e.preventDefault();

  //     const registeredData={
  //       name:name,
  //       email:email,
  //       phone:phone,
  //       password:password
  //     }

  //   setEmail('');
  //   setName('');
  //   setPassword('');
  //   setPhone('');
  //   }

  //  <div >
  //  <form onSubmit={submitHandler}>
  //  <h3>sign up</h3>
  //  <label>enter your name</label>
  //  <input type="text" onChange={getName}  value={name} />
  //  <label>Enter email id</label>
  //  <input type="email" onChange={getEmail} value={email}/>
  //  <label>enter your mobile number</label>
  //  <input type="number"  onChange={getMobile} value={phone}/>
  //  <label>password</label>
  //  <input type="password" onChange={getPassword} value={password} />
  //  </form>
  //  </div>

  return (
    <Container className="mt-3">
      <Row>
        <Col className="mt-4" lg={6} md={8} sm={12}>
          <h3 className="head">EXPENSE TRACKER SIGN UP!!!</h3>
          <img src={avatharreg} alt="regpic" className="avathar" />

          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                autoComplete="off"
                name="firstname"
                id="firstname"
                className="form-control mb-2"
                placeholder="Enter Your Firstname"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstname && touched.firstname ? (
                <p className="form-error">{errors.firstname}</p>
              ) : null}
            </div>

            <div>
              <input
                type="text"
                autoComplete="off"
                name="lastname"
                id="lastname"
                className="form-control mb-2"
                placeholder="Enter Your Lastname"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastname && touched.lastname ? (
                <p className="form-error">{errors.lastname}</p>
              ) : null}
            </div>

            <div>
              <input
                type="email"
                autoComplete="off"
                name="email"
                id="email"
                className="form-control mb-2"
                placeholder="Enter Your Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>

            <div>
              <input
                type="password"
                autoComplete="off"
                name="password"
                id="password"
                className="form-control mb-2"
                placeholder="Enter Your Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error">{errors.password}</p>
              ) : null}
            </div>

            <div>
              <input
                type="password"
                autoComplete="off"
                name="confirm"
                id="cpassword"
                className="form-control mb-2"
                placeholder="Confirm your password"
                value={values.confirm}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm && touched.confirm ? (
                <p className="form-error">{errors.confirm}</p>
              ) : null}
            </div>

            <div className="d-grid gap-2 mb-4">
              <Button variant="primary" size="md" type="submit">
                Sign up
              </Button>
            </div>
          </form>
        </Col>

        <Col className="avarthar2" lg={6} md={6} sm={12}>
          <img className=" ml-5 signup w-100" src={signup} alt="icon" />
          <div className="last mt-4">
            <a href="./login" className="">
              Do you have an account?
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
