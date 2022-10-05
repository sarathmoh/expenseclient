import React, { useEffect } from 'react';
import Display from './Display';
import { useSelector } from 'react-redux';
import { allExpenses } from '../features/expenses/ExpenseSlice';
import { useDispatch } from 'react-redux';
import { useQuery,useMutation,useQueryClient } from '@tanstack/react-query';
import {addExpenseApi,viewExpenseApi,updateExpenseApi,deleteExpenseApi} from '../api/expenseApi';
import { viewExpense } from '../features/expenses/ExpenseSlice';
import axios from 'axios';

const Displaymap = () => {


const dispatch=useDispatch();
const token=localStorage.getItem("token");  
const  getExpenses=async()=>{

try{
    const response=await axios.get('http://localhost:4000/api/viewexpense',{headers:{authtoken:token}})
    dispatch(viewExpense(response.data));

  }
  catch(error){
    console.log(error);
  }
}  
 
useEffect(()=>{
  getExpenses()
},[])

const expenses=useSelector(allExpenses);



const list= expenses.map((item)=>{

return <Display key={item.id} id={item.id} item={item.item} expense={item.expense} date={item.date} remark={item.remark} />
})
return (
    <div>

     {list}

    </div>
  )
}

export default Displaymap