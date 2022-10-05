import React from 'react'
import ListExpense from './Listexpense'

const Viewexpense = () => {

const display=[

    {item:"sarath",expense:1000,date:343,remark:"dsfdsds"},
    {item:"sarath",expense:1000,date:343,remark:"dsfdsds"},
    {item:"sarath",expense:1000,date:343,remark:"dsfdsds"},
    {item:"sarath",expense:1000,date:343,remark:"dsfdsds"}

];

const displayarr=display.map((item=>{ return <ListExpense item={item.item} expense={item.expense} date={item.date} remark={item.remark}/>
}))

  return (
    <div>
    {displayarr}
    </div>
  )
}

export default Viewexpense