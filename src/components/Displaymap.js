import React, { useEffect } from 'react';
import Display from './Display';
import { useSelector } from 'react-redux';
import { allExpenses } from '../features/expenses/ExpenseSlice';
import { useDispatch } from 'react-redux';
import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query';
import {addExpenseApi,viewExpenseApi,updateExpenseApi,deleteExpenseApi} from '../api/expenseApi';
import { viewExpense } from '../features/expenses/ExpenseSlice';
import axios from 'axios';
import { useState } from 'react';
import Box from '@mui/material/Box';

const Displaymap = () => {

const [display,setDisplay]=useState(true);
const edit=()=>{
  console.log("helooo");
  setDisplay(()=>{
    return (!display);
  });
}

const [expenses,setExpenses]=useState([])

const dispatch=useDispatch();

const token=localStorage.getItem("token");  
const  getExpenses=async()=>{

try{
    const response=await axios.get('https://protected-shore-01446.herokuapp.com/api/viewexpense',{headers:{authtoken:token}})
    dispatch(viewExpense(response.data));
    setExpenses(response.data);

  }
  catch(error){
    console.log(error);
  }
}  
 
useEffect(()=>{
  getExpenses()
},[display])

// const expenses=useSelector(allExpenses);



const list= expenses.map((item)=>{

return <Display edit={edit} key={item.expenseid} id={item.expenseid} item={item.item} expense={item.expense} date={item.date} remark={item.remark} />
})
return (
   
  <Box sx={{
    display: 'flex',
    gap:'10px',
    margin: '10px',
    flexWrap:'wrap',
   
  }} >{list}</Box>
    

  
  )
}

export default Displaymap