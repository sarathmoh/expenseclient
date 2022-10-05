import React from 'react'
import { Col,Row,Container,Button} from 'react-bootstrap'
import form2 from '../assets/form2.svg';
import form3 from '../assets/add.svg';
import { useFormik} from 'formik';
import { updateValidation } from '../schema/Update';
import './Update.css';
import {useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { allExpenses } from '../features/expenses/ExpenseSlice';
import { useDispatch } from 'react-redux';
import { updateExpense } from '../features/expenses/ExpenseSlice';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

// const initialValues = {
   
//   item: "",
//   expense: "",
//   date:"",
//   remark:"",
//   };

const Updateexpense = () => {

  const dispatch=useDispatch();
  const {id:expenseid}=useParams();
  const navigate=useNavigate();

  const token=localStorage.getItem("token");  

  const expenses=useSelector(allExpenses)
  const firstArray=expenses.find(item=>{
   return item.expenseid===expenseid;
  })
 
  console.log(firstArray);
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  useFormik({
    initialValues:{

      item: firstArray.item,
      expense:firstArray.expense ,
      date:firstArray.date,
      remark:firstArray.remark,


    },
    validationSchema: updateValidation,
    onSubmit: async (values, action) => {



      try{

        const {item,expense,date,remark}=values;  
        const response=await axios.patch('http://localhost:4000/api/updateexpense',{expenseid,item,expense,date,remark},{headers:{authtoken:token}})
        action.resetForm();
        navigate('/display');
    
      }
      catch(error){
        console.log(error);
      }
   
    },
  });


     return (
    <Container className='mt-3'>
    <Row>
    <Col className="text-left"  lg={6} md={8} sm={12}>
    <h3 className='update'>Hey update your exepense here!!!</h3>
    <img src={form3} alt="addpic" className='updatepic'/>
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
      
  
     
  
  
  <Col className="add"  lg={6} md={6} sm={12} >
  <img className='update2' src={form2} alt="icon"/>   
  </Col>
  </Row>
  </Container>

  )
}

export default Updateexpense