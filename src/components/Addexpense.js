import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap';
import addpic from "../assets/undrawpersonal.svg";
import markpic from '../assets/notes.svg';
import { useFormik} from 'formik';
import { addValidation } from '../schema/Add';
import { useDispatch } from 'react-redux';
import { addNewExpense } from '../features/expenses/ExpenseSlice';
import {useNavigate} from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
import { createExpense } from '../features/expenses/ExpenseSlice';


const initialValues = {
   
  item: "",
  expense: "",
  date:"",
  remark:"",
  };



const Addexpense = () => {

const navigate=useNavigate()

const token=localStorage.getItem("token");  


  const dispatch=useDispatch()





  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
  initialValues,
  validationSchema: addValidation,
  onSubmit: async (values, action) => {
   
    try{ const {item,expense,date,remark}=values; 

    const id=nanoid();

    const response=await axios.post('http://localhost:4000/api/addexpense',{id,item,expense,date,remark},{headers:{authtoken:token}})

    // dispatch(createExpense(
    // {id,item,expense,date,remark}
    // )) 
   action.resetForm();
   navigate('/display');}

   catch(error){
    console.log(error);
   }
  },
  });


   
  return (
     
  <Container className='mt-3'>
  <Row>
  <Col className="text-left"  lg={6} md={8} sm={12}>
  <h3 className='font-weight-4 mt-4 mb-5 head '>Hey add your exepense here!!!</h3>
  <img className='w-75 mt-5' src={markpic} alt="icon"/> 
  </Col>
    

   


<Col className="add"  lg={6} md={6} sm={12} >
<img src={addpic} alt="addpic" className='addexpense w-75 mb-1'/>

<form onSubmit={handleSubmit}>
<div>  
<input
 type="text"
 autoComplete="off"
 name="item"
 id="item"
 placeholder="Enter your wish item"
 className='form-control mb-2'
 value={values.item}
 onChange={handleChange}
 onBlur={handleBlur}/>
 {errors.item && touched.item ? (
 <p className="form-error">{errors.item}</p>
) : null}
</div>  

<div>
<input
 type="number"
 autoComplete="off"
 name="expense"
 id="expense" className='form-control mb-2'
 placeholder="Enter the amount on purchase"
 value={values.expense}
 onChange={handleChange}
 onBlur={handleBlur}/>
 {errors.expense && touched.expense ? (
 <p className="form-error">{errors.expense}</p>
) : null}
</div>

<div>
<input
 type="date"
 autoComplete="off"
 name="date"
 id="date" className='form-control mb-2'
 placeholder="Select the date"
 value={values.date}
 onChange={handleChange}
 onBlur={handleBlur}/>
 {errors.date && touched.date ? (
 <p className="form-error">{errors.date}</p>
) : null}
</div>

<div>
<input
 type="text"
 autoComplete="off"
 name="remark"
 id="remark" className='form-control mb-2'
 placeholder="Enter the Remarks"
 value={values.remark}
 onChange={handleChange}
 onBlur={handleBlur}/>
 {errors.remark && touched.remark ? (
 <p className="form-error">{errors.remark}</p>
) : null}
</div>


<div className="d-grid gap-2 mb-3">
<Button variant="primary" size="md" type='submit' >
 Add Expense
</Button> 
</div>
</form>
    
   
</Col>
</Row>
</Container>
 )
}

export default Addexpense