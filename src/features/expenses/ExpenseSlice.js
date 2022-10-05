import axios from 'axios'
import { createSlice, nanoid } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const addNewExpense=createAsyncThunk('expenses/addExpense',async(initialExpense)=>{
  try{
   const token=localStorage.getItem("token");
       
   const response=await axios.post("http://localhost:4000/api/addexpense",initialExpense,{headers:{authtoken:token}})
   return response.data

  }
  
  catch(error){
  return error.message
  }
})



// export const viewExpense=createAsyncThunk('expenses/viewExpense',async()=>{
//   try{
//    const token=localStorage.getItem("token");
//    const response=await axios.get("http://localhost:4000/api/viewexpense",{headers:{authtoken:token}})
//    return response.data

//   }
//   catch(error){
//   return error.message
//   }
// })














const initialState = [];

const expenseSlice = createSlice({
name: "expense",
initialState,
reducers: {
createExpense: {
reducer(state, action) {
        state.push(action.payload);
      },


prepare(id,item, expense, date, remark) {
        return {
          payload: {
            id,
            item,
            expense,
            date,
            remark,
          },
        };
      },
    },

    deleteExpense: {
      reducer(state, action) {
        return state.filter((item) => {
          return item.id !== action.payload;
        });
      },
      prepare(id) {
        return {
          payload: id,
        };
      },
    },

updateExpense: {
reducer(state, action) {
const updatedOne = state.findIndex((item) => {
return item.id === action.payload.id;
});
        state.splice(updatedOne, 1, action.payload);
      },

      prepare(id, item, expense, date, remark) {
        return {
          payload: {
            id,
            item,
            expense,
            date,
            remark,
          },
        };
      },
    },


 viewExpense: {
  reducer(state, action) {
  state=action.payload
  return state
        },
  
        prepare( expenses) {
          return {
            payload:expenses
            
          };
        },
      },
    },








});

export const { createExpense,viewExpense,deleteExpense,updateExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
export const allExpenses = (state) => {
  return state.expense;
};
