import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../features/expenses/ExpenseSlice';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const Display = ({edit,id,item,expense,date,remark} ) => {

const navigate=useNavigate();

const update=()=>{


navigate(`/updateexpense/${id}`);
}


    

const deleteExpenseitem=async()=>{


  try{

    const token=localStorage.getItem("token");
    const response=await axios.delete(`http://localhost:4000/api/deleteexpense/${id}`,{headers:{authtoken:token}})
    edit();
    navigate('/display');


  }
  catch(error){
    console.log(error);
  }


}

  return (
    <div>
        <div> {item} </div>
        <div> {expense} </div> 
        <div> {date} </div>
        <div> {remark} </div>
        <button onClick={deleteExpenseitem}>delete</button>
        <button onClick={update}>update</button>
   
    </div>
  )
}

export default Display