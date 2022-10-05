import React from 'react'

const Listexpense = (props) => {
  return (
   <div>
    <div>{props.item}</div>
    <div>{props.expense}</div>
    <div>{props.amount}</div>
    <div>{props.remark}</div>
   </div>
  )
}

export default Listexpense