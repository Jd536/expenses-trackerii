import React, {useState, useEffect} from "react"

import './ExpenseForm.css'

const ExpenseForm = ({onExpenseDataSubmit, onCancel}) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAmount, setNewAmount] = useState('')
  const [newDate, setNewDate] = useState('')


  const titleChangeHandler =( event)=> {
    let value = event.target.value
    setNewTitle(value)
    
  }
  const amountChangeHandler =( event)=> {
    let value = event.target.value
    setNewAmount(value)
    
  }
  const dateChangeHandler =( event)=> {
    let value = event.target.value
    setNewDate(value)
    
  }

//  useEffect( () =>{
//    console.log(newAmount)
//  })


 const onSubmitHandler = (event)=> {
  event.preventDefault()
  const expenseData = {
    title: newTitle, 
    amount : +newAmount,
    date: newDate
  }

  onExpenseDataSubmit(expenseData)
  // console.log(expenseData)
  setNewTitle('')
  setNewAmount('')
  setNewDate('')
 }
// Two way bidng --- 
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
      <div className="new-expense__control">
        <label htmlFor=""> Title</label>
        <input type="text" name="" id="" value={newTitle} onChange={titleChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label htmlFor=""> Amout</label>
        <input type="numbert" min="0.01" step="0.01" value={newAmount} onChange={amountChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label htmlFor=""> Date</label>
        <input type="date" min='2019-01-01' max="2022-12-31" value={newDate} onChange={dateChangeHandler}/>
      </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
        
      </div>
    </form>
  )
}

export default ExpenseForm