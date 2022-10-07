import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/expenses/ExpenseSlice";



export const store=configureStore({

reducer:{
expense:expenseReducer
}



})
 
