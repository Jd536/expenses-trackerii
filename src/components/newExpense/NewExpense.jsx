import React, { useState } from "react"

import './NewExpense.css'

import ExpenseForm from "./ExpenseForm"

const NewExpense = ({onNewExpense}) => {

  const [addNewExpense, setAddNewExpense] = useState(false)

  const handleAddNewExpenseState = (event) => {
    event.preventDefault()
      setAddNewExpense(!addNewExpense)
  }

  const submitExpenseDataHandler = (enteredExpenseData) => { //this function will receive the expense data from the form
    const expenseData = {
      ...enteredExpenseData, 
      id:'id'+ (new Date()).getTime()* Math.random()
    }

    onNewExpense(expenseData)
  }

    
  return (
    <div className="new-expense">
       
        {
          !addNewExpense?<button onClick={handleAddNewExpenseState}>Add New Expense</button>
          : 
          <ExpenseForm onExpenseDataSubmit= {submitExpenseDataHandler} onCancel={handleAddNewExpenseState}/>
        }
    </div>
  )
}

export default NewExpense