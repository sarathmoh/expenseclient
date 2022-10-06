import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteExpense } from '../features/expenses/ExpenseSlice';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Display.css';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';





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
    <div className="display">
        {/* <div>
        <div> {item} </div>
        <div> {expense} </div> 
        <div> {date} </div>
        <div> {remark} </div>
        <button onClick={deleteExpenseitem}>delete</button>
        <button onClick={update}>update</button>
        </div> */}

<Card  sx={{ minWidth: 250,maxWidth:275}}>
      <CardContent>
        <Typography>Expense:{item}</Typography>
        <Typography>Amount Spend:{expense}</Typography>
        <Typography>Date:{date}</Typography>
        <Typography>Remark:{remark}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={update} size="small" variant="contained"  >
          update
        </Button>
        <Button onClick={deleteExpenseitem} size="small" variant="contained" >
          delete
        </Button>
        </CardActions>

</Card>

        

  </div>
  )
}

export default Display