import * as Yup from "yup";
export const addValidation = Yup.object({

    item:Yup.string()
    .max(15,'Must be 15 Characters or Less')
    .required('item name must required'),
       
        
    expense:Yup.number()
    .positive("Number can't start with minus")
     .integer("Number can't include decimal point")
     .required("Expense amount must be required")
     .min(3,"minimum 3 digits"),
       
    date:Yup.date()
    .required("Date is required"),
       
          
    remark:Yup.string()
    .max(35,'Must be 15 Characters or Less')
    .min(5,"Minimum 5 characters required")
    .required("Remark must be required")
  

})