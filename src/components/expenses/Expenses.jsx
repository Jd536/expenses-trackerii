import React, { useEffect, useState } from'react'
import Card from '../UI/Card'
import ExpensesList from '../expensesList/ExpensesList'

import './Expenses.css'
import ExpenseFilter from '../filter/ExpensesFilter'
import ExpensesChart from './ExpensesChart'

const Expenses = ({data}) =>{
  const [filteredExpenses, setFilteredExpenses] = useState(data)
  const [filteredYear, setFilteredYear] = useState('')
  
  const onFilter = (year)=> {
    setFilteredYear(year)
  }

  /* ======================== REMEMEBER TO ADD A FILTER RESET BUTTON AND FUNCTION ========================== */
  const  filterData = (info)=> {
    let newData = info.filter(inf => {
      return inf.date.includes(filteredYear)
    })
    return newData
  }

  useEffect(()=> {
    setFilteredExpenses(filterData(data))
  }, [filteredYear])

  return(
    
    <Card className="expenses">
        <ExpenseFilter onFilter ={onFilter} selectedYear = {filteredYear}/> {/* thi sis a controled component*/}
        <ExpensesChart expenses = {filteredExpenses} />
        < ExpensesList filteredExpenses={filteredExpenses}/>
    </Card>
  )
}

export default Expenses