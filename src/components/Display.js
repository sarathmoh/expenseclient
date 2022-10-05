import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../features/expenses/ExpenseSlice';
import {useNavigate} from 'react-router-dom';

const Display = ({id,item,expense,date,remark} ) => {

const navigate=useNavigate();

const update=()=>{
navigate(`/updateexpense/${id}`);
}


    
const dispatch=useDispatch()
const deleteExpenseitem=()=>{
dispatch(deleteExpense(id))
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