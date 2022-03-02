import React from 'react'

import ExpenseDate from '../expensedate/ExpenseDate'
import Card from '../UI/Card'

import './ExpenseItem.css'

function ExpenseItem({data}) {

  return(
    <li>
      <Card className="expense-item">
        <ExpenseDate date= {data.date} />
        <div className="expense-item__description">
          <h2>{data.title}</h2>
          <div className="expense-item__price">${data.amount} </div>
        </div>
      </Card>
    </li>
  )
}

export default ExpenseItem