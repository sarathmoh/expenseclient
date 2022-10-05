import * as Yup from "yup";

export const registerValidation = Yup.object({

  firstname:Yup.string()
  .max(15,'Must be 15 Characters or Less')
  .min(5,'Minumum five lettes required')
  .required('First name required'),

  lastname:Yup.string()
  .max(15,'Must be 15 Characters or Less')
  .min(5,'Minumum five lettes required')
  .required('Last name required'),

  email: Yup.string().email().required("Please enter your email"),
  
  password: Yup.string().min(6).required("Please enter your password")
  .min(8,'Password too short should be 8 minimum')
  .matches(/[a-zA-Z]/,'Password can only contain Latin Letters.'),

  confirm:Yup.string().min(6).required("Please enter your password")
  .min(8,'Password too short should be 8 minimum')
  .matches(/[a-zA-Z]/,'Password can only contain Latin Letters.')
  .oneOf([Yup.ref("password"),null],"Password must match"),

  
})
