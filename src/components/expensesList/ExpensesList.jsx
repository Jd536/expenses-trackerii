import React from "react"

import ExpenseItem from '../expenseItem/ExpenseItem'


import './ExpensesList.css'

function ExpensesList({filteredExpenses}) {

  if(filteredExpenses.length===0){
    return <h2 className="expenses-list__falback">No Expenses Found.</h2>
  }

  return (
    <ul className="expenses-list">
       {
          filteredExpenses.length === 0?<p>No expenses found</p>:
        filteredExpenses.map(expense => {
          return <ExpenseItem key={expense.id} data = {expense} />
        })
      }
    </ul>
  )
}

export default ExpensesList